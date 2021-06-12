import Todo from '../models/Todo.interface';

import ListGroup from 'react-bootstrap/ListGroup';
import { Check2Circle } from 'react-bootstrap-icons';

interface Props {
    todo: Todo,
    updateTodo: (todo: Todo) => void,
}

function TodoItem(props: Props): JSX.Element {
    let variant: string = 'secondary'
    if (props.todo.priority) {
        if (props.todo.priority < 4) {
            variant = 'primary';
        } else if (props.todo.priority < 7) {
            variant = 'warning';
        } else {
            variant = 'danger';
        };
    };
    let completedClass: string = 'checkbox';
    if (props.todo.completed) {
        completedClass+= ' done';
    };
    return (
        <div>
            <ListGroup.Item variant={variant} className={props.todo.completed ? 'done-task' : ''}>
                <Check2Circle 
                    className={completedClass}
                    onClick={() => props.updateTodo({
                        ...props.todo,
                        completed: !props.todo.completed,
                    })}
                />
                {props.todo.body}
            </ListGroup.Item>
        </div>
    );
}

export default TodoItem;