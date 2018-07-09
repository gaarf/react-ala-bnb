import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import middleware from './middleware';
import { HelloState, helloReducer } from './hello';

export interface RootState {
  hello: HelloState;
};

export default createStore(
  combineReducers<RootState>({
    hello: helloReducer,
  }),

  /* preloadedState, */

  applyMiddleware(...middleware),
);
