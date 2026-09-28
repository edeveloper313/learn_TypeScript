// Functions: Function kiya return kar raha ha.  os ke type bata ne ho te ha.

// Void: ager function kuch bhi return nahi kar raha ha to type void ho ge.
// Example

function watch(): void {
  // Console kuch bhi return nahi kar ta ha.
  console.log("Hey Brother");
}

// Named function: jis function ka name & type define kar de jaha, wo named function hota ha.
// Example:
// This is a Named Function
function wire(): number {
  return 10 + 20;
}

// Anonymous function: sirf retun ke type ka sath likha jaha without name.
// Example:
// function ():void{
// }

// Arrow Funciton: Function Key word na ho or variable ma store kiya jaha.

let arrFun = (): string => {
  return "hey";
};

// Implicit Return Type: type Define na kar na. ka function kiya retrun kara ga. or automaticly detect kar ka type define kar da ga.
// Example

function Fun2() {
  return true;
}

// Explicit: khood sa funciton ke return type bata dana, ka funciton kiya retrun kara ga.

function fun3(): boolean {
  return false;
}

// Optional parameters: JS ma ager 2 parameters diya hain to ap 2 sa ziyada bhi ya kam bhi arguments da sakta ho. lakin TS ma jitna parameters diya hain otna he arguments dana hon ga with type jo define kare ha parameters ma. ab ager koi parameter ap optoinal rakh na cahta ho to os ka aga question mark ? symbol laga do.
// Example:

function fun4(name: string, email: string, role?: string): string {
  let userName = name;
  return userName;
}

fun4("Kamran", "kamran@ex.com");
