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


// Prototypal Inhertance

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  return `Hello ${this.firstName} ${this.lastName}!`;
}

const john = new Person('john', 'doe');
console.log(john);
console.log(john.greeting());

function Customer(firstName, lastName, membership) {
  Person.call(this, firstName, lastName);
  this.membership = membership;
}

// Inherit Person prototype methods
Customer.prototype = Object.create(Person.prototype);
// Change constructor from `Person` to `Customer`
Customer.prototype.constructor = Customer;

const jane = new Customer('jane', 'doe', 'premium');
console.log(jane.firstName);

console.log(jane);

console.log(jane.greeting());

Customer.prototype.greeting = function() {
  return `Hello ${this.firstName} ${this.lastName}!, our valued ${this.membership} member`;
}

console.log(jane.greeting());
