// let number:number;
// let string:string;

// enum color {red=19,green=89}
// let backGround=color.red;

// // type Assertion -------------------------------------------------------------

// let color;
// color='red';
// let endWithD=(color as string).endsWith('d');
// console.log(endWithD);

// // arrow function --------------------------------------------------------------

// //interface---------------------------------------------------------------------

// interface Point{
//     x:number,
//     y:String

// }
// let draw=(point:Point)=>{
//     console.log(point);
    
// }
// draw({x:7,y:'a'});

//class/Object--------------------------------------------------------------------------------

// Arrow function in ts --------------------------------------------------------

// Concise body
const add = (a: number, b: number) => a + b;

// Block body
const multiply = (a: number, b: number): number => {
    return a * b;
};

// enum

// Define an enum named Color with three possible values: Red, Green, and Blue
enum Color {
    Red,
    Green,
    Blue
}

// You can also explicitly set the values of enum members
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// Enums can also have string values
enum LogLevel {
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}

// Using enums
let myColor: Color = Color.Green;
console.log(myColor); // Output: 1 (enums are zero-based by default)

let myDirection: Direction = Direction.Left;
console.log(myDirection); // Output: 3

let myLogLevel: LogLevel = LogLevel.Info;
console.log(myLogLevel); // Output: "INFO"






