// Prototypes

console.clear();

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.city = 'Chicago';
// }

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.setCity = function(newCity) {
//   this.city =  newCity;
// }

// const john = new Person('john', 'doe');
// console.log(john);
// console.log(john.getFullName());
// john.city = 'Texas';
// console.log(john);
// console.log(john.hasOwnProperty('firstName'));
// console.log(john.hasOwnProperty('setCity'));


// // Prototypal Inhertance

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function() {
//   return `Hello ${this.firstName} ${this.lastName}!`;
// }

// const john = new Person('john', 'doe');
// console.log(john);
// console.log(john.greeting());

// function Customer(firstName, lastName, membership) {
//   Person.call(this, firstName, lastName);
//   this.membership = membership;
// }

// // Inherit Person prototype methods
// Customer.prototype = Object.create(Person.prototype);
// // Change constructor from `Person` to `Customer`
// Customer.prototype.constructor = Customer;

// const jane = new Customer('jane', 'doe', 'premium');
// console.log(jane.firstName);

// console.log(jane);

// console.log(jane.greeting());

// Customer.prototype.greeting = function() {
//   return `Hello ${this.firstName} ${this.lastName}!, our valued ${this.membership} member`;
// }

// console.log(jane.greeting());

// // Object Create

// const personPrototypes = {
//   greeting: function() {
//     return `Hello ${this.firstName} ${this.lastName}`;
//   },
//   relocate: function(newCity) {
//     this.city = newCity;
//   }
// }

// const jane = Object.create(personPrototypes);
// jane.firstName = 'Jane';
// jane.lastName = 'Doe';
// console.log(jane.greeting());
// jane.relocate('Chicago');
// console.dir(jane);


// const john = Object.create(personPrototypes, {
//   firstName: { value: 'John' },
//   lastName: { value: 'Doe' },
// });
// console.log(john.greeting());
// john.relocate('Chicago');
// console.dir(john);


// ES-6 Classes

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  greeting() {
    return console.log(`Hello ${this.firstName} ${this.lastName}!`);
  }

  relocateToCity(newCity) {
    this.city = newCity;
  }

  getAge() {
    const diff = Date.now() - this.dob.getTime();
    const dateDiff = new Date(diff);

    return Math.abs(dateDiff.getUTCFullYear() - 1970);
  }

  static availableCities() {
    return [
      'Chicago',
      'Texas',
    ];
  }
}

const jane = new Person('Jane', 'Doe', '1990-05-31');
console.log(jane.greeting());
jane.relocateToCity('Chicago');
console.log(jane.getAge());
console.dir(jane);
console.dir(Person.availableCities());
