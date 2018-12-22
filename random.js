/*
var myName = prompt("What is your name?");
console.log(myName.toLowerCase());
console.log(myName);
var message = "Hello " + myName + ". Welcome to treehouse. " + myName + " my father name is Abdul Ghafoor.";
message += "This is a new string.";
message += "One more";
message += myName;
message += "jkhngdfgsdfdghj";
document.write(message);
console.log(message.length); 
*/
/*
var newString = prompt("What should I shout?");
var shout = newString.toUpperCase();
shout += "!";
alert(shout);
*/
/*
var input = prompt("Enter your input");
var store = input;
alert(store);
alert("They are finished.");
store += "Here is a new string";
document.write(store);
*/
// var firstName = prompt("First Name");
// var lastName = prompt("Last Name");
// var name = firstName + lastName;
// alert("The string " + name.toUpperCase() + "is" + name.length + " character long." )

// var secondsPerMinute = 60;
// var minutesPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var WeekPerYear = 52;
// var secondsPerDay = secondsPerMinute * minutesPerHour * hoursPerDay;
// document.write("There are " + secondsPerDay + " seconds in a da");
// var yearsAlive = 20;
// var secondsAlive =  secondsPerMinute * minutesPerHour * hoursPerDay * WeekPerYear * yearsAlive;
// document.write("I have been alive " + secondsAlive + " seconds yet.");

// var HTML = prompt("Enter no");
// var CSS = prompt("EEnter 2nd no")
// // var result = parseInt(HTML) + parseInt(CSS)    
// var result = parseFloat(HTML) + parseFloat(CSS);
// document.write(result);
/*
var questions = 3;
var questionsLeft = '[' +  questions + ' questions left ]';
var adjective = prompt("Enter an adjective" + questionsLeft);
questions -= 1;
questionsLeft = '[' +  questions + ' questions left ]';
var noun = prompt("Enter a noun" + questionsLeft);
questions -= 1;
questionsLeft = '[' +  questions + ' questions left ]';
var verb = prompt("Enter verb" + questionsLeft);
var sentence = "<h2> There is an </h2>" + adjective
sentence += "The programmer who wants to wtite an " + noun ;
sentence += "there is no issue with thi verb" + verb;
alert(sentence);
*/

// var dieRoll = Math.floor(Math.random() * 6) + 1;
// alert("your die have " + dieRoll);

// var userInput = prompt("Enter a no to which you want to print random no?");
// var topNumber = parseInt(userInput);
// var randomNumber = Math.floor(Math.random() * topNumber) + 1;
// document.write("This is the " + randomNumber) + " the no between " + topNumber;


// var startNumber = prompt("Enter a number from which you want to start a random number?");
// var startPoint = parseInt(startNumber);
// var endNumber = prompt("Enter a number to which you want to have random number?");
// var endPoint = parseInt(endNumber);
// var randomNumber = Math.floor(Math.random() * (endPoint - startPoint + 1 )) + startPoint;
// document.write("The random numbers between " + startPoint + " and" + endPoint + " is " + randomNumber);

/*
var answer = prompt("Enter a game which you want to play?");
if ( answer.toUpperCase() === 'RUBY' ) {
  document.write("<p>This is true</p>");
} else {
  document.write("<p>That's not true.</p>");
}
*/

/*
var a = 10;
var b = 20;
var c = 30;
if ( a > b ) {
  	alert("a is greater than b");
    } else {
    	alert("a is not greater then b");
    }
*/
// 82941136703599
/*
var randomGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("Either it is a number between 1 and 6?");
if ( parseInt(guess) === randomNumber ) {
  randomGuess = true;
} else if ( parseInt(guess) < randomNumber ) {
  var guessMore = prompt("Try again! The number i think is more than " + guess);
    if ( parseInt(guessMore)  === randomNumber  ) {
      randomGuess = true;
    }
} else if ( parseInt(guess) > randomNumber ) {
  var guessLess = prompt("Try again! The correct number is less than " + guess);
    if ( promt(guessLess) === randomNumber ) {
      randomGuess = true;
    }
}

if ( randomGuess == true ) {
  document.write("<p>Yes it is</p>"); 
} else {
  document.write("<p>Sorry! The number was </p>" + randomNumber);
}
*/


//   Conditional challange solution

/*
var correctAnswer = 0;
var firstQuestion = prompt("Enter your name.");
if ( firstQuestion.toUpperCase() === 'WARDA' ) {
  correctAnswer += 1;
}
var secondQuestion = prompt("Enter father name.");
if ( secondQuestion.toUpperCase() ==='GHAFOOR' ) {
  correctAnswer += 1;
}
var thirdQuestion = prompt("Enter your age.");
if ( parseInt(thirdQuestion) == 20) {
  correctAnswer += 1;
}
var fourthQuestion = prompt("Enter your year of birth.");
if ( parseInt(fourthQuestion)  === 1998 ) {
  correctAnswer += 1;
}
var fifthQuestion = prompt("Enter your gende.");
if ( fifthQuestion.toUpperCase()  === 'FEMALE' ) {
 correctAnswer += 1;
}
document.write("<p>You give the correct answer " + correctAnswer + ".</p>");
 if ( correctAnswer === 5) {
  document.write("You won the gold crown.");
} else if ( correctAnswer === 4 || correctAnswer === 3 ) {
 document.write("You won the silver crown.");
} else if ( correctAnswer === 2 || correctAnswer === 1 ) {
  document.write("You won the bronze crown.");
} else if ( correctAnswer === 0 ) {
  document.write("No crown at all.");
} */


// functions

// anonymous function also a comman way toof calling and creating the functions.
/* var alertRandom = function() {
  var randomNumber = Math.floor(Math.random() * 6) + 1 ;
  alert(randomNumber); 
 };
 alertRandom();
*/

//function inside a function
// function alertRandom() {
//   var randomNumber = Math.floor(Math.random() * 6) + 1 ;
//   alert(randomNumber); 
// }
// function addition() {
//   alertRandom();
//   var field = document.getElementById
//   var addNumber = prompt("Enter a number.");
//   alert(addNumber);  
// }
// addition();

// value returned by function
/*
function noAlert() {
  var number = 5 ;
  return number;
  alert("This won't appear");
}
noAlert();
alert(noAlert()); */

//passing parameters
/*
function getRandomNumber( upper ) {
  var randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}
alert(getRandomNumber( 6 )); */

//    Calculating area
/*
function area( height , width , unit) {
  var calculatingArea = height * width ;
  return calculatingArea + " " + unit;
}
document.write("<p>The are is equals to" + area(3 , 5, 'sq ft') + " </p>"); */

// challange 

function getRandomNumber( lower, upper ) {
  if ( isNaN(lower) || isNaN(upper) ) {
    throw new Error('insert valid value');
    
  }

  var random = Math.floor(Math.random() * (upper - lower + 1) + lower);
  return random;
}
console.log(getRandomNumber( 'frd' , 6) );
console.log(getRandomNumber( 1, 50 ) );