import { Reducer } from 'redux';
import { HELLO_INCREMENT_CLICKS, HelloState } from './types';

const initialState: HelloState = {
  clicks: 0,
};

const reducer: Reducer<HelloState> = (state = initialState, action) => {
  switch (action.type) {
    case HELLO_INCREMENT_CLICKS:
      return {
        ...state,
        clicks: state.clicks + action.payload,
      };

    default:
      break;
  }

  return state;
};

export default reducer;
