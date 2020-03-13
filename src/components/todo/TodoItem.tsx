import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../types';
import todoContext from '../../contexts/todoContext';
import Button from '../common/Button';

const Container = styled.div`
  width: 100%;
  padding: 16px 0;
`

const Title = styled.h4`
  margin-bottom: 8px;
  font-size: 18px;
`
const Content = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  color: #999;
`
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;

  & span {
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 8px;
    border-radius: 500px;
    padding: 4px 8px;
    background: #ededed;
  }
`

interface IProps {
  todo: Todo
}

export default function TodoItem(props: IProps) {
  const { todo } = props;
  const { activeTodo, onActiveTodo } = React.useContext(todoContext);

  console.log(activeTodo, todo);

  return (
    <Container
      onClick={_ => onActiveTodo(todo)}
    >
      <Title>{todo.title}</Title>
      <Content>{todo.content}</Content>
      <Tags>
        {todo.tags.map((tag, i) => <span key={i}>{tag}</span>)}
      </Tags>
      {
        activeTodo?.id === todo.id && (
          <>
            <Button>수정</Button>
            <Button>삭제</Button>
          </>
        )
      }
    </Container>
  )
}
