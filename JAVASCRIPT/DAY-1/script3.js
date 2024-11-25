// How do var, let, and const differ in terms of scope and hoisting? Write a code differentiating them.

// var
// function varFunction(){

//     console.log(a); //hoisted, but initialized with undefined
//     var a = 10;
//     console.log(a); //this is accessible
// }

// varFunction();

// console.log(a); //this is not accessible

// let
//console.log(a); // this will throw an error
// let a = 10;
// function letFunction(){
//     if(true) {
//         let b = 20;
//         console.log(b); //this is accessible
//     }
//     console.log(a); //this is accessible
//     console.log(b); //this is not accessible
// }
// letFunction();

// const
// function constFunction(){
//     // console.log(a); //this will throw an error
//     const a = 20;
//     console.log(a); //this is accessible
// }
// constFunction();
// console.log(a); //this will throw an error


//note: javascript initializations are not hoisted

var x = 5; //initialize x

console.log("x is", x , "and y is", y);

var y = 10; //initialize y