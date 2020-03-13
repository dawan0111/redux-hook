import { TodoFormValue, Todo } from "../../types";

export const ADD_TODO = 'todo/ADD_TODO' as const;
export const ACTIVE_TODO = 'todo/ACTIVE_TODO' as const;
export const DELETE_TODO = 'todo/DELETE_TODO' as const;
export const COMPLATE_TODO = 'todo/COMPLATE_TODO' as const;
export const UPDATE_TODO = 'todo/UPDATE_TODO' as const;

type todoState = {
  todos: Todo[];
  activeTodo: Todo | null;
}

const initState: todoState = {
  todos: Array(1).fill(0).map((_, i) => ({
    id: i,
    title: `lorem ipsum dolor #${i + 1}`,
    content: 'lorem ipsum dolor lorem ipsum dolor',
    complate: false,
    createdDateTime: new Date(),
    tags: ['aaa', 'bbb']
  })),
  activeTodo: null
}

export const addTodo = (todo: TodoFormValue) => ({
  type: ADD_TODO,
  payload: { todo }
})

export const deleteTodo = (todoId: number) => ({
  type: DELETE_TODO,
  payload: { todoId }
})

export const activeTodo = (todo: Todo | null) => ({
  type: ACTIVE_TODO,
  payload: { todo }
})

export const updateTodo = (todoId: number, todo: TodoFormValue) => ({
  type: UPDATE_TODO,
  payload: { todoId, todo }
})

export const complateTodo = (todoId: number, complated: boolean) => ({
  type: COMPLATE_TODO,
  payload: { todoId, complated }
})

type todoAction = | ReturnType<typeof addTodo> | ReturnType<typeof activeTodo> | ReturnType<typeof deleteTodo> | ReturnType<typeof complateTodo> | ReturnType<typeof updateTodo>;

export default function todo(state: todoState = initState, action: todoAction) {
  switch (action.type) {
    case ADD_TODO: {
      const { todo } = action.payload;
      const addTodo: Todo = {
        id: Number(new Date().getTime()),
        title: todo.title,
        content: todo.content,
        tags: todo.tags,
        complate: false,
        createdDateTime: new Date(),
      }
      
      return {
        ...state,
        todos: [
          ...state.todos,
          addTodo
        ]
      }
    }
    case ACTIVE_TODO: {
      const { todo } = action.payload;
      return {
        ...state,
        activeTodo: todo
      }
    }
    case DELETE_TODO: {
      const { todoId } = action.payload;
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== todoId)
      }
    }
    case COMPLATE_TODO: {
      const { todoId, complated } = action.payload;
      return {
        ...state,
        todos: state.todos.map(todo => ({
          ...todo,
          complate: todoId === todo.id ? complated : todo.complate
        }))
      }
    }
    case UPDATE_TODO: {
      const { todoId, todo: afterValue } = action.payload;
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id !== todoId ? todo : {
          ...todo,
          title: afterValue.title,
          content: afterValue.content,
          tags: afterValue.tags,
        }))
      }
    }
    default:
      return state;
  }
}
