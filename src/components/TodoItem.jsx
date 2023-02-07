import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaRegSave } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { Button, Input, Checkbox } from '@mui/material';
import styled from 'styled-components';

export default function TodoItem({ todo, id, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.todo);

  function handleUpdateTodo(event) {
    event.preventDefault();
    editTodo(todo.id, newTodo, todo.isCompleted);
    setIsEditing(false);
  }

  return (
    <li key={id}>
      {isEditing ? (
        <form onSubmit={handleUpdateTodo}>
          <Input
            type="text"
            data-testid="modify-input"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
          />
          <Button
            data-testid="cancel-button"
            onClick={() => setIsEditing(false)}>
            <IoClose />
          </Button>
          <Button type="submit" data-testid="submit-button" variant="contained">
            <FaRegSave />
          </Button>
        </form>
      ) : (
        <Todo>
          <Checkbox
            type="checkbox"
            checked={todo.isCompleted}
            onChange={(event) => {
              editTodo(todo.id, todo.todo, event.target.checked);
            }}
          />

          <span
            style={{
              textDecoration: todo.isCompleted ? 'line-through' : ' ',
            }}
            className="todoText">
            {todo.todo}
          </span>

          <Button
            onClick={() => setIsEditing(true)}
            data-testid="modify-button">
            <AiFillEdit />
          </Button>
          <Button
            onClick={() => deleteTodo(todo.id)}
            data-testid="delete-button">
            <BsFillTrashFill />
          </Button>
        </Todo>
      )}
    </li>
  );
}

const Todo = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  & .todoText {
    line-height: 2rem;
  }
`;
