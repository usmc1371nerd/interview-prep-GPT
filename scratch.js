
//Using chatGPT to get ready for an interview!

// JavaScript Test
// Variable Declaration and Basic Operations

// Write JavaScript code to:

// Declare a variable x and assign it the value 10.
// Declare another variable y and assign it the value 5.
// Add x and y together and store the result in a variable called sum.
// Print the value of sum to the console.
// Conditional Statements

// Write JavaScript code to:

// Declare a variable temperature and assign it a value of 25.
// Write an if statement to check if temperature is greater than 30. If so, print "It's too hot!" to the console. Otherwise, print "The weather is pleasant.".
// Looping

// Write JavaScript code to:

// Create an array named fruits containing three fruit names.
// Use a for loop to iterate over the fruits array and print each fruit name to the console.
// Functions

// Write a JavaScript function called calculateArea that calculates the area of a rectangle. The function should take two parameters length and width, and return the calculated area. Test this function by passing length = 5 and width = 3 as arguments and printing the result to the console.

// DOM Manipulation

// Create an HTML file with a button element and a paragraph element with an id of demo.
// Write JavaScript code to add an event listener to the button so that when it's clicked, it changes the text inside the paragraph element to "Button Clicked!".
// Guidelines for the Interviewee:
// You can use any text editor or online JavaScript editor to write your code.
// Write clean and readable code.
// Test your code thoroughly before submission.
// Feel free to ask for clarification if you're unsure about any requirements.
// This test covers basic JavaScript concepts including variable declaration, conditional statements, looping, functions, and DOM manipulation. It's designed to assess the candidate's familiarity with fundamental JavaScript concepts and their ability to solve simple problems using JavaScript.





//Variable Declaration and Basic Operations


x = 10
y = 5

sum = x + y

console.log(sum)    

let temperature = 25

if (temperature > 30){
 console.log("Its too hot!");
} else {console.log("The weather is perfect!")}

let fruit=["orange", "grape", "apple"]

for (let i= 0; i < fruit.length; i++) {
 console.log('Fruit:',fruit[i])

}

function calculateArea(length, width) {
    return length * width;
}

width = 3;
length = 5;

let area = calculateArea(length, width);
console.log('Area:', area);

//DOM Manipulation

document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('myButton');
    button.addEventListener('click', function() {  let paragraph = document.getElementById('demo')
    paragraph.innerHTML = "Button Clicked!";
});
});

//I had to use chatGPt to work through some of the functions and the DOM manipulation.
//I was on the right track most of the time with working through the problems outloud
//I just needed help with writing the code in the correct syntax..