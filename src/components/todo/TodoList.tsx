import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { Todo } from '../../types';
import todoContext from '../../contexts/todoContext';

interface IProps {
  todos: Todo[]
}

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

export default function TodoList(props: IProps) {
  const { todos } = React.useContext(todoContext);

  return (
    <List>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
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
