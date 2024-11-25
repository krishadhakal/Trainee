/*
    4. Create a new array element.
        a. Create a new array with the multiplication of 5
        b. Create a new array finding the maximum number of new array (task number 4.a)
        c. Also list out the even numbers of both new and original array.

*/

const arrayElement = [20, 13, 23, 8, 68, 77, 5, 16, 55, 45, 100];
console.log("Original Array:", arrayElement);

// new array with the multiplication of 5
let arrayMultiplied = arrayElement.map(x => x * 5);
console.log("Array multiplied by 5: ");
console.table(arrayMultiplied);

// new array finding the maximum number of new array (task number 4.a)
let arrayMax = Math.max(...arrayMultiplied); //using spread operator
console.log("Maximum number of new array:",arrayMax);

//listing even numbers of both arrays
let evenOriginal = arrayElement.filter(x => x % 2 == 0);
console.log("Even numbers of original array:");
console.table(evenOriginal);

let evenNew = arrayMultiplied.filter(x => x % 2 == 0);
console.log("Even numbers of new array:");
console.table(evenNew);
