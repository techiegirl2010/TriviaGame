// trivia game

// start button

// background image

// view title

// view "time remaining" countdown

// Counter starts - set for 120 seconds approx depending on how many Qs ask

// Questions with multiple choice
// Can only select one answer per Q

// when time remaining hits zero, gmae stops and results shown

// All done....
// Correct answers:
// Incorrect answers:
// Unanswered:

// Should also be a "Done" button that you can click if you are done before the time runs out.

// Theme and style however you want

var startButton

// create an array of questions


var questions = 


    var answers =

    // Create a for loop
    {
        for(var i = 0; i<questions.length; i++)
var response = window.prompt(questions[i].prompt);
if (response == questions[i].answer) {
    correctQuestionScore++;
}

{
else
    incorrectQuestionScore--;

}


// Number of questions answered correctly
var correctQuestionScore = 0;

// Number of questions answered incorrectly
var incorrectQuestionScore = 0;

// Number of questions not answered
var unansweredQuestionScore = 0;

var allDone

var Timer = 


// When button clicked, start game
$(document).ready(function () {

}


