import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import todoContext from '../../contexts/todoContext';

const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Empty = styled.div`
  margin: auto 0;
  font-size: 24px;
  text-align: center;
  color: #666;
`

export default function TodoList() {
  const { todos, activeTodo, onActiveTodo, onComplateTodo, onDeleteTodo, onClickUpdate } = React.useContext(todoContext);
  
  return (
    <List>
      {todos.map(todo => (
        <TodoItem
          {...todo}
          isActive={activeTodo?.id === todo.id}
          onActive={onActiveTodo}
          onComplate={onComplateTodo}
          onDelete={onDeleteTodo}
          onUpdate={onClickUpdate}
          key={todo.id}
        />
      ))}
      {
        !todos.length && (
          <Empty>
            <p>일정이 없습니다</p>
            <p>일정을 추가해보세요!</p>
          </Empty>
        )
      }
    </List>
  )
}
