import Todo from '../models/Todo.interface';
import TodoItem from './TodoItem';

import ListGroup from 'react-bootstrap/ListGroup';

interface Props {
    todos: Todo[],
}

function TodoList(props: Props): JSX.Element {
    const todoItems = props.todos.map((todo: Todo) => {
        return <TodoItem key={todo._id} todo={todo} />
    });
    return (
        <ListGroup>
            { todoItems }
        </ListGroup>
    );
};

export default TodoList;