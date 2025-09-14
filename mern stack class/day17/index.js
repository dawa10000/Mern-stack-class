// class Vehicle{
//     // empty constructor
//     constructor(brand,color,model){
//         this.brand = brand;
//         this.color = color;
//         this.model  = model;
//     }
//     getProperties(){
//         console.log("car object result", this.brand,this.color,this.model);
//     }
// }

// const car = new Vehicle("Tesla","Grey","2025");
// const bike =new Vehicle("Bajaj","black","2020");
// console.log(bike.model);
// car.getProperties();


// class Animal{
//     constructor(type){
//         this.type = type;
//     }
//     getType(){
//         return this.type;
//     }
//     printObject(home){
//         console.log("Animal Properties", this.type,home);
//     }
// }

// const human = new Animal("Mamal");
// const snake = new Animal("snakeType");
// console.log(snake.getType());
// snake.printObject("Kathmandu");

// const objectType = human.getType();
// console.log(objectType);


// class Bus{
//     constructor(brand, model, color){
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//     }
//     // get brand(){
//     //     return this.brand;
//     // }
//     getBrand(){
//         return this.brand;
//     }

//     getModel(){
//         return this.model;
//     }

//     getColor(){
//         return this.model;
//     }
// }

// class Tata extends Bus{
//     constructor(brand,model,color,capacity){
//         super(brand,model,color);
//         this.capacity = capacity;
//     }
//     getAllProperties(){
//         console.log("Tata class Properties", this.brand, this.color, this.model,this.capacity);
//     }
// }

// const tata1 = new Tata("Tata","2022","Yellow",75);
// tata1.getAllProperties();
// console.log(tata1.brand);

// class GrandChildTata extends Tata{
//     constructor(brand,model,color,capacity,weight){
//         super(brand,model,color,capacity);
//         this.weight = weight;
//     }

//     setWeight(weightValue){
//         this.weight = weightValue;
//     }
//     printWeight(){
//         console.log(this.weight);
//     }
// }

// let grandChild1 = new GrandChildTata("tata child", "2030", "green", 50, "100kg")
// grandChild1.setWeight("500kg");
// grandChild1.printWeight();
// grandChild1.getAllProperties();

//  types of inheritance
// multilevel inheritance
// multiple inheritance
// hierarichal inheritance
// hybrid inheritance


// Encapsulation

class BankAccount{
    #account_number;
    #account_holder_name;
    #balance;

    constructor(accountNumber,accountHolderName,balance)
    {
    this.#account_number = accountNumber;
    this.#account_holder_name = accountHolderName;
    this.#balance = balance;
    }

get accountDetail(){
    return{
        "Account Holder Name" : this.account_holder_number,
        "Account Number": this.account_number,
    };
}

deposit(bal){
    this.#balance += bal;
}

get balance(){
    return this.#balance;
}
}

const account1 = new BankAccount("182303bc","John Doe",5000);
const accountDetails = account1.accountDetail;
console.log(account1.balance);


// Polymorphism
// method overloading
// class Animal{
//     sound(){
//         console.log("Animal Sound");
//     }
//     sound(name){
//         console.log(`${name} sound`);
//     }
//     sound(name.address){
//         console.log(`${name,address} of animal`);
//     }
// }

// const dog = new Animal();
// dog.sound("dog")

// method overriding
class Animal{
    speak(){
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal{
    speak(){
        console.log("Dog barks");
    }
}

const dog1 = new Dog();
dog1.speak();

