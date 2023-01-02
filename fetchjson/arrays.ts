const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extractign values

const cart = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(1000);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types

const importantDates: (Date | string)[] = [new Date()];

importantDates.push('2011-10-222');
importantDates.push(new Date());
