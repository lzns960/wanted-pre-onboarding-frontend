import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { Box, Tab } from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';

export default function TodoList({ todos, editTodo, deleteTodo }) {
  const [value, setValue] = useState('1');

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChangeTab}>
          <Tab label="All" value="1" />
          <Tab label="해야 할 일" value="2" />
          <Tab label="완료한 일" value="3" />
        </TabList>
      </Box>
      <TabWrap>
        <TabPanel value="1">
          <ul>
            {todos.map((todo, id) => (
              <TodoItem
                key={id}
                todo={todo}
                index={id}
                editTodo={editTodo}
                onToggle={() => onToggle(todo.id)}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabWrap>
    </TabContext>
  );
}
const TabWrap = styled.div``;
