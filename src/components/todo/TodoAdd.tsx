import React from 'react';
import TodoDialog from './TodoDialog';

import TodoForm from './TodoForm';
import todoContext from '../../contexts/todoContext';

export default function TodoAdd() {
  const { openAdd, onCloseAddDialog, onAddTodo } = React.useContext(todoContext);

  return (
    <TodoDialog
      title="Todo 만들기"
      position="under"
      open={openAdd}
      onClose={onCloseAddDialog}
    >
      <TodoForm
        onSubmit={onAddTodo}
        onCancel={onCloseAddDialog}
      />
    </TodoDialog>
  )
}
