import React from 'react';
import TodoDialog from './TodoDialog';

import TodoForm from './TodoForm';
import todoContext from '../../contexts/todoContext';

export default function TodoUpdate() {
	const { openUpdate, onCloseUpdateDialog, onUpdateTodo, activeTodo } = React.useContext(todoContext);

	return (
		<TodoDialog
			title="Todo 수정"
			position="under"
			open={openUpdate}
			onClose={onCloseUpdateDialog}
		>
			<TodoForm
				defaultValue={activeTodo ? {
					title: activeTodo.title,
					content: activeTodo.content,
					tags: activeTodo.tags
				} : undefined}
				onSubmit={onUpdateTodo}
				onCancel={onCloseUpdateDialog}
			/>
		</TodoDialog>
	)
}
