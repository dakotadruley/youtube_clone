import { DRINK_COFFEE } from '../actions/faceActions';

export function coffeeReducer(state = [], action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return [...state, action.payload];
    default:
      return state;
  }
}