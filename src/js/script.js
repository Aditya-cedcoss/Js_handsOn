{
  // Create a variable called carName, assign the value Volvo to it.
  var carName = "Volvo";
  // JS Variables Exercise 1
}
{
  // Create a variable called x, assign the value 50 to it.
  var x = 50;
  //   JS Variables Exercise 2
}
{
  // Display the sum of 5 + 10, using two variables: x and y.
  var x = 5;
  var y = 10;
  document.getElementById("demo").innerHTML = x + y;
  //   JS Variables Exercise 3
}
{
  // Create a variable called z, assign x + y to it, and display the result in an alert box.
  var x = 5;
  var y = 10;
  var z = x + y;
  alert(z);
  //   JS Variables Exercise 4
}
{
  // On one single line, declare three variables with the following names and values:
  // firstName = "John"
  // lastName = "Doe"
  // age = 35
  var firstName = "John",
    lastName = "Doe",
    age = 35;
  //   JS Variables Exercise 5
}
{
  // Multiply 10 with 5, and alert the result:
  alert(10 * 5);
  //   JS Operators Exercise 1
}
{
  // Divide 10 by 2, and alert the result:
  alert(10 / 2);
  // JS Operators Exercise 2
}
{
  // Alert the remainder when 15 is divided by 9.
  alert(15 % 9);
  // JS Operators Exercise 3
}
{
  // Use the correct assignment operator that will result in x being 15 (same as x = x + y).
  x = 10;
  y = 5;
  x += y;
  //  JS Operators Exercise 4
}
{
  // Use the correct assignment operator that will result in x being 50 (same as x = x * y).
  x = 10;
  y = 5;
  x *= y;
  // JS Operators Exercise 5
}
{
  // Use comments to describe the correct data type of the following variables:
  let length = 16; //Number
  let lastName = "Johnson"; //String
  const x = {
    firstName: "John",
    lastName: "Doe",
  }; //Object
  //  JS operator Exercise 6
}
{
  // Execute the function named myFunction.
  function myFunction() {
    alert("Hello World!");
  }
  myFunction();
  // JS Function Exercise 1
}
{
  // Create a function called "myFunction".

  function myFunction() {
    alert("Hello World!");
  }
  // JS Function Exercise 2
}
{
  // Make the function return "Hello".
  function myFunction() {
    return "Hello";
  }
  document.getElementById("demo").innerHTML = myFunction();
  // JS Function Exercise 3
}
{
  // Make the function display "Hello" in the inner HTML of an element with the ID "demo".
  function myFunction() {
    document.getElementById("demo").innerHTML = "Hello";
  }
  // JS Function Exercise 4
}
{
  // Alert "John" by extracting information from the person object.
  const person = {
    firstName: "John",
    lastName: "Doe",
  };

  alert(person.firstName);
  // JS Objects Exercise 1
}
{
  // Add the following property and value to the person object: country: Norway.
  const person = {
    firstName: "John",
    lastName: "Doe",
    country: "Norway",
  };
  // JS Objects Exercise 2
}
{
  // Create an object called person with name = John, age = 50.
  // Then, access the object to alert("John is 50").
  const person = {
    name: "John",
    age: 50,
  };
  alert(person.name + " is " + person.age);
  // JS Objects Exercise 3
}
{
  // The <button> element should do something when someone clicks on it. Try to fix it!
  <button onclick="alert('Hello')">Click me.</button>;
  // JS Events Exercise 1
}
{
  // When the button is clicked, the function "myFunction" should be executed.
  <button onclick="myFunction()">Click me.</button>;
  //   JS Events Exercise 2
}
{
  // The <div> element should turn red when someone moves the mouse over it.
  <div onmouseover="this.style.backgroundColor='red'">myDIV.</div>;
  // JS Events Exercise 3
}
{
  // Use the length property to alert the length of txt.
  let txt = "Hello World!";
  let x = txt.length;
  alert(x);
  //  JS Strings Exercise 1
}
{
  // Use escape characters to alert We are "Vikings"
  let txt = 'We are "Vikings"';
  alert(txt);
  //   JS Strings Exercise 2
}
{
  // Concatenate the two strings to alert "Hello World!".
  let str1 = "Hello ";
  let str2 = "World!";
  alert(str1 + str2);
  //  JS String Exercise 3
}
{
  // Convert the text into an UPPERCASE text:
  let txt = "Hello World!";
  txt = txt.touppercase();
  // JS String Method Exercise 1
}
{
  // Use the slice method to return the word "bananas".
  let txt = "I can eat bananas all day";
  let x = txt.slice(10, 17);
  // JS String Method Exercise 2
}
{
  // Use the correct String method to replace the word "Hello" with the word "Welcome".
  let txt = "Hello World";
  txt = txt.replace("Hello", "Welcome");
  // JS String Method Exercise 3
}
{
  // Convert the value of txt to upper case.
  let txt = "Hello World";
  txt = txt.toUpperCase();
  //  JS String Method Exercise 4
}
{
  // Convert the value of txt to lower case.
  let txt = "Hello World";
  txt = txt.toLowerCase();
  // JS String Method Exercise 4
}
{
  // Get the value "Volvo" from the cars array.
  const cars = ["Saab", "Volvo", "BMW"];
  let x = cars[1];
  // JS Arrays Exercise 1
}
{
  // Change the first item of cars to "Ford".
  const cars = ["Volvo", "Jeep", "Mercedes"];
  cars[0] = "Ford";
  // JS Arrays Exercise 2
}
{
  // Alert the number of items in an array, using the correct Array property.
  const cars = ["Volvo", "Jeep", "Mercedes"];
  alert(cars.length);
  // Js arrays exercise 3
}
{
  // Use the correct Array method to remove the last item of the fruits array.
  const fruits = ["Banana", "Orange", "Apple"];
  fruits.pop();
  // JS array method Exercise 1
}
{
  // Use the correct Array method to add "Kiwi" to the fruits array.
  const fruits = ["Banana", "Orange", "Apple"];
  fruits.push("Kiwi");
  // JS array method Exercise 2
}
{
  // Use the splice() method to remove "Orange" and "Apple" from fruits.
  const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
  fruits.splice(1, 2);
  // JS Array method Exercise 3
}
{
  // Use the correct Array method to sort the fruits array alphabetically.
  const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
  fruits.sort();
  // Js Array sort ex1
}
{
  // Create a Date object and alert the current date and time.
  const d = new Date();
  alert(d);
  // JS Dates Ex 1
}
{
  // Use the correct Date method to extract the year (four digits) out of a date object.
  const d = new Date();
  year = d.getFullYear();
  // JS Dates Ex 2
}
{
  // Use the correct Date method to get the month (0-11) out of a date object.
  const d = new Date();
  month = d.getMonth();
  // JS Dates Ex 3
}
{
  // Use the correct Date method to set the year of a date object to 2020.
  const d = new Date();
  d.setFullYear(2020);
  // JS Dates Ex 4
}
{
  // Use the correct Math method to create a random number.
  let r = Math.random();
  // JS Math ex 1
}
{
  // Use the correct Math method to return the largest number of 10 and 20.
  let x = Math.max(10, 20);
  // JS Math ex 2
}
{
  // Use the correct Math method to round a number to the nearest integer.
  let x = Math.round(5.3);
  // JS Math ex 3
}
{
  // Use the correct Math method to get the square root of 9.
  let x = Math.sqrt(9);
  // JS Math ex 4
}
{
  // Choose the correct comparison operator to alert true, when x is greater than y.
  x = 10;
  y = 5;
  alert(x > y);
  // JS Comparison ex 1
}
{
  // Choose the correct comparison operator to alert true, when x is equal to y.
  x = 10;
  y = 10;
  alert(x == y);
  // JS Comparison ex 2
}
{
  // Choose the correct comparison operator to alert true, when x is NOT equal to y.
  x = 10;
  y = 5;
  alert(x != y);
  // JS Comparison ex 3
}
{
  // Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
  var age = n;
  var voteable = age < 18 ? "Too young" : "Old enough";
  alert(voteable);
  // JS Comparison ex 4
}
{
  // Fix the if statement to alert "Hello World" if x is greater than y.
  if (x > y) {
    alert("Hello World");
  }
  // JS Condition Ex 1
}
{
  // Fix the if statement to alert "Hello World" if x is greater than y, otherwise alert "Goodbye".

  if (x > y) {
    alert("Hello World");
  } else {
    alert("Goodbye");
  }
  // JS Condition Ex 2
}
{
  // Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".

  switch (fruits) {
    case "Banana":
      alert("Hello");
      break;

    case "Apple":
      alert("Welcome");
      break;
  }
  // JS Switch ex 1
}
