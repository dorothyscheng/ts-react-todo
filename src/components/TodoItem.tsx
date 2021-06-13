import React from 'react';

import Todo from '../models/Todo.interface';
import UpdateTodoForm from './UpdateTodoForm';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Check2Circle } from 'react-bootstrap-icons';

interface Props {
    todo: Todo,
    updateTodo: (todo: Todo) => void,
    handleDelete: (todo: Todo) => void,
}

interface State {
    formStyle: {
        display: string,
    },
}

class TodoItem extends React.Component<Props, State> {
    state = {
        formStyle: {
            display: 'none',
        },
    }

    toggleUpdateForm = (): void => {
        let display: State["formStyle"] = {display: 'flex'};
        if (this.state.formStyle.display === 'flex') {
            display = { display: 'none' };
        };
        this.setState({
            formStyle: display,
        });
    }

    render(): JSX.Element {
        let variant: string = ''
        if (this.props.todo.priority) {
            if (this.props.todo.priority < 4) {
                variant = 'primary';
            } else if (this.props.todo.priority < 7) {
                variant = 'warning';
            } else {
                variant = 'danger';
            };
        };
        if (this.props.todo.completed) {
            variant = 'dark';
        };
        let completedClass: string = 'checkbox';
        if (this.props.todo.completed) {
            completedClass+= ' done';
        };
        return (
            <div>
                <ListGroup.Item variant={variant} className={this.props.todo.completed ? 'done-task' : ''}>
                    <Row>
                        <Col className="col-10">
                            <Check2Circle 
                                className={completedClass}
                                onClick={() => this.props.updateTodo({
                                    ...this.props.todo,
                                    completed: !this.props.todo.completed,
                                })}
                            />
                            {this.props.todo.body}
                        </Col>
                        <Col className="action-buttons">
                            <Button variant="warning" onClick={this.toggleUpdateForm}>Edit</Button>
                            <Button variant="danger" onClick={() => this.props.handleDelete(this.props.todo)}>Delete</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <UpdateTodoForm todo={this.props.todo} style={this.state.formStyle} updateTodo={this.props.updateTodo} toggleUpdateForm={this.toggleUpdateForm} />
                        </Col>
                    </Row>
                </ListGroup.Item>
            </div>
        );
    }
}

export default TodoItem;