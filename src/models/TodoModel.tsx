import axios, { AxiosResponse } from 'axios';
import Todo from './Todo.interface';

const endPoint = 'https://super-crud.herokuapp.com/todos';

class TodoModel {
    static all = async () => {
        const response: AxiosResponse = await axios.get<Todo[]>(endPoint);
        return response.data.todos;
    }
}

export default TodoModel;