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

    fetchData = (): void => {
        TodoModel.all()
            .then((response: Todo[]) => {
                this.setState({
                    todos: response,
                })
            })
    }

    componentDidMount() {
        this.fetchData();
    }

    handleSubmit = (todo: Todo): void => {
        TodoModel.create(todo)
            .then((response: Todo) => {
                console.log(response);
                let todos: Todo[] = this.state.todos;
                todos.push(response);
                this.setState({
                    todos: todos,
                });
            });
    }

    render(): JSX.Element {
        if (!this.state.todos) return <h1>No Todos Found</h1>
        return (
            <div>
                <h1>To Do's</h1>
                <CreateTodoForm handleSubmit={this.handleSubmit} />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
};

export default TodosContainer;