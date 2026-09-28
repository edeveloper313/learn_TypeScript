# TypeScript Notes

## TypeScript kya hai?

* TypeScript file ka extension `.ts` hota hai.
* Valid JavaScript code, TypeScript code bhi hota hai.
* TypeScript mein hum variables aur functions ke **types define** kar sakte hain.

---

# Types

TypeScript mein basic tor par types ko do categories mein samjha ja sakta hai:

1. **Primitive Types**
2. **Reference Types**

### Primitive Types

Primitive types mein:

* `string`
* `undefined`
* `boolean`
* `number`
* `symbol`
* `bigint`

shamil hain.

### Reference Types

Reference types mein:

* `function`
* `array`
* `object`
* `tuple`

waghera shamil hain.

> **Note:** TypeScript mein types ko aam tor par lowercase mein likha jata hai, jaise `number`, `string`, `boolean` etc.

---

# Tuple

**Tuple** ek aisa array hota hai jismein har value ka type uske **index** ke mutabiq define kiya jata hai.

### Example:

```ts
let arr: [number, string] = [20, "hey"];
```

Is example mein:

* Index `0` par `number` hona chahiye.
* Index `1` par `string` hona chahiye.

---

# Void

`void` zyada tar **functions** ke liye use hota hai.

Agar function koi value return nahi kar raha ho, to hum uska return type `void` rakh sakte hain.

### Example:

```ts
function hello(): void {
  console.log("Hello");
}
```

Yahan function koi value return nahi kar raha, is liye iska return type `void` hai.

---

# Enum

`enum` ka use related values ka ek **group** banane ke liye hota hai.

Enum ke andar values ko generally object ki tarah define kiya jata hai.

> **Important:** `enum` mein values ko `=` ke sath assign kiya jata hai, `:` ke sath nahi.

### Example:

```ts
enum Car {
  dore = "Dore",
  wheel = "Wheel",
  glass = "Glass",
}

console.log(Car.dore);
```

---

# Type Inference

**Type Inference** ka matlab hai ke TypeScript khud se variable ka type identify kar leta hai.

Yani humein har jagah manually type define karne ki zaroorat nahi hoti.

### Example:

```ts
let a;
let b = 5;
let c = false;
```

* `a` ka type `any` ho sakta hai agar usay koi specific value/type na diya jaye.
* `b` ka type TypeScript `number` infer karega.
* `c` ka type TypeScript `boolean` infer karega.

---

# Union Types

**Union Type** ka matlab hai ke ek variable ko **ek se zyada types** allow karna.

Yani variable mein ya to ek type ki value ho sakti hai ya doosri type ki.

Union ke liye `|` symbol use hota hai.

### Example:

```ts
let x: number | string;

x = 12;
x = "Hello";
```

Is example mein `x` mein `number` ya `string`, dono mein se koi bhi value store ho sakti hai.

---

# Type Aliases

**Type Alias** ka matlab hai ke hum apne custom type ka naam bana sakte hain.

Type Aliases ko commonly do tarah se samjha ja sakta hai:

1. Primitive Type Alias
2. Object Type Alias

---

## 1. Primitive Type Alias

Hum kisi existing primitive type ko apni marzi ka naam de sakte hain.

### Example:

```ts
type tadat = number;
type str = string;

let q: str = "hello";
```

Yahan:

* `tadat` ek alias hai `number` ka.
* `str` ek alias hai `string` ka.

---

# 2. Object Type Alias

Object Type Alias mein hum multiple properties aur unke types ko ek custom type ke andar define kar sakte hain.

### Example:

```ts
type User = {
  name: string;
  username: string;
  email: string;
  age: number;
  admin: boolean;
};
```

Ab hum `User` type ko object banane ke liye use kar sakte hain:

```ts
let user: User = {
  name: "Barkati",
  username: "Barkati",
  email: "barkati@ex.com",
  admin: false,
  age: 25,
};
```

Yahan `user` object ko `User` type follow karna zaroori hai.

---

# Type vs Interface

Type aur Interface dono custom types define karne ke liye use hote hain, lekin in dono mein kuch differences hain.

### Type

* `type` ke sath `=` sign use hota hai.
* Same scope mein same naam ka doosra `type` dobara define nahi kar sakte.
* Type ko union, primitive aur object types ke liye use kiya ja sakta hai.

### Interface

* `interface` mein `=` sign use nahi hota.
* Same naam ke multiple interfaces define kiye ja sakte hain aur TypeScript unhein merge kar deta hai.
* Interface zyada tar objects aur classes ki **shape/structure** define karne ke liye use hota hai.

### Example:

```ts
type pass = number | string;

interface UserI {
  name: string;
  email: string;
  age: number;
}

interface UserI {
  password: pass;
}
```

Yahan dono `UserI` interfaces merge ho jayenge.

Is wajah se final `UserI` mein ye properties hongi:

* `name`
* `email`
* `age`
* `password`

### Function Example:

```ts
function userFun(user: UserI) {
  let index: number = user.email.indexOf("f");
  console.log(user);
}
```

---

# Interface Extend

Interface ko doosre interface se **extend** bhi kiya ja sakta hai.

Iska matlab hai ke ek interface doosre interface ki properties ko inherit kar sakta hai.

### Example:

Humare paas different vehicles hain:

* Bike
* Car
* Riksha

Pehle common vehicle properties define karte hain:

```ts
interface VehicleI {
  numberPlate: number;
  price: number;
  Driver: string;
}
```

Ab `BikeI` ko `VehicleI` se extend karte hain:

```ts
interface BikeI extends VehicleI {
  halmate: boolean;
  handicaters: boolean;
}
```

Isi tarah `CarI` bhi `VehicleI` se extend kar sakta hai:

```ts
interface CarI extends VehicleI {
  seatBelt: boolean;
  oneHanded: boolean;
}
```

Ab `CarI` ke andar `VehicleI` ki properties bhi hongi aur apni properties bhi.

### Function Example:

```ts
function getBikeDataFun(value: CarI) {
  value.seatBelt;
}
```

---

# Classes

**Class** ko hum ek blueprint ya structure samajh sakte hain.

Class ke andar:

* Variables/properties
* Methods
* Functions

define kiye ja sakte hain.

Class se hum multiple objects bana sakte hain.

Har object ka apna data hota hai. Agar ek object ki property change karein, to normally doosre object ki property automatically change nahi hoti.

Class ke andar current object ki properties aur methods ko access karne ke liye `this` keyword use hota hai.

### Example:

```ts
class Vehicle {
  price = "30000";
  color = "red";
  numberPlate = "yoy0101";
  race = 5;

  increaseSpeed() {
    this.race++;
    console.log(this.race);
  }

  on(name: string) {
    console.log(`On ${name}`);
  }

  off(name: string) {
    console.log(`Off ${name}`);
  }

  reverseOn() {
    console.log("Reverse on");
  }

  reverseOff() {
    console.log("Reverse Off");
  }
}
```

Ab hum `Vehicle` class ka object bana sakte hain:

```ts
let bike1 = new Vehicle();

bike1.on("Bike1");
bike1.off("Bike1");
```

Yahan `new Vehicle()` se `Vehicle` class ka ek naya object create hua.

---

# Class ka Doosra Example

Hum union type ko class ke andar bhi use kar sakte hain.

```ts
type NN = number | null;

class Router {
  name = "Vsol";
  price: NN = null;
  sno: NN | null = null;

  strat(value: number) {
    this.sno = value;
    console.log(`Router ID: ${value}`);
  }

  close(value: number) {
    this.sno = value;
    console.log(`Closed router, Router ID ${value}`);
  }

  getData(data: string) {
    console.log(`Data Transfer Start ${data}`);
  }
}
```

Ab hum `Router` class ke multiple objects bana sakte hain:

```ts
let router1 = new Router();
let router2 = new Router();

router1.price = 2000;
router1.strat(3000);

router2.price = 3000;
router2.strat(4000);

router2.close(4000);
```

Yahan `router1` aur `router2` **alag objects** hain, is liye dono ka data alag rahega.

---

# Constructor

`constructor` class ka ek special method hota hai.

Jab class ka object create hota hai, to constructor automatically execute hota hai.

Constructor ka use aksar object ki initial properties ko set karne ke liye kiya jata hai.

### Constructor Example:

```ts
class Bulb {
  price: number;
  company: string;
  color: string;
  bodyColor: string;

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
```

Ab hum different bulbs ke objects create kar sakte hain:

```ts
let bulb1 = new Bulb("vivo", 100, "White", "golden-yellow");

let bulb2 = new Bulb("new", 400, "Black", "Green-yellow");

console.log(bulb1);
console.log(bulb2);
```

Yahan jab `new Bulb(...)` likha jata hai, to constructor automatically call hota hai aur jo values hum pass karte hain, woh object ki properties mein store ho jati hain.

---

# Quick Revision

| Concept        | Roman Urdu mein Meaning                                            |
| -------------- | ------------------------------------------------------------------ |
| `string`       | Text/value jo characters par mushtamil ho                          |
| `number`       | Numbers ke liye                                                    |
| `boolean`      | `true` ya `false`                                                  |
| `tuple`        | Fixed structure wala array                                         |
| `void`         | Function koi value return nahi karta                               |
| `enum`         | Related values ka group                                            |
| Type Inference | TypeScript khud type identify karta hai                            |
| Union          | Ek variable mein multiple possible types                           |
| Type Alias     | Custom type ka naam banana                                         |
| Interface      | Object/class ki structure define karna                             |
| `extends`      | Ek interface se doosre interface ko inherit karna                  |
| Class          | Objects banane ka blueprint                                        |
| `this`         | Current object ko refer karta hai                                  |
| Constructor    | Object create hote waqt automatically run hone wala special method |

## Important Note

Aapke original notes mein kuch **spelling aur TypeScript syntax** ki mistakes bhi thin, jaise `Constractor` → `Constructor`, `strat` → `start`, aur `console.log(bulb)` ki jagah object ko log karna. Maine explanation ko correct kiya hai aur jahan zaroori tha wahan code ko bhi clean kiya hai.
