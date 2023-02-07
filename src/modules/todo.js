import API from './api';

const getTodos = async () => {
  try {
    const response = await API.get(`/todos`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const createTodo = async ({ todo }) => {
  try {
    const response = await API.post(
      '/todos',
      {
        todo,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user')}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};
const updateTodo = async ({ id, todo, isCompleted }) => {
  try {
    const response = await API.put(
      `/todos/${id}`,
      {
        todo,
        isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user')}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};
const deleteTodo = async ({ id }) => {
  try {
    const response = await API.delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getTodos, createTodo, updateTodo, deleteTodo };
