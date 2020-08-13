/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// create constructor function for Person
// it takes 3 properties: name, age, stomach- which is an empty array

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
// create an eat function that gives the person the ability to eat some food. It has a parameter of something that we can pass food into as an argument. If the stomach length is less than 10, the person can eat. If the stomach's greater than 10, person can't eat anymore. We want to push arguments to the new array.
Person.prototype.eat = function (edible) {
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  }
};
// create a poop method - poop method empties the stomach.
Person.prototype.poop = function () {
  this.stomach = [];
};
// method called toString - needs to return name and age.
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

const personOne = new Person("Mary", "50");

console.log(personOne.toString());
personOne.eat("sushi");
personOne.eat("cheeseburgers");
personOne.eat("crepes");
console.log(personOne.stomach);
personOne.poop();
console.log(personOne.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};
Car.prototype.drive = function (miles) {
  const fuelUsed = miles / this.milesPerGallon;
  if (this.tank >= fuelUsed) {
    // if you have enough fuel (if tank is more than or equal to the fuel used)
    this.odometer += miles; // you add to your odometer by increments.
    this.tank -= fuelUsed; // you detract that fuel from the tank
  } else {
    const milesDriven = this.milesPerGallon * this.tank;
    this.odometer += milesDriven;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
};

const thisCar = new Car("Toyota", 25);
thisCar.fill(18);
thisCar.drive(10);
console.log(thisCar.tank);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = new Person();
Baby.prototype.play = function () {
  console.log(
    `${this.name} is admiring its especially soft ${this.favoriteToy}`
  );
  return `Playing with a ${this.favoriteToy}`;
};
const littleBaby = new Baby("Tubby", "6 months", "rattle");
console.log(littleBaby.play());

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. 
  2. 
  3. 
  4. 
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}
