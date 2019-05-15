/********************************************************************************
 * THIS KEYWORD
 * This is not a unique programming feature to JS, but JS behaves VERY differently.
 * A pronoun to use in place of an object
 * Gives you the objects context
 * Nothing to do where the function is written, but where and when the function is called
 */

/******************************************************************
 * FOUR PRINCIPLES TO DETERMINE WHAT GETS **this**
 * 
 */

//1 Global Binding

//   function sayName(name) {
//       console.log(this);//<<<-----Global Scope
//       return name;
//   }
//   sayName("D'Artagnan");

//   ////When in the global scope the value of "this" will be the window/console Object;


//   //2 Implicit Binding

//   const myObj = {
//       greeting: 'Hello',
//       sayHello: function(name) {
//           console.log(`${this.greeting} my name is ${name}`);
//           console.log(this);
//       }
//   }
// myObj.sayHello('Ryan')

// // Whenever a function is called by a preceding dot, the object left of the dot gets 'this'.


// //3 New Binding
// //constructor function
// function CordialPerson(greeter) {
//     this.greeting = 'Hello';
//     this.greeter = greeter;
//     this.speak = function () {
//         console.log(this.greeting + this.greeter);
//         console.log(this);
//     };
// }

// // const jerry = new CordialPerson('Newman');
// // const newman = new CordialPerson('Jerry'); //Whenever a constructor function is used, 'this' refers to the specific instance
//                                             //of the object that is created and returned by the constructor function.
// console.log(jerry.speak());
// console.log(newman.speak());

// //The this keyword is going to point to the cordial person created by the constructor function

// //4 Explicit Binding

// const jerry = new CordialPerson('Newman');
// const newman = new CordialPerson('Jerry');

// jerry.speak.call(newman);   ///.call .bind .apply change what the 'this' keyword apply to
// newman.speak.apply(jerry);
// newman.speak();
// jerry.speak();
//////////////////Whenever JavaScript's call or apply method is used, 'this' is explicitly applied

/********************************************************************
 * The 'this' keyword code along
 */
// console.log(this); //this is the 'global binding' AKA the 'window binding'

// const myObj = {
//     greeting: 'Hello',
//     speak: function () {
//         console.log('implicit this: ===', this);
//         return `{this.greeting}, world`
//     }
// };
// //VV Whenever a function is called by a preceding dot the object to the left of that dot is 'this'
// console.log(myObj.speak())
// //^^^^^

//constructor function //Capitalize the first letter in Constructor Functions

// function Person(obj) {
//     this.name = obj.name;
//     this.age = obj.age;
//     this.speak = function() {
//         console.log(`this new binding`,this)
//         return `Hello, my name is ${this.name} and I am ${this.age} years old!`
//     }
// }

// const ryan = new Person({name: 'Ryan', age: 32})
// const jay = new Person({name: 'Jay', age: 33})
// ryan.speak()
// jay.speak()

/**********************************************************
 * Explicit binding
 * Practice Explicit Binding
 */
// const yourObject = {
//     name: 'Jared Womack',
//     city: 'Spokane',
//     favoriteFood: 'Burritos'
//   }

//   const thingsYouEnjoy = ['Mountain Biking', 'Javascript', 'Snowboarding', 'Rafting', 'Movies', 'Music']

//   function tellUsAboutYourself(thing1, thing2, thing3){
//     return `Hi! My name is ${yourObject.name}, I live in ${yourObject.city}, and I enjoy ${thingsYouEnjoy[1]}, ${thingsYouEnjoy[2]}, and ${thingsYouEnjoy[3]}. I love to eat ${yourObject.favoriteFood}.`
//   }
//   console.log(tellUsAboutYourself())

// Using yourObject and thingsYouEnjoy array, set the context of this on tellUsAboutYourself and call the function.


//If you finish fast add some keys to the yourObject and use them in the function. Or create your own function.

/********************************************************************************* 
 * Object Oriented Programming
 * Objects over functions
 * Data over logic
 * A logical procedure that takes in input data, process it and returns it as output.
 * JS is NOT a class based language by nature
 * Classes in JS are what we call Syntactic Sugar over the constructor pattern
 * WE have pseudo-Classical inheritance(and a few others) that we can use to achieve OOP.
 */

/***********************************************************************************
 * Constructors are also known as Object Creator Functions
 * Their purpose is to receive an Object, and produce a new object
 * By convention we capitalize constructor functions
 * instantiated with the 'new' keyword
 * 'this' becomes the object which will be returned by 'new'
 */
//Example 1 constructor function
// function Animal(object) {  //Animal is capitalized
//     this.name = object.name;  //We pass every constructor an object
// }  //'this' gets returned as the new object

// //Example 2 constructor function
// function Person(attributes) {
//     this.age = attributes.age;
//     this.name = attributes.name;
//     this.hometown = attributes.hometown;
//     this.speak = function() {
//         return `Hello, my name is ${this.name}` //'this' will be used on the new objects that are created
//     };                                         // it will log the name of the new object
// }

// //Creating a new Person
// const fred = new Person({
//     age: 32,
//     name: 'Fred',
//     hometown: 'Bedrock'
// });
// console.log(fred);
// console.log(fred.speak())

/**************************************************
 * //////////////////////////The Object Prototype
 * The mechanism by which all objects can inherit properties from one another
 * Allow one to deliberately modify an objects properties
 * Helps to avoid memory problems
 * Allows one to extend an objects properties to another object
 * can be VERY dangerous, you can overwrite an entire objects methods
 */

// function Person(attributes) {
//     this.age = attributes.age;
//     this.name = attributes.name;
//     this.homeTown = attributes.homeTown;
// }

// Person.prototype.speak = function () {     //The speak method is no longer a part of the Object, it is in the 
//     return `Hello, my name is ${this.name}`;  //Prototype which is a product of the chrome/firefox etc. browser
// };

// //////////Prototypal Inheritance
// function Child(childAttributes) {
//     Person.call(this, childAttributes); //binding this to Person
//     this.isChild = childAttributes.isChild; //This will be a special attribute to Child 
// }

// Child.prototype = Object.create(Person.prototype);//because of this line//
//                                                         //
// const pebbles = new Child({                              // 
//     age: 3,                                                 //
//     name: 'Pebbles',                                            //
//     homeTown: 'Bedrock'                                     //
// });                     //.speak() can be used on the child constructor because of protypal inheritance
// console.log(pebbles.speak());

/***************************************************
 * Constructors and Prototypes Code Along
 */
// // const banana = new Fruit({
// //     type: 'tree',
// //     name: 'Banana',
// //     isRipe: true,
// //     calories: 100
// // });
// console.log(banana.shipped('hawaii'))
function Fruit(attrs) {
    this.type = attrs.type;
    this.name = attrs.name;
    this.isRipe = attrs.isRipe;
    this.calories = attrs.calories;
}
                //by having this shipped method on the prototype, rather than the object, memory issues are avoided
Fruit.prototype.shipped = function (destination) {
    console.log(`Shipping ${this.name} to ${destination}`);
}

Fruit.prototype.calculateCals = function () {
    console.log(`Calories in ${this.name} are ${this.calories * 200}`);
}

function Banana(bananaAttrs) {   //Everytime we create a banana we will have all of the attributes of the Fruit parent above
    Fruit.call(this, bananaAttrs);//We will also have access to the Fruit.prototype functions
    this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
}

Banana.prototype.checkIfMokeysLikeIt = function() {
    if(this.doMonkeysLikeIt) {
        return true;
    } else {
        return false;
    }
}

const newBanana = new Banana({
    doMonkeysLikeIt: true,
    name: 'banana',
    isRipe: false,
    calories: 0.1

});

console.log(newBanana)





