import React from 'react';
import Todo from '../models/Todo.interface';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface State {
    body: string,
    priority: number | string,
    completed: boolean,
}

interface Props {
    handleSubmit: (todo: Todo) => void,
}

class CreateTodoForm extends React.Component<Props, State> {
    state = {
        body: '',
        priority: '',
        completed: false,
    }

    handleBodyChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            body: e.target.value,
        });
    }

    handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            priority: e.target.value,
        });
    }

    handleCompletedChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            completed: e.target.checked,
        });
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let priority: number | string = this.state.priority;
        if (priority === '1 (lowest)') {
            priority = 1;
        } else if (priority === '10 (highest)') {
            priority = 10;
        };
        this.props.handleSubmit({
            ...this.state,
            priority: priority,
        });
        this.setState({
            body: '',
            priority: '',
            completed: false,
        });
    }

    render(): JSX.Element {
        return (
                <Form 
                    className="new-todo-form"
                    onSubmit={this.handleSubmit}
                >
                    <Form.Group controlId="body">
                        <Form.Label>To Do:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="What do you need to do?" 
                            name="body" 
                            value={this.state.body}
                            onChange={this.handleBodyChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="priority">
                        <Form.Label>Priority:</Form.Label>
                        <Form.Control 
                            size="sm" 
                            as="select" 
                            name="priority" 
                            value={this.state.priority}
                            onChange={this.handlePriorityChange}
                        >
                            <option>-Select-</option>
                            <option>1 (lowest)</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10 (highest)</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Check 
                        type="checkbox" 
                        label="Completed" 
                        name="completed"
                        onChange={this.handleCompletedChange}
                    />

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        );
    }
};

export default CreateTodoForm;