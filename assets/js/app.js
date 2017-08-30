console.log("yeah its fine");
var submit = document.getElementById("submit");
var answer = document.getElementById("answer");
submit.addEventListener("click", function() {
  if (answer.value === "13") {
    alert("YES");
    answer.value = "";
  } else {
    alert("NOPE");
    answer.value = "";
  }
  console.log(answer.value);
})
