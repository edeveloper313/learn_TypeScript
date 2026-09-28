// Getter & Setter
// Class ka under sa kise bhi variable ko as a object lana cahta ho or change kar na chata ho to get and set method ka use kar sakta ho.

class car {
  public name: string;
  public price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  get amount() {
    return this.price;
  }

  set amount(value: number) {
    this.price = value;
  }

  getPrice() {
    console.log(this.price);
  }
  setPrice(value: number) {
    this.price = value;
  }
}

let c1 = new car("Civic", 20000);
c1.amount=4000
console.log(c1)