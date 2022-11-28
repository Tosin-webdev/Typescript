const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(5, 4));
const subtract = (a: number, b: number): number => {
  return a - b;
};

console.log(subtract(5, 4));

// annotate the return type after the argument
function divide(a: number, b: number): number {
  return a / b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

// void means we have a function that will not return anything
const logger = (message: string): void => {
  console.log(message);
};

// never means we are never going to reach the end of the function
// we are never going to execute the function completely
const throwError = (message: string): never => {
  throw new Error(message);
};

const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES2015
const logWeather2 = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(forecast);
