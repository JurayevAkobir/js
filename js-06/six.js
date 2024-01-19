// ? Function

// ! 1. Ism

// * declaration function

// function fullName(){
//     let ism = prompt("ismingiz");
//     return ism
// }

// console.log(fullName().toUpperCase());

// * Expression function

// const fullName = function () {
//     let ism = prompt("ismingiz");
//     return ism
// }
// console.log(fullName().toUpperCase());

// * Arrow function 

// const fullName = () => {
//     let ism = prompt("ismingiz");
//     return ism
// }

// console.log(fullName().toUpperCase());

// ! 2

// * declaration function
// function fullName(){
//     let ism = prompt("ismingiz");
//     return ism
// }

// * Expression function

// * Arrow function 


// ! 3.
// * declaration function

// function addNumbers(a, b, c, d) {
//     return a * b + c * d
// }
// console.log(addNumbers(2, 4, 5, 6)); // * 38

// * Expression function

// const addNumbers = function (a, b, c, d) {
//     return a / b - c / d
// }
// console.log(addNumbers(12, 4, 45, 3)); // * -12

// * Arrow function 

// const addNumbers = (a, b, c, d) => {
//     return a - c + b - d
// }
// console.log(addNumbers(35, 5, 10, 2)); // * 28

// ! 4.

// * Declaration function

// function addItme(a, b) {
//     let space = " "
//     return a + space + b
// }
// console.log(addItme("salom", "hello" ).split(" "));

// * Expression function

// const addItme = function(a, b) {
//     let space = " "
//     return a +  space + b
// }

// console.log(addItme( "salom", "hello").split(" "));

// * Arrow function
// const addItme = (a, b) => {
//     let space = " "
//      return a +  space + b
// }
// console.log(addItme( "salom", "hello").split(" "));

// ! 5.
// * Declaration function
// * Expression function
// * Arrow function

//  ! 6.
// * declaration function

// function sumOfNumbers(a, b, c) {
//     return a + b + c
// }
// console.log(sumOfNumbers(2, 4, 5)); // * 11

// * Expression function

// const sumOfNumbers = function (a, b, c) {
//     return a + b + c
// }
// console.log(sumOfNumbers(12, 4, 45)); // * 61

// * Arrow function 

// const sumOfNumbers = (a, b, c) => {
//     return a + b + c
// }
// console.log(sumOfNumbers(35, 5, 10)); // * 50


// ! 7
// * Declaration function

function sumOfOdds(start, end){
    let sum = 0;
    for(let i = start; i <= end; i++){
        if (i % 2 != 0)
        sum += i;
    }
    return sum
}
console.log(sumOfOdds(35, 43));
// * Expression function
// * Arrow function 
