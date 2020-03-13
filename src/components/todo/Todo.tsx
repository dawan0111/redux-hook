import React from 'react';
import styled from 'styled-components';

import todoContext from '../../contexts/todoContext';

import { Wrapper } from '../../style';

import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: auto;
`

const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: auto;
  background-color: #fafafa;
`
const HeaderContent = styled(Wrapper)`
  padding: 16px;
`
const HeaderTitle = styled.h2`
  font-size: 24px;

  span {
    font-weight: normal;
  }
`

const Body = styled(Wrapper)`
  flex: 1;
  padding: 68px 16px 0;
`

const AddBtn = styled.button`
  position: fixed;
  z-index: 100;
  right: 16px;
  bottom: 16px;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 10px lightgray;
`

export default function Todo() {
  const { onOpenAddDialog } = React.useContext(todoContext);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <HeaderTitle>Todo <span>리스트</span></HeaderTitle>
        </HeaderContent>
      </Header>
      <Body>
        <TodoList todos={[]} />
      </Body>
      <AddBtn onClick={_ => onOpenAddDialog()}><span role="img" aria-label="add">✏️</span></AddBtn>
      <TodoAdd />
    </Container>
  )
}
