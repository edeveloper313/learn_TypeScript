// TypeScript Note:
// File Extension name is .ts
// Valid js code is TypeScript code.
// Types:
// 1. Primitives
// 2. Reference
// Primitives: String, undefined, Characters, Booleans, Numbers
// Reference: Function, Array, Object, tuples
// all types define in smaller case
// define all variables types, like: number, string, [ ] etc.
// Tuples: An array where the type of each value is defined according to its index.
// Example:
let arr = [20, "hey"];
// Void: Function ka liya hota ha. function kuch bhi retrun nahi kar raha ha.
// enum: Variables ka group bana sakta hain. os ma object ke form ma likh ta hain.
// note: Declaration = ka sath ho ge na ka : ka sath.
// example:
var Car;
(function (Car) {
    Car["dore"] = "Dore";
    Car["wheel"] = "Wheel";
    Car["glass"] = "Glass";
})(Car || (Car = {}));
console.log(Car.dore);
// Type Inference: Typescript khood sa he type pata laga lata ha ka is ke type kiya ho ge. ise ko Type INference kahta hain.
// like / Example:
let a; // is ke type Any ho jaha ge or ya typescript na khood sa he define kar de ha.
let b = 5; // is ke type number ho jaha ge.
let c = false; // is ke type boolean  ho jaha ge.
// Union: Variable ma 1 sa ziyada types bata dana ka ya to ya ho ga ya to ya ho ga. example:
let x;
x = 12;
let q = "hello";
let user = {
    name: "Barkati",
    username: "Barkati",
    email: "barkati@ex.com",
    admin: false,
    age: 25,
};
function userFun(user) {
    let index = user.email.indexOf("f");
    console.log(user);
}
function getBikeDataFun(value) {
    value.seatBelt;
}
// Classes: specific item sa relted sare chizen ise ma rahen ge. plus os ma variables & methods define kar sakta hain. plus jo variables define kiya gaha hain. wo ose class ma access and update kar sakta hain. Class A ka Var ko change kar na sa Class B ka var effect nahi ho ga.
// class ma koi bhi variable ko access kar na ka liya this key-word ka use ho ta ha.
class Vehicle {
    constructor() {
        this.price = "30000";
        this.color = "red";
        this.numberPlate = "yoy0101";
        this.race = 5;
    }
    increaseSpeed() {
        this.race++;
        console.log(this.race);
    }
    on(name) {
        console.log(`On ${name}`);
    }
    off(name) {
        console.log(`Off ${name}`);
    }
    reverseOn() {
        console.log("Reverse on");
    }
    reverseOff() {
        console.log("Reverse Off");
    }
}
let bike1 = new Vehicle();
bike1.on("Bike1");
bike1.off("Bike1");
class Router {
    constructor() {
        this.name = "Vsol";
        this.price = null;
        this.sno = null;
    }
    strat(value) {
        this.sno = value;
        console.log(`Router ID: ${value}`);
    }
    close(value) {
        this.sno = value;
        console.log(`Closed rounter, Router ID ${value}`);
    }
    getData(data) {
        console.log(`Data Trasfer Start ${data}`);
    }
}
let router1 = new Router();
let router2 = new Router();
router1.price = 2000;
router1.strat(3000);
router2.price = 3000;
router2.strat(4000);
router2.close(4000);
// Constractor: class ka sab sa useable method ha. jo ka sab sa phala chalta ha. isee ma sara variables define kar ta hain phala declaration ka baad.
// Constractor Example 1
class bulb {
    constructor(company, price, color, bodyColor) {
        this.company = company;
        this.price = price;
        this.color = color;
        this.bodyColor = bodyColor;
    }
}
let bulb1 = new bulb("vivo", 100, "White", "golden-yellow");
let bulb2 = new bulb("new", 400, "Black", "Green-yellow");
console.log(bulb1);
console.log(bulb);
export {};
//# sourceMappingURL=script.js.map