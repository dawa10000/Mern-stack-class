// JavaScript Program: Student Details

// Take student details (you can change values or use prompt)
let name = prompt("Enter Student Name:");
let roll = prompt("Enter Roll Number:");
let m1 = parseFloat(prompt("Enter Marks in Subject 1:"));
let m2 = parseFloat(prompt("Enter Marks in Subject 2:"));
let m3 = parseFloat(prompt("Enter Marks in Subject 3:"));

// Calculate total and average
let total = m1 + m2 + m3;
const calculateAverage = (total, count) => total / count;
let average = calculateAverage(total, 3);

// Show results
console.log("Student Details:");
console.log("Name: " + name);
console.log("Roll Number: " + roll);
console.log("Marks: " + m1 + ", " + m2 + ", " + m3);

// Total and average marks
console.log("Total Marks: " + total);
console.log("Average Marks: " + average.toFixed(2));

// To determine the grades

if (average >= 90){
    console.log("Grade:A");
}

else if(average >= 75 && average<90){
    console.log(("Grade: B"));
}

else if(average >= 50 && average<75 ){
    console.log("Grade: C");
}

else if( average<50){
    console.log("Grade: Fail");
}








// In node js


// // Student Details Program in Node.js

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let student = {};

// // Arrow function to calculate average
// const calculateAverage = (total, count) => total / count;

// rl.question("Enter Student Name: ", function(name) {
//   student.name = name;

//   rl.question("Enter Roll Number: ", function(roll) {
//     student.roll = roll;

//     rl.question("Enter Marks in Subject 1: ", function(m1) {
//       rl.question("Enter Marks in Subject 2: ", function(m2) {
//         rl.question("Enter Marks in Subject 3: ", function(m3) {

//           // Convert marks to numbers (typecasting)
//           m1 = Number(m1);
//           m2 = Number(m2);
//           m3 = Number(m3);

//           // Calculate total and average
//           let total = m1 + m2 + m3;
//           let average = calculateAverage(total, 3);

//           // Determine grade
//           let grade;
//           if (average >= 90) {
//             grade = "A";
//           } else if (average >= 75) {
//             grade = "B";
//           } else if (average >= 50) {
//             grade = "C";
//           } else {
//             grade = "Fail";
//           }

//           // Display result
//           console.log("\n--- Student Result ---");
//           console.log(`Student: ${student.name}`);
//           console.log(`Roll No: ${student.roll}`);
//           console.log(`Marks: ${m1}, ${m2}, ${m3}`);
//           console.log(`Total: ${total}`);
//           console.log(`Average: ${average.toFixed(2)}`);
//           console.log(`Grade: ${grade}`);

//           rl.close();
//         });
//       });
//     });
//   });
// });
