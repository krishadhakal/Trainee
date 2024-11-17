/*
    3. Create an array.
        a. Remove first element
        b. Remove last element
        c. Add new element at the beginning
        d. Add a new element at the end
        e. Console log all the arrays along with the original modified array.

*/

const arrayElement = [20, 13, 23, 8, 68, 77, 5, 16, 55, 45, 100];
console.log("Original Array:", arrayElement);

// removing first element we use shift()
arrayElement.shift();
console.log("Removing first element:");
console.log(arrayElement);

// removing last element we use pop()
arrayElement.pop();
console.log("Removing last element:");
console.log(arrayElement);

// adding new element at the beginning we use unshift()
arrayElement.unshift(3);
console.log("Adding new element at the beginning:");
console.log(arrayElement);

// adding new element at the end we use push()
arrayElement.push(150);
console.log("Adding new element at the end:");
console.log(arrayElement);

console.log("Adding new element at the beginning:");
console.log("Modified Array:",  arrayElement);