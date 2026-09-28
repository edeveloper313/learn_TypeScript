# TypeScript Notes

## 1. TypeScript kya hai?

TypeScript, JavaScript ka **superset** hai jo JavaScript mein **static typing** aur additional features provide karta hai.

### Basic Notes

* TypeScript file ka extension `.ts` hota hai.
* JavaScript ka valid code generally TypeScript mein bhi valid hota hai.
* TypeScript compile hone ke baad JavaScript mein convert hota hai.

---

# 2. Types

TypeScript mein commonly types ko do broad categories mein samjha ja sakta hai:

1. **Primitive Types**
2. **Reference / Non-Primitive Types**

> Note: Technically TypeScript mein `primitive` aur `object` types ki classification JavaScript ki type system par based hai. `function`, `array`, `object` waghera object/non-primitive category mein aate hain.

## Primitive Types

Common primitive types:

* `string`
* `number`
* `boolean`
* `undefined`
* `null`
* `bigint`
* `symbol`

> `Character` TypeScript ka separate primitive type nahi hai. Single character bhi `string` hota hai.

### Example

```ts
let name: string = "Ahmed";
let age: number = 25;
let isAdmin: boolean = false;
let value: undefined = undefined;
```

### Important

TypeScript mein type names generally **lowercase** mein likhe jate hain:

```ts
string
number
boolean
undefined
null
```

`String`, `Number`, aur `Boolean` wrapper/object types hain aur normally inki jagah lowercase types use karne chahiye.

---

# 3. Reference / Non-Primitive Types

Common non-primitive types:

* `object`
* `Array`
* `Function`
* `Tuple`

Examples:

```ts
let numbers: number[] = [1, 2, 3];

let user: object = {
  name: "Ahmed",
  age: 25,
};
```

---

# 4. Tuple

**Tuple** ek array hota hai jisme har element ka type aur position pehle se define ki ja sakti hai.

### Example

```ts
let arr: [number, string] = [20, "hey"];
```

Is example mein:

* Index `0` par `number` hona chahiye.
* Index `1` par `string` hona chahiye.

```ts
let user: [string, number] = ["Ahmed", 25];
```

---

# 5. Void

`void` mostly functions ke return type ke liye use hota hai jab function koi meaningful value return nahi karta.

### Example

```ts
function greet(): void {
  console.log("Hello");
}
```

Yahan function koi value return nahi kar raha, is liye return type `void` hai.

---

# 6. Enum

`enum` related **named constants** ka group banane ke liye use hota hai.

Enum ke andar values `=` ke saath assign hoti hain, `:` ke saath nahi.

### Example

```ts
enum Car {
  Door = "Door",
  Wheel = "Wheel",
  Glass = "Glass",
}

console.log(Car.Door);
```

Output:

```text
Door
```

### Important

Enum members ko convention ke mutabiq `PascalCase` mein likhna zyada readable hota hai:

```ts
Door
Wheel
Glass
```

---

# 7. Type Inference

**Type Inference** ka matlab hai ke TypeScript khud variable ki type determine kar leta hai, agar hum explicitly type define na karein.

### Example

```ts
let b = 5;
let c = false;
let d = "Hello";
```

TypeScript automatically infer karega:

```text
b → number
c → boolean
d → string
```

## `any` ke baare mein Important Note

```ts
let a;
```

Is tarah declare kiye gaye variable ki type context aur usage ke mutabiq infer ho sakti hai. Isay hamesha simply `any` samajhna correct nahi hai.

Agar variable explicitly `any` ho:

```ts
let a: any;
```

to TypeScript us variable par type checking ko largely disable kar deta hai.

> TypeScript mein unnecessary `any` use karne se type safety kam ho jati hai, is liye possible ho to `any` avoid karein.

---

# 8. Union Types

**Union Type** ka matlab hai ke ek variable ek se zyada possible types mein se koi ek value rakh sakta hai.

Union ke liye `|` operator use hota hai.

### Example

```ts
let x: number | string;

x = 12;
x = "Hello";
```

Yahan `x` ke andar `number` ya `string` dono mein se koi ek value aa sakti hai.

### Another Example

```ts
let id: number | string;

id = 101;
id = "USER-101";
```

---

# 9. Type Aliases

**Type Alias** ki madad se hum kisi type ko apna custom naam de sakte hain.

Syntax:

```ts
type TypeName = ...;
```

Type aliases ke commonly do examples:

1. Primitive Type Alias
2. Object Type Alias

---

## 9.1 Primitive Type Alias

Hum kisi existing type ko apna custom naam de sakte hain.

### Example

```ts
type ID = number;
type Username = string;

let userId: ID = 101;
let username: Username = "Ahmed";
```

Yahan:

* `ID` → `number` ka alias hai.
* `Username` → `string` ka alias hai.

---

## 9.2 Object Type Alias

Object ka structure define karne ke liye bhi type alias use kar sakte hain.

### Example

```ts
type User = {
  name: string;
  username: string;
  email: string;
  age: number;
  admin: boolean;
};

let user: User = {
  name: "Barkati",
  username: "Barkati",
  email: "barkati@ex.com",
  age: 25,
  admin: false,
};
```

Ab `User` type ke kisi bhi variable ko same structure follow karna hoga.

---

# 10. Type vs Interface

`type` aur `interface` dono custom types define karne ke liye use ho sakte hain, especially object shapes ke liye.

| Type                                                              | Interface                                                    |
| ----------------------------------------------------------------- | ------------------------------------------------------------ |
| `=` ke saath define hota hai                                      | `=` use nahi hota                                            |
| Primitive, union, tuple aur object types define kar sakta hai     | Mainly object/class shapes define karne ke liye use hota hai |
| Same scope mein same naam ka duplicate type alias nahi bana sakte | Same naam ki interfaces declaration merging kar sakti hain   |
| Union aur intersection types ke liye useful hai                   | `extends` ke through inheritance ke liye useful hai          |

### Type Example

```ts
type Pass = number | string;
```

### Interface Example

```ts
interface UserI {
  name: string;
  email: string;
  age: number;
}
```

> `String` ki jagah `string` use karna recommended hai.

---

# 11. Interface Declaration Merging

Interface ko same naam ke saath multiple times declare kiya ja sakta hai. TypeScript in declarations ko merge kar deta hai.

### Example

```ts
type Pass = number | string;

interface UserI {
  name: string;
  email: string;
  age: number;
}

interface UserI {
  password: Pass;
}
```

Ab `UserI` mein ye tamam properties available hain:

```ts
interface UserI {
  name: string;
  email: string;
  age: number;
  password: Pass;
}
```

### Function Example

```ts
function userFun(user: UserI): void {
  const index: number = user.email.indexOf("f");
  console.log(user);
}
```

---

# 12. Interface `extends`

Interface ko kisi doosri interface se extend kiya ja sakta hai.

Iska use tab useful hota hai jab multiple objects mein kuch common properties hon.

### Example

Hum vehicles ke liye ek common interface bana sakte hain:

```ts
interface VehicleI {
  numberPlate: number;
  price: number;
  driver: string;
}
```

Ab `BikeI` aur `CarI` is interface ko extend kar sakte hain.

### Bike

```ts
interface BikeI extends VehicleI {
  helmet: boolean;
  indicators: boolean;
}
```

### Car

```ts
interface CarI extends VehicleI {
  seatBelt: boolean;
  oneHanded: boolean;
}
```

### Example Function

```ts
function getCarDataFun(value: CarI): void {
  console.log(value.seatBelt);
}
```

> Original example mein function ka naam `getBikeDataFun` tha lekin parameter type `CarI` thi. Isay `getCarDataFun` karna zyada consistent hai.

---

# 13. Classes

**Class** kisi specific type/object ki structure aur behavior define karne ke liye use hoti hai.

Class ke andar hum:

* Properties define kar sakte hain.
* Methods define kar sakte hain.
* Constructor define kar sakte hain.
* Access modifiers use kar sakte hain.

Class ka instance banane ke liye `new` keyword use hota hai.

### `this` Keyword

Class ke andar current object ki properties aur methods access karne ke liye `this` keyword use hota hai.

### Example

```ts
class Vehicle {
  price = "30000";
  color = "red";
  numberPlate = "YOY0101";
  race = 5;

  increaseSpeed(): void {
    this.race++;
    console.log(this.race);
  }

  on(name: string): void {
    console.log(`On ${name}`);
  }

  off(name: string): void {
    console.log(`Off ${name}`);
  }

  reverseOn(): void {
    console.log("Reverse on");
  }

  reverseOff(): void {
    console.log("Reverse off");
  }
}

let bike1 = new Vehicle();

bike1.on("Bike1");
bike1.off("Bike1");
```

### Important Concept

```ts
let bike1 = new Vehicle();
let bike2 = new Vehicle();
```

`bike1` aur `bike2` do separate instances hain. Ek instance ki property change karne se normally doosre instance ki property change nahi hoti.

---

# 14. Another Class Example

Union type ko class properties ke saath bhi use kiya ja sakta hai.

```ts
type NullableNumber = number | null;

class Router {
  name = "Vsol";
  price: NullableNumber = null;
  sno: NullableNumber = null;

  start(value: number): void {
    this.sno = value;
    console.log(`Router ID: ${value}`);
  }

  close(value: number): void {
    this.sno = value;
    console.log(`Closed router, Router ID: ${value}`);
  }

  getData(data: string): void {
    console.log(`Data Transfer Start: ${data}`);
  }
}

let router1 = new Router();
let router2 = new Router();

router1.price = 2000;
router1.start(3000);

router2.price = 3000;
router2.start(4000);
router2.close(4000);
```

### Corrections

Original code mein:

```ts
strat()
```

likha gaya tha. Correct naming:

```ts
start()
```

Isi tarah:

```text
rounter → router
Trasfer → Transfer
```

---

# 15. Constructor

**Constructor** class ka special method hota hai jo object create hote waqt automatically execute hota hai.

Constructor ka naam hamesha:

```ts
constructor
```

hota hai.

Constructor ka use commonly object ki initial properties set karne ke liye hota hai.

### Example

```ts
class Bulb {
  price: number;
  company: string;
  color: string;
  bodyColor: string;
  voltage = 18;

  constructor(
    company: string,
    price: number,
    color: string,
    bodyColor: string,
  ) {
    this.company = company;
    this.price = price;
    this.color = color;
    this.bodyColor = bodyColor;
  }
}

let bulb1 = new Bulb("Vivo", 100, "White", "Golden Yellow");

bulb1.voltage = 20;

let bulb2 = new Bulb("New", 400, "Black", "Green Yellow");

console.log(bulb1);
```

### Constructor ka Basic Flow

```text
new Bulb(...)
      ↓
constructor execute hota hai
      ↓
properties initialize hoti hain
      ↓
object ready hota hai
```

---

# 16. Constructor Parameter Properties

TypeScript mein constructor parameters ke saath access modifiers use karke properties ko directly declare aur initialize kiya ja sakta hai.

Common access modifiers:

1. `public`
2. `private`
3. `protected`

---

## 16.1 Public

`public` property ko class ke andar aur class ke bahar instance ke through access aur update kiya ja sakta hai.

`public` default access modifier hai.

### Example

```ts
class User {
  constructor(public name: string) {}
}

const user = new User("Ahmed");

console.log(user.name);
user.name = "Ali";
```

---

## 16.2 Private

`private` property sirf usi class ke andar access ki ja sakti hai.

Class ke bahar instance ke through directly access nahi ki ja sakti.

### Example

```ts
class Customer {
  private balance = 1200;
  branch = "Karachi";

  constructor(name: string, email: string) {
    console.log(name);
  }

  getBalance(): void {
    console.log(this.balance);
  }
}

const customer1 = new Customer("Ahmed", "ahmed@ex.com");

customer1.getBalance();

// Error:
// customer1.balance;
```

### Important

`private` property ko class ke bahar directly read **ya update** nahi kar sakte.

---

## 16.3 Protected

`protected` property:

* Parent class ke andar access ho sakti hai.
* Child/extended class ke andar access ho sakti hai.
* Class ke bahar instance ke through directly access nahi ho sakti.

### Example

```ts
class Vehicle {
  protected speed = 100;
}

class Bike extends Vehicle {
  showSpeed(): void {
    console.log(this.speed);
  }
}

const bike = new Bike();

bike.showSpeed();

// Error:
// bike.speed;
```

---

# 17. Access Modifiers — Quick Comparison

| Modifier    | Same Class | Child Class | Outside via Instance |
| ----------- | ---------: | ----------: | -------------------: |
| `public`    |        Yes |         Yes |                  Yes |
| `protected` |        Yes |         Yes |                   No |
| `private`   |        Yes |          No |                   No |

> `public`, `private`, aur `protected` properties aur methods dono ke saath use kiye ja sakte hain.

### Example

```ts
class Example {
  public name = "Ahmed";
  private password = "1234";
  protected age = 25;

  public getName(): string {
    return this.name;
  }
}
```

---

# 18. Readonly Property

`readonly` ka matlab hai ke property ko initialize hone ke baad normally reassign nahi kiya ja sakta.

`readonly` ka matlab **"sirf class ke andar read kar sakte hain"** nahi hai.

Agar property `public readonly` hai, to usay class ke bahar read kar sakte hain, lekin reassign nahi kar sakte.

### Example

```ts
class Button {
  constructor(
    public name: string,
    public readonly email: string,
  ) {}
}

let B1 = new Button("Kamran", "Kamran@email.com");

console.log(B1.name);
console.log(B1.email);

B1.name = "Ali"; // Allowed

// B1.email = "Ali@email.com";
// Error: Cannot assign to 'email' because it is a read-only property.
```

---

# 19. Constructor Parameter Properties — Combined Example

Constructor mein `public`, `private`, `protected`, aur `readonly` ko directly use kiya ja sakta hai.

```ts
class Account {
  constructor(
    public name: string,
    private balance: number,
    protected accountType: string,
    public readonly accountNumber: string,
  ) {}

  getBalance(): number {
    return this.balance;
  }
}

const account = new Account(
  "Ahmed",
  5000,
  "Savings",
  "ACC-001",
);

console.log(account.name);
console.log(account.getBalance());
console.log(account.accountNumber);

// Direct access not allowed:
// account.balance;
// account.accountType;

// Readonly property ko reassign nahi kar sakte:
// account.accountNumber = "ACC-002";
```

---

# 20. Quick Revision

| Concept        | Short Explanation                                     |
| -------------- | ----------------------------------------------------- |
| `string`       | Text data                                             |
| `number`       | Numeric data                                          |
| `boolean`      | `true` ya `false`                                     |
| `undefined`    | Value define nahi hui                                 |
| `null`         | Intentionally empty value                             |
| `tuple`        | Fixed positions ke saath defined types                |
| `void`         | Function meaningful value return nahi karta           |
| `enum`         | Named constants ka group                              |
| Type Inference | TypeScript khud type determine karta hai              |
| Union          | Ek variable ke liye multiple possible types           |
| Type Alias     | Custom type ka naam                                   |
| Interface      | Object/class ka structure define karna                |
| `extends`      | Interface/class ko extend karna                       |
| Class          | Object ka structure aur behavior define karna         |
| Constructor    | Object create hone par automatically execute hota hai |
| `public`       | Har jagah accessible                                  |
| `private`      | Sirf same class mein accessible                       |
| `protected`    | Same class aur child class mein accessible            |
| `readonly`     | Property ko reassign nahi kar sakte                   |

---

# Important Corrections

Original notes mein kuch common mistakes thin jo documentation mein correct kar di gayi hain:

* `Characters` → TypeScript ka separate type nahi; character bhi `string` hota hai.
* `String` → `string` use karna recommended hai.
* `Constractor` → `Constructor`
* `strat()` → `start()`
* `rounter` → `router`
* `Trasfer` → `Transfer`
* `halmate` → `helmet`
* `handicaters` → `indicators` (context ke mutabiq)
* `getBikeDataFun(value: CarI)` → `getCarDataFun(value: CarI)`
* `readonly` ka matlab sirf read access nahi; iska main purpose **reassignment ko prevent karna** hai.
* `let a;` ko hamesha `any` kehna technically correct nahi hai.
* Class instances ek doosre se normally independent hoti hain; ek instance ki property change karne se doosre instance ki property automatically change nahi hoti.


# 21. Getter & Setter

**Getter** aur **Setter** ka use class ki properties ko controlled way mein **read** aur **update** karne ke liye kiya jata hai.

Simple words mein:

* `get` → property ki value **read** karne ke liye.
* `set` → property ki value **update/change** karne ke liye.

Getter aur Setter ki wajah se method ko property ki tarah use kar sakte hain.

---

## 21.1 Getter

Getter banane ke liye `get` keyword use hota hai.

### Example

```ts
class Car {
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  get amount(): number {
    return this.price;
  }
}
```

Ab `amount` ko function ki tarah call nahi karna, balki property ki tarah access karna hai:

```ts
const c1 = new Car("Civic", 20000);

console.log(c1.amount);
```

Output:

```text
20000
```

### Important

Getter ko call karte waqt `()` use nahi hota.

```ts
c1.amount;    // Correct

// c1.amount(); // Incorrect
```

---

# 21.2 Setter

Setter banane ke liye `set` keyword use hota hai.

Setter ka use property ki value ko update karne ke liye hota hai.

### Example

```ts
class Car {
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  get amount(): number {
    return this.price;
  }

  set amount(value: number) {
    this.price = value;
  }
}
```

Ab `amount` ki value ko property ki tarah update kar sakte hain:

```ts
const c1 = new Car("Civic", 20000);

c1.amount = 4000;

console.log(c1.amount);
```

Output:

```text
4000
```

Yahan:

```ts
c1.amount = 4000;
```

automatically Setter ko trigger karega:

```ts
set amount(value: number) {
  this.price = value;
}
```

---

# 21.3 Getter & Setter Complete Example

```ts
class Car {
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  // Getter
  get amount(): number {
    return this.price;
  }

  // Setter
  set amount(value: number) {
    this.price = value;
  }

  getPrice(): void {
    console.log(this.price);
  }

  setPrice(value: number): void {
    this.price = value;
  }
}

const c1 = new Car("Civic", 20000);

// Setter
c1.amount = 4000;

// Getter
console.log(c1.amount);

// Complete object
console.log(c1);
```

---

# 21.4 Getter/Setter vs Normal Methods

Same property ko read aur update karne ke do different approaches ho sakte hain.

### Normal Methods

```ts
class Car {
  price = 20000;

  getPrice(): number {
    return this.price;
  }

  setPrice(value: number): void {
    this.price = value;
  }
}

const c1 = new Car();

c1.setPrice(4000);

console.log(c1.getPrice());
```

Yahan methods ko `()` ke saath call karna padta hai:

```ts
c1.setPrice(4000);
c1.getPrice();
```

### Getter & Setter

```ts
class Car {
  price = 20000;

  get amount(): number {
    return this.price;
  }

  set amount(value: number) {
    this.price = value;
  }
}

const c1 = new Car();

c1.amount = 4000;

console.log(c1.amount);
```

Yahan property ki tarah use hota hai:

```ts
c1.amount = 4000;
console.log(c1.amount);
```

---

# 21.5 Getter & Setter ka Faida

Getter aur Setter ka important benefit ye hai ke hum property ke **read aur update behavior ko control** kar sakte hain.

For example, hum Setter mein validation laga sakte hain.

### Example: Price Validation

```ts
class Car {
  private _price: number;

  constructor(price: number) {
    this._price = price;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) {
      console.log("Price negative nahi ho sakti.");
      return;
    }

    this._price = value;
  }
}

const c1 = new Car(20000);

c1.price = 40000;

console.log(c1.price);
```

Agar koi negative price set kare:

```ts
c1.price = -500;
```

to Setter validation ko execute karega aur invalid value ko reject kiya ja sakta hai.

---

# 21.6 Naming Convention

Getter/Setter ke saath private backing property ke liye aksar underscore `_` use kiya jata hai.

```ts
class Car {
  private _price: number;

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}
```

Yahan:

```text
_price
  ↓
Internal/private property

price
  ↓
Public getter/setter interface
```

Is approach se internal data ko directly expose kiye baghair controlled access diya ja sakta hai.

---

# 21.7 Quick Revision

| Keyword   | Purpose                                                          |
| --------- | ---------------------------------------------------------------- |
| `get`     | Property ki value read karne ke liye                             |
| `set`     | Property ki value update karne ke liye                           |
| Getter    | Method ko property ki tarah read karta hai                       |
| Setter    | Property assignment ke through value update karta hai            |
| `private` | Internal property ko direct external access se protect karta hai |
| `_price`  | Common private backing-property naming convention                |

### Syntax

```ts
get propertyName(): type {
  return value;
}

set propertyName(value: type) {
  // update logic
}
```

### Usage

```ts
// Getter
object.propertyName;

// Setter
object.propertyName = value;
```

---

# Summary

**Getter** aur **Setter** class ki properties ko controlled way mein read aur update karne ka mechanism hain.

```text
Getter
  ↓
Read Property
  ↓
object.amount

Setter
  ↓
Update Property
  ↓
object.amount = 4000
```

Getter aur Setter ka use especially tab useful hota hai jab property ko read/update karne se pehle **validation, transformation, calculation ya additional logic** perform karna ho.


# Summary

TypeScript ka main purpose JavaScript ko **type safety, better tooling aur maintainable code** provide karna hai.

Is section mein humne ye important concepts cover kiye:

```text
Types
 ├── Primitive Types
 ├── Non-Primitive Types
 ├── Tuple
 ├── Void
 ├── Enum
 ├── Type Inference
 └── Union Types

Custom Types
 ├── Type Alias
 └── Interface

Object-Oriented Programming
 ├── Classes
 ├── Constructor
 ├── Constructor Parameter Properties
 ├── public
 ├── private
 ├── protected
 └── readonly
```
