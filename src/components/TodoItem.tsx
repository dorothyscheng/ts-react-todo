import Todo from '../models/Todo.interface';

import ListGroup from 'react-bootstrap/ListGroup';

interface Props {
    todo: Todo,
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
    return (
        <div>
            <ListGroup.Item variant={variant}>{props.todo.body}</ListGroup.Item>
        </div>
    );
}

export default TodoItem;