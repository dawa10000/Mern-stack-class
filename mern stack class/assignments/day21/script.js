// Task 1

class Car{
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    
    }
    getDetails(){
        console.log("car object result", this.brand, this.model, this.year)
    }
}

const car1 = new Car("BMW","Apex","2024")
car1.getDetails();

// Task 2

class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    getInfo(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person{
    constructor(name,age,grade) {
        super(name,age);
        this.grade = grade;
    }
    // Overriding method
    getInfo(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const person1 = new Person("Hari", 50);
const student1 = new Student("Prajwol", 20, "A");

console.log(person1.getInfo());
console.log(student1.getInfo());


// Task 3

class BankAccount{
    #balance;

    constructor(balance){
        this.#balance = balance;
    }
    deposit(bal){
        this.#balance += bal;
    }
    withdraw(bal){
        this.#balance -= bal;
    }
    get balance(){
        return this.#balance
    }
}

const account1 = new BankAccount(9000);
account1.deposit(5000);
console.log("account1 current balance is", account1.balance);
account1.withdraw(3000);
console.log("account1 current balance is", account1.balance);

// Task 4


// Base class
class Shape {
    getArea() {
        return 0; // default (to be overridden by subclasses)
    }
}

// Circle class extending Shape
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Rectangle class extending Shape
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

// Create objects
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

// Call their getArea() methods
console.log("Circle Area:", circle.getArea());       // 78.54
console.log("Rectangle Area:", rectangle.getArea()); // 24

// Task 5
function fetchData(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error fetching data!");
        }
    });
}

// Testing with .then() and .catch()
fetchData(true)
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.error(error);
    });

fetchData(false)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error); 
    });
