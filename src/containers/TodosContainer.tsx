import React from 'react';

import TodoModel from '../models/TodoModel';
import Todo from '../models/Todo.interface';
import TodoList from '../components/TodoList';

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

    render() {
        if (!this.state.todos) return <h1>No Todos Found</h1>
        return (
            <div>
                <h1>To Do's</h1>
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
};

export default TodosContainer;