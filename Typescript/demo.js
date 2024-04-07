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
var add = function (a, b) { return a + b; };
// Block body
var multiply = function (a, b) {
    return a * b;
};
// enum
// Define an enum named Color with three possible values: Red, Green, and Blue
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// You can also explicitly set the values of enum members
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// Enums can also have string values
var LogLevel;
(function (LogLevel) {
    LogLevel["Error"] = "ERROR";
    LogLevel["Warning"] = "WARNING";
    LogLevel["Info"] = "INFO";
})(LogLevel || (LogLevel = {}));
// Using enums
var myColor = Color.Green;
console.log(myColor); // Output: 1 (enums are zero-based by default)
var myDirection = Direction.Left;
console.log(myDirection); // Output: 3
var myLogLevel = LogLevel.Info;
console.log(myLogLevel); // Output: "INFO"
