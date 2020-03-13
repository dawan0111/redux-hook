import React from 'react';

import { TodoFormValue, Todo } from '../types';

import useDialog from '../hooks/useDialog';
import useTodo from '../hooks/useTodo';

type TTodoState = {
  todos: Todo[];
  openAdd: boolean;
  openUpdate: boolean;
  activeTodo: Todo | null;

  onOpenAddDialog: () => void;
  onCloseAddDialog: () => void;
  onOpenUpdateDialog: () => void;
  onCloseUpdateDialog: () => void;

  onActiveTodo: (todo: Todo | null) => void;
  onAddTodo: (value: TodoFormValue) => void;
  onDeleteTodo: (todoId: number) => void;
  onComplateTodo: (todoId: number, complate: boolean) => void;
  onUpdateTodo: (value: TodoFormValue) => void;

  onClickUpdate: (todo: Todo) => void;
}

const todoState = {} as TTodoState
const todoContext = React.createContext(todoState);

export function TodoProvider(props: React.PropsWithChildren<{}>) {
  const { open: openAdd, onOpen: onOpenAddDialog, onClose: onCloseAddDialog } = useDialog('todoAdd');
  const { open: openUpdate, onOpen: onOpenUpdateDialog, onClose: onCloseUpdateDialog } = useDialog('todoUpdate');
  const { todos, activeTodo, onAdd, onActive, onComplate, onDelete, onUpdate } = useTodo();

  const onAddTodo = React.useCallback((todo: TodoFormValue) => {
    onAdd(todo);
    onCloseAddDialog();
  }, [onAdd, onCloseAddDialog])

  const onUpdateTodo = React.useCallback((todo: TodoFormValue) => {
    if (activeTodo) {
      onUpdate(activeTodo.id, todo);
      onActive(null);
      onCloseUpdateDialog();
    }
  }, [onCloseUpdateDialog, activeTodo, onUpdate, onActive])

  const onClickUpdate = React.useCallback((todo: Todo) => {
    console.log(todo);
    onActive(todo)
    onOpenUpdateDialog();
  }, [onActive, onOpenUpdateDialog])

  return (
    <todoContext.Provider value={{
      todos,
      openAdd,
      openUpdate,
      activeTodo,
      
      onOpenAddDialog,
      onCloseAddDialog,
      onOpenUpdateDialog,
      onCloseUpdateDialog,

      onActiveTodo: onActive,
      onAddTodo,
      onUpdateTodo,
      onComplateTodo: onComplate,
      onDeleteTodo: onDelete,

      onClickUpdate
    }}>
      {props.children}
    </todoContext.Provider>
  )
}

export default todoContext
