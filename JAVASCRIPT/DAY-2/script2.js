// Create an array. Remove 3 elements starting from index 4, and insert 5 new elements at that position using the appropriate method.

const arrayElement = [20, 13, 23, 8, 68, 77, 5, 16, 55, 45, 100];

// splice is used.
arrayElement.splice(4, 3, 200, 300, 400, 500, 600);

console.log(arrayElement);