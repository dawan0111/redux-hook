import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../types';
import Button from '../common/Button';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
`

const Title = styled.h4`
  margin-bottom: 8px;
  font-size: 18px;
  text-decoration: inherit;
`
const Content = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  color: #999;
  text-decoration: inherit;
`
const Tags = styled.div`
  flex-wrap: wrap;
  font-size: 12px;
  text-decoration: none;

  & span {
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 8px;
    border-radius: 500px;
    padding: 4px 8px;
    background: #ededed;
    text-decoration: none;
  }
`
const FrontContent = styled.div<{
  open: boolean;
  complate: boolean;
}>`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: #fafafa;
  padding: 16px;
  transform: translateX(0);

  ${props => props.open && `
    transform: translateX(-60px);
  `}
  ${props => props.complate && `
    text-decoration: line-through;
  `}

  transition: 300ms ease;
`

const Actions = styled.div<{
  open: boolean;
}>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1px;
  right: 0;
  width: 60px;
  height: calc(100% - 2px);
`
const ActionButton = styled(Button)`
  width: 100%;
  flex: 1;
  border-radius: 0;
  border: none;
`

type TProps = Todo & {
  isActive: boolean;
  onComplate: (todoId: number, complate: boolean) => void;
  onActive: (todo: Todo | null) => void;
  onDelete: (todoId: number) => void;
  onUpdate: (todo: Todo) => void;
}

export default React.memo(function TodoItem(props: TProps) {
  const { isActive, onActive, onDelete, onComplate, onUpdate, ...todo } = props;

  console.log('render!!');

  return (
    <Container>
      <FrontContent
        open={isActive}
        complate={todo.complate}
        onClick={_ => onActive(isActive ? null : todo)}
      >
        <Title>{todo.title}</Title>
        <Content>{todo.content}</Content>
        <Tags>
          {todo.tags.map((tag, i) => <span key={i}>{tag}</span>)}
        </Tags>
      </FrontContent>
      <Actions open={isActive}>
        <ActionButton onClick={_ => onComplate(todo.id, !todo.complate)} color="primary">{todo.complate ? '취소' : '완료'}</ActionButton>
        <ActionButton onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onUpdate(todo)
        }}>수정</ActionButton>
        <ActionButton onClick={_ => onDelete(todo.id)}>삭제</ActionButton>
      </Actions>
    </Container>
  )
})
