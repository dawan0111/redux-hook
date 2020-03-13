import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { addTodo, activeTodo, deleteTodo, complateTodo, updateTodo } from '../modules/stores/todo';

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

  const onComplate = React.useCallback((todoId: number, complate: boolean) => {
    dispatch(complateTodo(todoId, complate));
  }, [dispatch])

  const onDelete = React.useCallback((todoId: number) => {
    dispatch(deleteTodo(todoId));
  }, [dispatch])

  const onUpdate = React.useCallback((todoId: number, todo: TodoFormValue) => {
    dispatch(updateTodo(todoId, todo));
  }, [dispatch])
  const onActive = React.useCallback((todo: Todo | null) => {
    dispatch(activeTodo(todo));
  }, [dispatch])

  return {
    todos,
    activeTodo: activeTodoItem,
    onAdd,
    onActive,
    onComplate,
    onDelete,
    onUpdate
  }
}
