//Is this connected?
console.log("yeah its fine");

//variables
var submit = document.getElementById("submit");
var answer = document.getElementById("answer");
var correct_answer = document.getElementById("correct");
var wrong_answer = document.getElementById("wrong");
var question = document.getElementById("question");

function set_colors_right() {
  wrong_answer.classList.add("hidden");
  wrong_answer.classList.remove("shown");
  correct_answer.classList.add("shown", "correct");
  correct_answer.classList.remove("hidden");
}

function set_colors_wrong() {
  correct_answer.classList.add("hidden");
  correct_answer.classList.remove("shown");
  wrong_answer.classList.add("shown", "wrong");
  wrong_answer.classList.remove("hidden");
}

//Create two random number
function number() {
  return Math.floor(Math.random() * 100 + 1);
}

var n1 = number();
var n2 = number();
var answer_temporary = 0;

//choose an operation
function operation() {
  if(number() > 50) {
    return "+";
  } else {
    return "-";
  }
}

//create question
function question_maker() {
  return n1.toString() + " " + operation() + " x = " + n2.toString();
}

var question_final = question_maker();

//find out answer
function answer_giver() {
  if (operation() === "+") {
    answer_temporary = n1 - n2;
    console.log(answer_temporary);
  } else {
    answer_temporary = n2 - n1;
    console.log(answer_temporary);
  }
  return answer_temporary;
}

 var answer_final = answer_giver();

//display question
question.textContent = question_final;

//check for answer
submit.addEventListener("click", function() {
  if (Number(answer.value) === Number(answer_final)) {
    set_colors_right();
    answer.value = "";
  } else {
    set_colors_wrong();
    answer.value = "";
  }
  console.log(answer.value);
  console.log(answer_final);
});
