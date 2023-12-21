import axios from 'axios';
import { BASE_URL } from '../constants';

const TODO_API_URL = `${BASE_URL}/todos`;

export const getTodos = () => axios.get(TODO_API_URL);
export const deleteTodo = (id) => axios.delete(`${TODO_API_URL}/${id}`);
export const deleteCompleted = (todos) =>
  Promise.all(todos.map((todo) => axios.delete(`${TODO_API_URL}/${todo.id}`)));

export const postTodo = (text) => {
  const newTodo = {
    text,
    completed: false,
  };

  return axios.post(TODO_API_URL, newTodo);
};
export const updateTodo = (todo) =>  axios.put(`${TODO_API_URL}/${todo.id}`, todo);

