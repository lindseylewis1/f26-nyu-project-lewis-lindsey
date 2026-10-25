const gallery = document.getElementById("school-gallery");

schools.forEach(function (school) {
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
