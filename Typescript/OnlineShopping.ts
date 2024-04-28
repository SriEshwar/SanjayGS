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

class Product {
    constructor(public id: number, public name: string, public price: number) {}
}

class ShoppingCart {
    private items: Product[] = [];

    addItem(product: Product): void {
        this.items.push(product);
        console.log(`${product.name} added to cart.`);
    }

    removeItem(productId: number): void {
        let index = -1;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === productId) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            const removedProduct = this.items.splice(index, 1)[0];
            console.log(`${removedProduct.name} removed from cart.`);
        } else {
            console.log(`Product with ID ${productId} not found in cart.`);
        }
    }
    

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    displayCart(): void {
        console.log("Shopping Cart:");
        this.items.forEach(item => console.log(`${item.name} - $${item.price}`));
        console.log(`Total: $${this.getTotalPrice().toFixed(2)}`);
    }
}
// Usage example
const cart = new ShoppingCart();

const product1 = new Product(1, "Laptop", 999.99);
const product2 = new Product(2, "Smartphone", 699.99);
const product3 = new Product(3, "Headphones", 149.99);

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product3);

cart.displayCart();

cart.removeItem(2);

cart.displayCart();



