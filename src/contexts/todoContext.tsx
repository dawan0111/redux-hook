import React from 'react';

import { TodoFormValue, Todo } from '../types';

import useDialog from '../hooks/useDialog';
import useTodo from '../hooks/useTodo';

type TTodoState = {
  todos: Todo[];
  openAdd: boolean;
  activeTodo: Todo | null;
  onOpenAddDialog: () => void;
  onCloseAddDialog: () => void;
  onActiveTodo: (todo: Todo) => void;
  onAddTodo: (value: TodoFormValue) => void;
}

const todoState = {} as TTodoState
const todoContext = React.createContext(todoState);

export function TodoProvider(props: React.PropsWithChildren<{}>) {
  const { open: openAdd, onOpen: onOpenAddDialog, onClose: onCloseAddDialog } = useDialog('todoAdd');
  const { todos, activeTodo, onAdd, onActive } = useTodo();

  const onAddTodo = React.useCallback((todo: TodoFormValue) => {
    onAdd(todo);
    onCloseAddDialog();
  }, [onAdd, onCloseAddDialog])

  return (
    <todoContext.Provider value={{
      todos,
      openAdd,
      activeTodo,
      onOpenAddDialog,
      onCloseAddDialog,
      onActiveTodo: onActive,
      onAddTodo
    }}>
      {props.children}
    </todoContext.Provider>
  )
}

export default todoContext
