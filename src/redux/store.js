import { createStore } from 'redux';
import reducers from './reducers';
import todo from './todo';


export const store = createStore(todo)