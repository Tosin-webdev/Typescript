class Vehicle4 {
  //   public drive(): void {
  //     console.log('something');
  //   }

  constructor(public color: string) {}

  //   color: string = 'red';

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle4 = new Vehicle4('oranges');

console.log(vehicle4.color);
