// Basic inheritance
class Vehicle2 {
  drive(): void {
    console.log('chugga2');
  }
  honk(): void {
    console.log('great2');
  }
}

class Car extends Vehicle2 {
  drive(): void {
    console.log('vroom');
  }
}

const car = new Car();
car.drive();
car.honk();

// Class method modifiers (public, private & protected)
