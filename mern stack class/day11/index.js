function sum(num1,num2){
    // let result = num1 + num2;
    // console.log("addition result is " , result);
    return num1+num2;
}

let result = sum (10,20)
console.log("outside the function", result);

let name="Mindrisers";
function printName(){
    console.log(name);
}
printName();

const multiply=(num1,num2,num3)=>{
    return num1*num2*num3;
}
const multiply_result=multiply(10,20,30);
console.log(multiply_result);


// Array
const fruits = ["apple","orange","banana"]
const color = ["red","green","orange"];
console.log(color);
console.log(color.length);
console.log(color.toString());
console.log(color.push("blue"));
console.log(color);
console.log(color[color.length-1]);
console.log(color.at(0));
console.log(color.concat(fruits));

// Object

const car = {
        name: "Volvo",
        type: "Fiat",
        model: "500",
        color: "white"
}

car.country="Germany";
console.log(car);



