document.getElementById("search").addEventListener("keypress", function(event) {
  if (event.key === "Enter") { // Check if the "Enter" key was pressed
    event.preventDefault(); // Optional: Prevent default behavior, if needed
    document.getElementById("web").style.visibility = "visible";
    document.getElementById("controls").style.visibility = "visible";
  }
});
document.querySelector("select").addEventListener("change", function() {
  const selectedValue = this.value; // Get the selected option's value
  const searchInput = document.querySelector("#search"); // Get the input element
  searchInput.setAttribute("data-service", selectedValue); // Set the data-service attribute
});
