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
// const add = (a: number, b: number) => a + b;
// // Block body
// const multiply = (a: number, b: number): number => {
//     return a * b;
// };
// // enum
// // Define an enum named Color with three possible values: Red, Green, and Blue
// enum Color {
//     Red,
//     Green,
//     Blue
// }
// // You can also explicitly set the values of enum members
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
// // Enums can also have string values
// enum LogLevel {
//     Error = "ERROR",
//     Warning = "WARNING",
//     Info = "INFO"
// }
// // Using enums
// let myColor: Color = Color.Green;
// console.log(myColor); // Output: 1 (enums are zero-based by default)
// let myDirection: Direction = Direction.Left;
// console.log(myDirection); // Output: 3
// let myLogLevel: LogLevel = LogLevel.Info;
// console.log(myLogLevel); // Output: "INFO"
//------------------------------------------------------------------------------------------
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.addItem = function (product) {
        this.items.push(product);
        console.log("".concat(product.name, " added to cart."));
    };
    ShoppingCart.prototype.removeItem = function (productId) {
        var index = -1;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id === productId) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            var removedProduct = this.items.splice(index, 1)[0];
            console.log("".concat(removedProduct.name, " removed from cart."));
        }
        else {
            console.log("Product with ID ".concat(productId, " not found in cart."));
        }
    };
    ShoppingCart.prototype.getTotalPrice = function () {
        return this.items.reduce(function (total, item) { return total + item.price; }, 0);
    };
    ShoppingCart.prototype.displayCart = function () {
        console.log("Shopping Cart:");
        this.items.forEach(function (item) { return console.log("".concat(item.name, " - $").concat(item.price)); });
        console.log("Total: $".concat(this.getTotalPrice().toFixed(2)));
    };
    return ShoppingCart;
}());
// Usage example
var cart = new ShoppingCart();
var product1 = new Product(1, "Laptop", 999.99);
var product2 = new Product(2, "Smartphone", 699.99);
var product3 = new Product(3, "Headphones", 149.99);
cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product3);
cart.displayCart();
cart.removeItem(2);
cart.displayCart();
