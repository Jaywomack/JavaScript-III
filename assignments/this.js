/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The window binding is not/very rarely used. It is the forest of trees 'use strict' can help us avoid accidentally
referencing the window object.

* 2. Implicit binding occurs when dot notation is used to invoke a function. The implicit binding is automatic with objects and only occurs with objects and methods, not functions. When a object or method is invoked the 'this' keyword refers to the object to the left of the dot.  hobbit('this').cook()

* 3. Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function. Explicit binding is for functions. Using the .call .apply and .bind methods will explicitly set the 'this' keyword.

* 4.  New binding :4.1- An empty object is created and referenced by this variable, inheriting the prototype of the function.

4.2- Properties and methods are added to the object referenced by this.

4.3- The newly created object referenced by this is returned at the end implicitly (if no other object was returned explicitly).
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function bindToWindow() {
    console.log(this)
}
bindToWindow()


// Principle 2

// code example for Implicit Binding
var greetMe = {
    greeting: 'Hello ',
    relationship: 'I am your father',
    speak: function (name) {
        console.log(`${this.greeting} ${name}, ${this.relationship}`);
    }
}

greetMe.speak('Luke');

let man = {
    name: 'Jared Womack',
    age: 33,
    manNameAge: function () {
        console.log(`${this.name} is ${this.age}`)
    }
}


man.manNameAge()


// Principle 3

// code example for New Binding
function Barbarian(name) {
    this.greeting = 'Hello, prepare to die ';
    this.name = name;
    this.barbarianGreet = function () {
        console.log(`${this.greeting} ${this.name}`);
    }
    this.sayGoodbye = function () {
        console.log(`You fought valiantly. ${this.name}`)
    }
};

let greetRagnar = new Barbarian('Ragnar');
let greetOlga = new Barbarian('Olga');

greetRagnar.barbarianGreet();
greetOlga.barbarianGreet();




// Principle 4

// code example for Explicit Binding
greetRagnar.sayGoodbye.call(greetOlga);
greetOlga.sayGoodbye.apply(greetRagnar);