import Todo from '../models/Todo.interface';
import TodoItem from './TodoItem';

import ListGroup from 'react-bootstrap/ListGroup';

interface Props {
    todos: Todo[],
    updateTodo: (todo: Todo) => void,
}

function TodoList(props: Props): JSX.Element {
    const todoItems = props.todos.map((todo: Todo) => {
        return <TodoItem key={todo._id} todo={todo} updateTodo={props.updateTodo} />
    });
    return (
        <ListGroup>
            { todoItems }
        </ListGroup>
    );
};

export default TodoList;