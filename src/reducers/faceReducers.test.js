import { drinkCoffee } from '../actions/faceActions';
import { coffeeReducer } from './faceReducers';

describe('reducers', () => {
  it('handles the DRINK_COFFEE action', () => {
    const state = [];
    const action = drinkCoffee(2);

    const newState = coffeeReducer(state, action);

    expect(newState).toEqual([{ coffees: 2 }]);
  });
});