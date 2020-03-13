import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { addTodo, activeTodo } from '../modules/stores/todo';

import { TodoFormValue, Todo } from '../types';
import { RootState } from '../modules';

export default function useTodo() {
  const dispatch = useDispatch();
  const { todos, activeTodoItem } = useSelector((state: RootState) => ({
    todos: state.todo.todos,
    activeTodoItem: state.todo.activeTodo
  }), shallowEqual)

  const onAdd = React.useCallback((todo: TodoFormValue) => {
    dispatch(addTodo(todo));
  }, [dispatch])

  const onActive = React.useCallback((todo: Todo) => {
    dispatch(activeTodo(todo))
  }, [dispatch])

  return {
    todos,
    activeTodo: activeTodoItem,
    onAdd,
    onActive
  }
}
