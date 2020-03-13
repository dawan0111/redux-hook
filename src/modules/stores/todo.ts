import { TodoFormValue, Todo } from "../../types";

export const ADD_TODO = 'todo/ADD_TODO' as const;
export const ACTIVE_TODO = 'todo/ACTIVE_TODO' as const;
export const DELETE_TODO = 'todo/DELETE_TODO' as const;

type todoState = {
  todos: Todo[];
  activeTodo: Todo | null;
}

const initState: todoState = {
  todos: [{
    id: 12345,
    title: 'lorem ipsum dolor',
    content: 'lorem ipsum dolor lorem ipsum dolor',
    complate: false,
    createdDateTime: new Date(),
    tags: ['aaa', 'bbb']
  }],
  activeTodo: null
}

export const addTodo = (todo: TodoFormValue) => ({
  type: ADD_TODO,
  payload: { todo }
})

export const activeTodo = (todo: Todo) => ({
  type: ACTIVE_TODO,
  payload: { todo }
})

type todoAction = | ReturnType<typeof addTodo> | ReturnType<typeof activeTodo>;

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
    default:
      return state;
  }
}
