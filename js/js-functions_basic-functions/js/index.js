console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
//const BookData = [
//{ title: "Ceza", author: "poor writer", rating: "4.0", sales: "5000" },];   couldn't make this work

const title = "Suc";
const author = "poor writer";
let rating = 4;
let sales = 5000;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
console.log(title, author, rating, sales);
sales = 5500;
rating = 4.2;
console.log(title, author, rating, sales);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData() {
  console.log(title, author, rating, sales);
}
sales = 5700;
rating = 4.5;
logBookData();
// --^-- write your code here --^--
