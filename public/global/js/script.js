document.getElementById("search").addEventListener("keypress", function(event) {
  if (event.key === "Enter") { // Check if the "Enter" key was pressed
    event.preventDefault(); // Optional: Prevent default behavior, if needed
    document.getElementById("web").style.visibility = "visible";
    document.getElementById("controls").style.visibility = "visible";
  }
});