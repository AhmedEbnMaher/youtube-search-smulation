
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import Search from './search/reducer'
import { AppActions } from './actions';

export const rootReducer = combineReducers({ Search });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, {}, {}>(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);




