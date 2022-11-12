// (A) SHOW & HIDE SPINNER
function show () {
  document.getElementById("spinner").classList.add("show");
}
function hide () {
  document.getElementById("spinner").classList.remove("show");
}

window.addEventListener("load", function() {
  document.getElementById("create").addEventListener("click", show)
})
