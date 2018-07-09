import { HELLO_INCREMENT_CLICKS } from './types';

export function incrementClick(count: number = 1) {
  return {
    type: HELLO_INCREMENT_CLICKS,
    payload: count,
  };
}

export function decrementClick(count: number = 1) {
  return {
    type: HELLO_INCREMENT_CLICKS,
    payload: -count,
  };
}
