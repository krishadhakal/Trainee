// Find the even numbers from 1 to 100. And console the output.

//normal forloop
for(let i = 1; i <= 100; i++){
    if(i%2 == 0) {
        console.log(i);
    }
}

//using array manipulation
console.log("Using Array Manipulation: push");
const evenNumbers = [];
for(let i = 1; i <= 100; i++){
    if(i%2 == 0) {
        evenNumbers.push(i);
    }
}
console.log(evenNumbers);