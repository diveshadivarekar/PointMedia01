const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultsContainer = document.getElementById("results");

const search = function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "" || searchTerm[0] === " ") {
    return; // this fixes the bug for empty search trigger and database dump at " "
  }

  // Make a request to the JSON file
  fetch("json/data.json")
    .then((response) => response.json())
    .then((data) => {
      // Filter the data based on the search term
      const filteredData = Object.keys(data).filter(
        (key) =>
          key.toLowerCase().includes(searchTerm) ||
          data[key].toLowerCase().includes(searchTerm)
      );
      // Clear the previous results
      resultsContainer.innerHTML = "";
      // Display the filtered results
      filteredData.forEach((key) => {
        const result = document.createElement("div");
        result.innerHTML =
          "<a  onclick='myFunction()' href='" + data[key] + "'>" + key + "</a>";
        resultsContainer.appendChild(result);
      });
    });
};
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    search();
  }
});
searchButton.addEventListener("click", search);
