// Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.


const friends = ['jinia', 'saba', 'sohana', 'azad', 'sadia'];
console.log(Array.isArray(friends));

const numbers = [22, 343, 66, 332, 32];
console.log(Array.isArray(numbers));

const empty = [];
console.log(Array.isArray(empty));


const name = 'rima';
console.log(Array.isArray(name));

console.log(Array.isArray(new Array(5)));
