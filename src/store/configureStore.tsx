import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import todoReducer from './ducks/todos';
import activeFilterReducer from './ducks/activeFilter';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore); // apply logger to redux

const reducer = combineReducers({
  todos: todoReducer,
  activeFilter: activeFilterReducer
});

const configureStore = (state: any = {}) => createStoreWithMiddleware(reducer, state);
export default configureStore;