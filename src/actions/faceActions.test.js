  import { 
    drinkCoffee, 
    DRINK_COFFEE, 
    eatSnack, 
    EAT_SNACK,
    takeNap,
    TAKE_NAP,
    study,
    STUDY} from './faceActions';

describe('face actions', () => {
  it('creates a drink coffee action', () => {
    const action = drinkCoffee(2);

    expect(action).toEqual({
      type: DRINK_COFFEE,
      payload: {
          coffees: 2
      }
    });
  });

  it('creates a eat snack action', () => {
    const action = eatSnack(2);

    expect(action).toEqual({
      type: EAT_SNACK,
      payload: {
          snacks: 2
      }
    });
  });

  it('creates a take nap action', () => {
    const action = takeNap(2);

    expect(action).toEqual({
      type: TAKE_NAP,
      payload: {
          naps: 2
      }
    });
  });

  it('creates a study action', () => {
    const action = study(2);

    expect(action).toEqual({
      type: STUDY,
      payload: {
          studies: 2
      }
    });
  });
});