//resize window
document.getElementById("mobile_button").addEventListener("click", function() {
  window.resizeTo(
    window.screen.availWidth /2,
    window.screen.availHeight/2);
  console.log("resize");
});
