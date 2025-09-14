// class Vehicle {
//   // brand,color,name;

//   constructor(brand, color, model) {
//     this.brand = brand;
//     this.color = color;
//     this.model = model;
//   }

//   // constructor(){}

//   getProperties() {
//     console.log("object Result", this.brand, this.color, this.model);
//   }
// }

// const car = new Vehicle("Tesla", "green", "2026");
// const bike = new Vehicle("Bazaz", "black", "2020");
// // console.log(bike.getProperties());
// bike.getProperties();
// car.getProperties();

// class Animal {
//   // Animal(){}
//   // let type;
//   constructor(type) {
//     this.type = type;
//   }

//   getType() {
//     return this.type;
//   }

//   printObject(home) {
//     console.log("Animal Properties", this.type, home);
//   }
// }

// const human = new Animal("Mammal");
// const snake = new Animal("SnakeType");
// console.log(snake.getType());
// snake.printObject("Kathmandu");

// const objectType = human.getType();
// console.log(objectType);

// class Bus {
//   constructor(brand, model, color) {
//     this.brand = brand;
//     this.model = model;
//     this.color = color;
//   }
//   //  get brand(){
//   //     return this.brand;
//   //  }
//   getBrand() {
//     return this.brand;
//   }

//   getModel() {
//     return this.model;
//   }

//   getColor() {
//     return this.model;
//   }
// }

// class Tata extends Bus {
//   constructor(brand, model, color, capacity) {
//     super(brand, model, color);
//     this.capacity = capacity;
//   }
//   getAllProperties() {
//     console.log(
//       "Tata class Properties",
//       this.brand,
//       this.color,
//       this.model,
//       this.capacity
//     );
//   }
// }

// // const tata1=new Tata("Tata","2022","Yellow",75);
// // tata1.getAllProperties();

// class GrandChildTata extends Tata {
//   constructor(brand, model, color, capacity, weight) {
//     super(brand, model, color, capacity);
//     this.weight = weight;
//   }

//   setWeight(weightValue) {
//     this.weight = weightValue;
//   }
//   printWeight() {
//     console.log("Weight", this.weight);
//   }
// }

// let grandChild1 = new GrandChildTata(
//   "Tata CHild",
//   "2030",
//   "green",
//   50,
//   "100kg"
// );
// grandChild1.printWeight();
// grandChild1.setWeight("500kg");
// grandChild1.printWeight();

// grandChild1.setWeight("1000kg");
// grandChild1.printWeight();
// grandChild1.getAllProperties();

// Emcapsulation
// class BankAccount {
//   #account_number;
//   #account_holder_name;
//   #balance;

//   constructor(accountNumber, accountHolderName, balance) {
//     this.#account_holder_name = accountHolderName;
//     this.#account_number = accountNumber;
//     this.#balance = balance;
//   }

//   get accountDetail() {
//     return {
//       "Account Holder Name": this.#account_holder_name,
//       "Account Number": this.#account_number,
//     };
//   }

//   deposit(bal) {
//     this.#balance += bal;
//   }

//   get balance(){
//     return this.#balance;
//   }
// }

// const account1=new BankAccount("10101ABC","John Doe",5000);
// const acccountDetaila=account1.accountDetail;
// console.log("Account_details",acccountDetaila,account1.balance);
// account1.deposit(1000);
// console.log(account1.balance);


// account1.deposit(6000);
// console.log(account1.balance);

// const account2=new BankAccount("10101XYZC","Harry Porter",10000);
// console.log("Account 2",account2.accountDetail,account2.balance);

// console.log(account2.#account_number);




class SocialAccount{
    #username;
    #password;
    
    #encrypt_password(password){
        return `enc-${password}`;
    }

    constructor(username,password){
        this.#password=this.#encrypt_password(password);
        this.#username=username;
    }

    get accountDetail(){
        return {
            "Username":this.#username,
            "Password":this.#password,
        }
    }
}

const social1=new SocialAccount("user101","password@123");
console.log("Social Account Detail",social1.accountDetail);


// Polymorphism
// class Animal{
//     // method overloading
//     sound(){
//         console.log("Animal Sound");
//     }

//     sound(name){
//         console.log(`${name} sound`)

//     }
    
//     sound(name,address){
//         console.log(`${name,address} of animal`)

//     }
// }

// const dog=new Animal();
// dog.sound("dog");

// method Overriding of polymorphism
  class Animal {
      speak() {
        console.log("Animal makes a sound");
      }
    }

    class Dog extends Animal {
      speak() {
        console.log("Dog barks");
      }
    }

const dog1=new Dog();
dog1.speak();



// Abstraction

