console.log("yeah its fine");
var submit = document.getElementById("submit");
var answer = document.getElementById("answer");
var correct_answer = document.getElementById("correct");
var wrong_answer = document.getElementById("wrong");
submit.addEventListener("click", function() {
  if (answer.value === "13") {
    wrong_answer.classList.add("hidden");
    wrong_answer.classList.remove("shown");
    correct_answer.classList.add("shown", "correct");
    correct_answer.classList.remove("hidden");
    answer.value = "";
  } else {
    correct_answer.classList.add("hidden");
    correct_answer.classList.remove("shown");
    wrong_answer.classList.add("shown", "wrong");
    wrong_answer.classList.remove("hidden");
    answer.value = "";
  }
  console.log(answer.value);
})
