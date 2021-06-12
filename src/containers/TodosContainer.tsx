import React from 'react';

interface State {
    todo: String | null,
}

class TodosContainer extends React.Component<{}, State> {
    state: State = {
        todo: '',
    }

    render() {
        return (
            <div>
                <h1>To Do's</h1>
            </div>
        );
    }
};

export default TodosContainer;