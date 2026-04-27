//  artimetic operators - basic math operation in javascript 

let a = 5;
let b = 2;
console.log("a + b =", a + b); //this is the velue a + b = 7
console.log("a - b =", a - b);  //this is the velue a - b = 3
console.log("a =", a, "& b =", b);// this is the velue a = 5 & b = 2
console.log("a * b =", a * b); //this is the velue a * b = 10
console.log("a / b =", a / b); //this is the velue a / b = 2.5

//modulus operator

 let a = 5;
  let b = 2;

console.log("a % b =", a % b);  // this is the velue a % b = 1

// exponentiation operator

 let a = 5;
  let b = 2;
  console.log("a ** b =", a ** b);// defination 5 ** 2 = 5 x 5 x = 25

// //unary operator

  let a = 5;
   let b = 2;

 console.log("a =", a, "& b =", b);// velue print a = 5 & b = 2

//a++ / this the increment 
//aa-- / a-- & this the decrement

 a = a - 1;
 console.log("a =", a); //value print a = 4
 a = a + 1;
 console.log("a =", a); //value print a = 5


console.log("a++ = ", a++); //vlue a++ = 5 a++ is first not change the vlue 
console.log("a = ", a); // now vlue a = 6 a++ work like that



console.log("++a = ", ++a); // vlue ++a = 6 ++a first changed a vlue 
console.log("a = ", a); // same vlue  a = 6 same vlue

//--a & a-- same work that i mention in ++a & a++

//assignment operators = += *= %= **=

//this is called compect  you can call it shotcut (a + = 4) means you do like this (a = a = 4)



 let a = 5;
 let b = 2;

 a += 4;  //it work same a = a + 4
 console.log("a =", a); // vlue a = 9 a = 5 then a += 4  5 + 4 = 9 it work like this 
 
a -= 4; // a = a - 4
console.log("a =", a); //vlue a = 1 it means 5 - 4 = 1

a *= 4; // a = a * 4
console.log("a =", a); // value 5x 4 = 20

 a /= 4; //a = a / 4
 console.log("a =", a); // value 1.25 

 a %= 4; //a = a % 4
  console.log("a =", a); //vlue 1
 
 a **= 4; // a = a ** 4
  console.log("a =", a); // vlue a = 625

  //comparison operator/ equal to == equal to & type === not equal to != not equal to & type !==
  //greater then > greater then equal >= less then > & less then equal >=

let a = 5;
let b = 2;

console.log("5 == 2", a == b);//  is 5 equal to 2 result should be false 5 == 2 false
let a = 5;
let b = 5;
console.log("5 != 5", a != b);//  result is false 5 not equal to 5 != 5 flase

console.log("5 != 2", a != b); // result is true coz 5 is not equal to 2, 5 != 2 true

// === is strict version equal is also check data type string and number nerver compaired lets see how it work

 let a = 5;
 let b = "5";
console.log(" a !== b", a !== b); //result is  true 
console.log(" a === b", a === b);// result is flase

 let a = 5;
 let b = 3;
 console.log("5 > 3", a > b); // result is true 
 console.log("5 < 3", a < b); // result is false

  let a = 5;
 let b = 5;
 console.log("5 <= 5", a <= b); //result is true 

 console.log("5 >= 5", a >= b);// result is true

 //logical operator && || ! there is 3 logical operator
 //logical operators how they Works, true expresion or true/flase final result we use logic
 //1st is (logical and &&), when condition 1 is true condition 2 also true result is true  

 let a =  6;
 let b = 5;
  let condi1 = a > b;
  let condi2 = a === 6;
   console.log("codi1 && condi2 =", condi1 && condi2 );// result is true
 
  let condi1 = a > b;
  let condi2 = a === 5;
  console.log("codi1 && condi2 =", condi1 && condi2 ); // result is false

 //logical OR || "if at least one of the condiction is true, the result is true"
 console.log("codi1 || condi2 =", a < b || a === 6 );// result is true

//  logical not ! " it  reverses the value, if the conditon is true,it make it flase ,if the condi is flase, it make it true "
 
 console.log("!(6<5)=", !(a === 6) );// this is false 
   console.log("!(6<5)=", !(a < b) );// result is true

 //Conditionl statments  to implement some condition in the code

//if statment


 let age = 25;
 let age = 16;
 if (age >= 18){
  console.log(" you can vote");
 } 

 if (age < 18){
   console.log ("you can not vote");
 }

 let age = 18;

 let mode = "dark";
 let color;

 if (mode === "dark"){
   color = "black";
 }
 if (mode === "light"){
   color = "white";
   }
 console.log(color); // color black/ becouse mode velu is dark (let mode)  

//our if statment wokr like that

//if-else statment

let mode = "light";
let color;

if (mode === "dark"){
  color = "black";
} else{
  color = "white";
}

let age = 25;
if(age >= 18) {
console.log("vote");
} else {
  console.log("not vote");
}

//odd or even
let num = 10;

if(num % 2 === 0){
  console.log(num,"is even");
} else {
  console.log(num,"is odd");
}
// syntax  is (;) rule in coding languge

//else-if statment

let mode = "blue";
let color;

if (mode ==="dark") {
  color = "balck";
} else if(mode == "blue") {
  color = "blue"
} else if(mode === "pink") {
  color = "pink"
} else {
  color = "white"
}
console.log (color);

//Ternary operators/ condition? true output:false output

let age = 25;

let result = age >= 18 ? "adult" : "not adult;"
console.log(result); //simpler , compact if-else

 //Prompt Message
  
let num = prompt("enter a number:");
if(num % 5 === 0){
  console.log(num, " is multiple of 5");
} else {
  console.log(num, " is not a multiple of 5");
} 

// js program

let score = 90;
let grade;

if(score >= 90 && score <= 100){
  grade = "A";
} else if(score >= 70 && score <= 89){
  grade = "B";
}  else if( score >= 60 && score <= 69){
  grade = "C";
} else if(score >= 50 && score <= 59){
  grade = "D";
} else if(score >= 0 && score <= 49){
  grade = "F";
} 
 console.log("according to your score, your grade was : ", grade);



 





