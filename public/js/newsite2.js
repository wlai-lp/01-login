// (A) SHOW & HIDE SPINNER
function show () {
  // validate form first
  const form = document.querySelector("form");
  if(!form.checkValidity()){
    form.classList.add("was-validated");
    return;
  }
  // if form is good then throw the spinner
  document.getElementById("spinner").classList.add("show");

  // perform all actions to do engagement creation
}
function hide () {
  document.getElementById("spinner").classList.remove("show");
}

window.addEventListener("load", function() {
  document.getElementById("create").addEventListener("click", show)
})
