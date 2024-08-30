// Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.



const books = ['html book', 'css book', 'python book', 'javascript book', 'c++ book'];
const bookPresent = books.includes('javascript book');
console.log(bookPresent);

if (bookPresent) {
    console.log('Element is present in the array');

}

else {
    console.log('Element is not present in the array');

}
