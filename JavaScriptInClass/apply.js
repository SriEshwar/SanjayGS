function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.firstName}.`);
}

const person = {
    firstName: 'Sanjay'
    
};

greet.apply(person, ['Raj']);