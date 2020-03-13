import { combineReducers } from 'redux';
import ui from './stores/ui';
import todo from './stores/todo';

const rootReducer = combineReducers({
  ui,
  todo
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>