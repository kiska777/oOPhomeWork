/*
EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes name from an argument.
- All airplanes built with Airplane should initialize with an isFlying property of false.
- Give airplanes the ability to .takeOff() and .land():
+ If a plane takes off, its isFlying property gets set to true.
+ If a plane lands, its isFlying property gets set to false.

*/

// EXAMPLE SOLUTION CODE:
class Airplane {
    constructor(name) {
        this.name = name;
        this.isFlying = false;
    }
    takeOff() {
        return this.isFlying = true;
    }
    land() {
        return this.isFlying = false;
    }
}

let airMD = new Airplane("MDAirplane")
console.log(airMD.takeOff());
console.log(airMD.land());


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes name and age from arguments.
    - All instances of Person should also initialize with an empty stomach array.
    - Give instances of Person the ability to .eat("someFood"):
        + When eating an edible, it should be pushed into the stomach.
        + The eat method should have no effect if there are 10 items in the stomach.
    - Give instances of Person the ability to .poop():
        + When an instance poops, its stomach should empty.
    - Give instances of Person a method .toString():
        + It should return a string with name and age. Example: "Mary, 50"
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    eat(edible) {
        if (this.stomach.length < 10) {
            return this.stomach.push(edible);
        }
    }
    poop() {
        return this.stomach = [];
    }
    toString() {
        return `${this.name}, ${this.age}`
    }
}
let mary = new Person("Mary", 50)
console.log(mary.eat("someFood"));
console.log(mary.poop());
console.log(mary.toString());

/*
  TASK 2
    - Write a Car class whose constructor initializes model and milesPerGallon from arguments.
    - All instances built with Car:
        + should initialize with a tank at 0
        + should initialize with an odometer at 0
    - Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank.
    - Give cars ability to .drive(distance). The distance driven:
        + Should cause the odometer to go up.
        + Should cause the the tank to go down taking milesPerGallon into account.
    - A car which runs out of fuel while driving can't drive any more distance:
        + The drive method should return a string "I ran out of fuel at x miles!" x being odometer.
*/

class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }
    fill(gallons) {
        return this.tank = this.tank + gallons;
    }
    drive(distance) {
        let MilesToDestination = this.tank * this.milesPerGallon;
        if (distance <= MilesToDestination) {
            this.odometer = this.odometer + dist;
            this.tank = this.tank - (distance / this.milesPerGallon)
        } else {
            this.odometer = this.odometer + MilesToDestination;
            this.tank = 0;
            return `I ran out of fuel at ${this.odometer} miles!`
        }
    }
}

let cars = new Car("BMW", 20)
console.log(cars.fill(23));
console.log(cars.drive());
/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize name, age and location properties on the instance.
    - Instances of Lambdasian should be able to .speak():
        + Speaking should return a phrase Hello my name is {name}, I am from {location}.
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian {
    constructor(name, age, location) {
        this.name = name
        this.age = age
        this.location = location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}
let lambda = new Lambdasian("Gicu",25, "Chisinau")
console.log(lambda.speak());