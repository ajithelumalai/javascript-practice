// Student Marks Management System

let studentName = "Ajith";

let tamil = 85;
let english = 78;
let maths = 90;
let science = 88;
let computer = 95;

// Total Marks 
let total = tamil + english + maths + science + computer;

// Average
let average = total / 5;

// Percentage
let percentage = (total / 500) * 100;

// Find Gread
let gread;

if (percentage >= 90){
    gread = "A";
}
else if(percentage >= 75) {
    gread = "B";
}
else if(percentage >= 60){
    gread = "C"
}
else if(percentage >= 50){
    gread = "D"
}
else{
    gread="F"
}

// Pass or Fail
let result;

if (
    tamil >= 35 &&
    english >= 35 &&
    maths >= 35 &&
    science >= 35 &&
    computer >= 35
) {
    result= "Pass"
}
else{
    result="Fail"
}

// Display Student Report
console.log("=== STUDENT REPORT===")

console.log("Student Name: ",studentName);
console.log("---------------------");

console.log("Tamil: ",tamil);
console.log("English: ",english);
console.log("Maths: ",maths);
console.log("Science: ",science);
console.log("Computer: ",computer);

console.log("--------------------------");

console.log("Total Marks: ",total+"/500");
console.log("Average: ",average);
console.log("Percentage: ",percentage + "%");
console.log("Gread: ",gread);
console.log("Result: ",result);

console.log("====================================")

