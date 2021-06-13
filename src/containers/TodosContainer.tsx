import React from 'react';

import TodoModel from '../models/TodoModel';
import Todo from '../models/Todo.interface';
import TodoList from '../components/TodoList';
import CreateTodoForm from '../components/CreateTodoForm';

interface State {
    todos: Todo[],
}

class TodosContainer extends React.Component<{}, State> {
    state: State = {
        todos: [],
    }

    static sortTodos = (todoArr: Todo[]): Todo[] => {
        return todoArr.sort((a: Todo, b: Todo) => {
            if (typeof a.priority !== 'number' || ! a.priority) {
                a.priority = 0;
            };
            if (typeof b.priority !== 'number' || ! b.priority) {
                b.priority = 0;
            };
            return b.priority - a.priority;
        });
    }

    fetchData = (): void => {
        TodoModel.all()
            .then((response: Todo[]) => {
                const sortedTodos = TodosContainer.sortTodos(response);
                this.setState({
                    todos: sortedTodos,
                })
            })
    }

    componentDidMount() {
        this.fetchData();
    }

    handleSubmit = (todo: Todo): void => {
        TodoModel.create(todo)
            .then((response: Todo) => {
                let todos: Todo[] = this.state.todos;
                todos.push(response);
                const sortedTodos = TodosContainer.sortTodos(todos);
                this.setState({
                    todos: sortedTodos,
                });
            });
    }

    updateTodo = (todo: Todo): void => {
        TodoModel.update(todo)
            .then((response: Todo) => {
                let todos = this.state.todos;
                todos = todos.filter(todo => todo._id !== response._id);
                todos.push(response);
                const sortedTodos = TodosContainer.sortTodos(todos);
                this.setState({
                    todos: sortedTodos,
                });
            });
    }

    handleDelete = (todo: Todo): void => {
        TodoModel.delete(todo)
            .then((response: Todo) => {
                let todos = this.state.todos;
                todos = todos.filter(todo => todo._id !== response._id);
                const sortedTodos = TodosContainer.sortTodos(todos);
                this.setState({
                    todos: sortedTodos,
                });
            });
    }

    render(): JSX.Element {
        if (!this.state.todos) return <h1>No Todos Found</h1>
        return (
            <div>
                <h1>To Do's</h1>
                <CreateTodoForm handleSubmit={this.handleSubmit} />
                <TodoList todos={this.state.todos} updateTodo={this.updateTodo} handleDelete={this.handleDelete} />
            </div>
        );
    }
};

export default TodosContainer;