// function a() {
//     var b = 10;
//     c();
//     function c(){
//         console.log(b)
//     }
// }


// a();

// let d = 10
// console.log(d)
// function x() {
//     var d = 20;
//     console.log(d);
// }
// x();  

// function x(){
//     var x = 7;
//     function y(){
//         console.log(x);
//     }
//     return y;
// }

// var z = x();
// console.log(z);
// z();
// var a = 10;
// var x = function xyz(){
//     console.log(a);
// }
// console.log(x);
// x();
// xyz();


// const radius = [10,20,30,40,50];

// const area = function(radius){
//     return Math.PI * radius * radius;
// }

// const diameter = function(radius){
//     return  2*radius;
// }

// const circumference = function(radius){
//     return 2*Math.PI*radius;
// }

// let calculateArea = function(radius, logic){
//     const area = [];
//     for (let index = 0; index < 5; index++) {
//         area.push(logic(radius[index]));
//     }
//     return area;
// }
// console.log("Area: ");
// console.log(calculateArea(radius, area));
// console.log("Diameter: ");
// console.log(calculateArea(radius, diameter));
// console.log("Circumference: ");
// console.log(calculateArea(radius, circumference));

// function x() {
//     for (var index = 0; index < 5; index++) {
//         function closure(x) {
//             setTimeout(function () {
//                 console.log(x);
//             }, x * 1000);
//             console.log("Hello JS");
//         }
//         closure(index);
//     }

// }

// x();

// Objects

// const tinderUser = {};
// tinderUser.name = "Ahnuf Mir";
// tinderUser.id = 123;
// tinderUser.isLoggedIn = true;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Function with objects

// Simple Normal Function

// const addTwoNumbers = function (num1, num2){   Normal Functions
//     return num1 + num2;
// }
// const addTwoNumbers =  (num1, num2) => (num1 + num2);   // Arrow Functions

// (()=>(console.log("DB Connected!"))) ();  // iife function

// console.log(addTwoNumbers(5,5));

// const array = [10,20,30];
// let initialValue = 0;
// const total = array.reduce((acc, currentValue) => (acc+currentValue),initialValue);
// console.log(total)

// for (let index = 0; index < 5; index++) {
//     var t = 10;
//     let a = 3;
//     console.log(a);
// }

// console.log(t);
// console.log(a);