// Importing the required modules
const EventEmitter = require('events');

// Creating a new class by extending EventEmitter
class MyEmitter extends EventEmitter {}

// Creating an instance of the custom event emitter class
const myEmitter = new MyEmitter();

// Listening for a custom event named 'greet'
myEmitter.on('greet', () => {
    console.log('Hello, how are you?');
});

// Emitting the 'greet' event
myEmitter.emit('greet');

// Listening for the 'greet' event with additional parameters
myEmitter.on('greetWithName', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emitting the 'greetWithName' event with a parameter
myEmitter.emit('greetWithName', 'John');
