export default interface Todo {
    body: string,
    completed: boolean,
    _id?: string,
    priority?: number | string,
    _v?: number,
}