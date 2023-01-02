class Vehicle5 {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle5 = new Vehicle5('beans');

console.log(vehicle5.color);

class Car extends Vehicle5 {
  constructor(public wheels: number, public color: string) {
    super('red');
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    // console.log('vroom');
    this.drive();
    this.honk();
  }
}

const car = new Car(3, 'Blue');
car.startDrivingProcess();
