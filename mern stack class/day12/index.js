// conditional statement

const isEven=(num1)=>{
    if(num1===1 || num1===0){
        console.log(`${num1} is odd`);
    }else if(num1%2===0){
        console.log(`${num1} is Even`);
    }
}

isEven(0);


const isVote=(age)=>{
    return age>=18?"Can vote" : "cannot vote"
}

console.log(isVote(12));



// nested if
// if(true){
//     if(true){

//     }
//     else{

//     }
// }

// switch statement
const getGrade = (mark) => {
  const range = mark >= 90 ? 'A' :
                mark >= 80 ? 'B' :
                mark >= 60 ? 'C' : 'F';

  switch (range) {
    case 'A':
      console.log("Grade is A");
      break;
    case 'B':
      console.log("Grade is B");
      break;
    case 'C':
      console.log("Grade is C");
      break;
    default:
      console.log("Grade is F");
  }
}
getGrade(50)




// for (let i = 0; i<10; i++){
//     console.log(i);
// }

const colors = new Array("red","green","yellow");
colors.forEach(colors => {
    console.log(colors);
});


let j = 0;
while (j<6) {
    console.log(j)
    j++;
}

let k = 10;
do {
    console.log(k);
    k++;
} while (k<6);

// for in and for of loop

let obj = {
    name: "Andrew",
    role: "Programmer",
    company:"Apple"
}


for (const key in obj) {
   
        const element = obj[key];
        console.log(key, element);
    }

for (const key in obj) {
        console.log(key);
    }


for (const c of "Andrew") {
    console.log(c);    
}    


// try cath and throw error handling

let a = prompt("Enter first number")
let b = prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a)+parseInt(b)

function main(){
let x = 1;
try {
    console.log("The sum is ", sum*x);
    return true
} catch (error) {
    console.log("There is an error");
    return false
}
  finally{
    console.log("files are being closed and db connection is being closed");
}
}

let c = main()