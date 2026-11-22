const gallery = document.getElementById("school-gallery");
const searchInput = document.getElementById("school-search");

// Function to display schools
function displaySchools(schoolsToDisplay) {

  // Clear the gallery before displaying results
  gallery.innerHTML = "";

  // Display message if no schools match
  if (schoolsToDisplay.length === 0) {
    gallery.textContent = "No schools found. Try another search.";
    return;
  }

  schoolsToDisplay.forEach(function (school) {
    const schoolDiv = document.createElement("div");
    schoolDiv.className = "school";

    const schoolName = document.createElement("h3");
    schoolName.textContent = school.name;
    schoolDiv.appendChild(schoolName);

    const schoolDescription = document.createElement("p");
    schoolDescription.textContent = school.description;
    schoolDiv.appendChild(schoolDescription);

    const schoolImage = document.createElement("img");
    schoolImage.src = school.image;
    schoolImage.alt = school.name;
    schoolDiv.appendChild(schoolImage);

    const schoolLink = document.createElement("a");
    schoolLink.href = school.link;
    schoolLink.textContent = "Learn More";
    schoolLink.target = "_blank";
    schoolDiv.appendChild(schoolLink);

    gallery.appendChild(schoolDiv);
  });
}

// Display all schools when the page loads
displaySchools(schools);

// Search functionality
searchInput.addEventListener("input", function () {
console.log("schools works");

  const searchTerm = searchInput.value.toLowerCase().trim();

  const filteredSchools = schools.filter(function (school) {

    return (
      school.name.toLowerCase().includes(searchTerm) ||
      school.description.toLowerCase().includes(searchTerm)
    );

  });

  displaySchools(filteredSchools);

});



