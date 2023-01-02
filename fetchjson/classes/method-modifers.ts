class Vehicle3 {
  //   public drive(): void {
  //     console.log('something');
  //   }

  // public honk(): void {
  //   console.log('beep');
  // }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle3();
// vehicle.honk();

class Car3 extends Vehicle3 {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car3 = new Car3();
car3.startDrivingProcess();
car3.honk();
car3.honk();
