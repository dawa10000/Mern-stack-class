// for in loop

const persons = [
    {
        name: "Anish",
        address: "lumbini",
        age: 20, 
    },
    {
        name: "rohan",
        address: "pkr",
        age: 21, 
    },
    {
        name: "Anish",
        address: "butwal",
        age: 22, 
    },
    {
        name: "Anish",
        address: "dharan",
        age: 23, 
    }
]
console.log(persons);
persons.salary = "100 crores"
console.log(persons);
console.log(persons.length);

persons.map((person,i)=>
    console.log(person.address,i)
);

const findResult = persons.find((person)=>person.name=="rohan");
console.log(findResult);


let num = 10;
if (num === 10){
    console.log("its 10");
    console.log("something");
}

const filterResult=persons.filter((person)=>person.address === "pkr");
console.log(filterResult);
const address1="putalisadak";
const companyName = "Mind risers";
console.log("company name length is ", companyName.length);
console.log(companyName.at(companyName.length-1));
console.log(companyName.concat(address1));
console.log(companyName.endsWith("m"));
console.log(companyName.indexOf("d"));
console.log(companyName.slice(0,5));
console.log(companyName.slice(3,companyName.length-2));
console.log(companyName.split("d"));
console.log(companyName.substring(0,5));
console.log(companyName.toUpperCase());
console.log(companyName.toLowerCase());
console.log(companyName);

persons.push({
    name: "Tony",
    address: "Usa",
    age: 90,
})
persons.pop()
console.log(persons);


const colors = ["red","orange","black"]
console.log(colors);
colors.fill("blue")
console.log(colors);

const number1=50.01;
console.log(typeof number1);
console.log(number1.toFixed());
const typeCastedNumber=number1.toString();
console.log(typeof typeCastedNumber);

console.log(Math.PI.toFixed(2));

  for(var i=1; i<=4; i++){
       console.log("* ".repeat(i));
    }