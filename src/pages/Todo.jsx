import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as todo from '../modules/todo';
import TodoList from '../components/TodoList';
import Container from '../components/Container';
import { createTheme, ThemeProvider, TextField, Button } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

export default function Todo() {
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const changeNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const getTodos = async () => {
    const response = await todo.getTodos();
    if (response !== undefined) {
      setTodos(response);
    }
  };
  const handleCreateTodo = async (event) => {
    event.preventDefault();
    const response = await todo.createTodo({ todo: newTodo });
    if (response != undefined) {
      setTodos([...todos, { todo: newTodo }]);
      setNewTodo('');
      window.location.reload();
    }
  };

  const editTodo = async (_id, _todo, _isCompleted) => {
    const response = await todo.updateTodo({
      id: _id,
      todo: _todo,
      isCompleted: _isCompleted,
    });
    if (response != undefined) {
      setTodos(
        todos.map((todo) =>
          todo.id === response?.id
            ? {
                ...todo,
                todo: response.todo,
                isCompleted: response.isCompleted,
              }
            : todo,
        ),
      );
    }
  };

  const deleteTodo = async (_id) => {
    await todo.deleteTodo({ id: _id });
    setTodos(todos.filter((todo) => todo.id !== _id));
  };
  useEffect(() => {
    const userToken = localStorage.getItem('user');
    if (!userToken) {
      navigate('/');
    }
    getTodos();
  }, []);

  return (
    <Container>
      <ThemeProvider theme={lightTheme}>
        <MainWrapper>
          <img
            src={process.env.PUBLIC_URL + '/images/title.png'}
            alt="title"
            className="title"
          />

          <form onSubmit={handleCreateTodo}>
            <TextField
              onChange={changeNewTodo}
              value={newTodo}
              data-testid="new-todo-input"
              type="text"
              id="outlined-textarea"
              label="Add to-do"
              placeholder="할 일을 입력해주세요."
              // multiline
            />
            <Button
              data-testid="new-todo-add-button"
              type="submit"
              variant="contained"
              className="button addBtn">
              Add
            </Button>
          </form>
          <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
        </MainWrapper>
      </ThemeProvider>
    </Container>
  );
}
const MainWrapper = styled.div`
  border-radius: 10px;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  & img {
    max-width: 100%;
    max-height: 30vw;
  }

  & #outlined-textarea {
    width: 250px;
  }

  & .addBtn {
    padding: 15px 20px;
  }
`;
