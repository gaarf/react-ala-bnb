/* eslint-disable */

const middleware = [
  // thunk
  s => next => action => {
    typeof action === 'function'
      ? action(s.dispatch, s.getState)
      : next(action);
  },
  // promise
  s => next => action => {
    if (typeof action.then !== 'function') {
      return next(action);
    }
    return Promise.resolve(action).then(s.dispatch);
  },
];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(
    // logger
    ({ getState }) => next => action => {
      console.groupCollapsed(action.type);
      console.info('dispatching', action);
      const result = next(action);
      console.log('next state', getState());
      console.groupEnd();
      return result;
    },
  );
}
export default middleware;
