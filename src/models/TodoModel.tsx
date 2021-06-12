import axios, { AxiosResponse } from 'axios';
import Todo from './Todo.interface';

const endPoint = 'https://super-crud.herokuapp.com/todos';

class TodoModel {
    static all = async (): Promise<Todo[]> => {
        const response: AxiosResponse = await axios.get<Todo[]>(endPoint);
        return response.data.todos;
    }

    static create = async (todo: Todo): Promise<Todo> => {
        const response: AxiosResponse = await axios.post<Todo>(endPoint, todo);
        return response.data;
    }

    static update = async (todo: Todo): Promise<Todo> => {
        const response: AxiosResponse = await axios.put<Todo>(`${endPoint}/${todo._id}`, todo);
        return response.data;
    }
}

export default TodoModel;