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
console.log(this); //this is the 'global binding' AKA the 'window binding'

const myObj = {
    greeting: 'Hello',
    speak: function() {
        console.log('implicit this: ===', this);
        return `{this.greeting}, world`
    }
};
            //VV Whenever a function is called by a preceding dot the object to the left of that dot is 'this'
console.log(myObj.speak()) 
          //^^^^^

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
 * 
 */










