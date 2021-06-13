import Todo from '../models/Todo.interface';

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

function TodoItem(props: Props): JSX.Element {
    let variant: string = 'info'
    if (props.todo.priority) {
        if (props.todo.priority < 4) {
            variant = 'primary';
        } else if (props.todo.priority < 7) {
            variant = 'warning';
        } else {
            variant = 'danger';
        };
    };
    if (props.todo.completed) {
        variant = 'dark';
    };
    let completedClass: string = 'checkbox';
    if (props.todo.completed) {
        completedClass+= ' done';
    };
    return (
        <div>
            <ListGroup.Item variant={variant} className={props.todo.completed ? 'done-task' : ''}>
                <Row>
                    <Col className="col-10">
                        <Check2Circle 
                            className={completedClass}
                            onClick={() => props.updateTodo({
                                ...props.todo,
                                completed: !props.todo.completed,
                            })}
                        />
                        {props.todo.body}
                    </Col>
                    <Col className="action-buttons">
                        <Button variant="warning">Edit</Button>
                        <Button variant="danger" onClick={() => props.handleDelete(props.todo)}>Delete</Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        </div>
    );
}

export default TodoItem;