document.getElementById("search").addEventListener("keypress", function (event) {
  if (event.key === "Enter") { // Check if the "Enter" key was pressed
    event.preventDefault(); // Optional: Prevent default behavior, if needed
    document.getElementById("web").style.visibility = "visible";
    document.getElementById("controls").style.visibility = "visible";
  }
});
document.querySelector("select").addEventListener("change", function () {
  const selectedValue = this.value; // Get the selected option's value
  const searchInput = document.querySelector("#search"); // Get the input element
  searchInput.setAttribute("data-service", selectedValue); // Set the data-service attribute
});


/*
// Get the dropdown element
const dropdown = document.getElementById('myDropdown');

// On page load, set the selected value based on localStorage
window.onload = function () {
  const savedValue = localStorage.getItem('dropdownValue');
  if (savedValue) {
    dropdown.value = savedValue;
  }
};

// Save the selected value whenever it changes
dropdown.addEventListener('change', function () {
  localStorage.setItem('dropdownValue', dropdown.value);
});

*/