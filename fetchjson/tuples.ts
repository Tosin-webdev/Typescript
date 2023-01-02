const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['green', false, 400];
// const tea: [string, boolean, number] = ['brown, true, 50'];

// pepsi[0] = 50;
