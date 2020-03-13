import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Todo from './components/todo/Todo';
import { TodoProvider } from './contexts/todoContext';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  body {
    background-color: #fafafa;
  }
  html, body, input, button, select, textarea {
    font-family: 'Noto Sans KR', sans-serif;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </>
  );
}

export default App;
