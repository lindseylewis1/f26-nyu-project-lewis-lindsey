/* =====================================
   1. FILTER CLICK COUNTER
===================================== */

let totalFilterClicks = 0;


/* =====================================
   2. FILTER SETTINGS
===================================== */

const selectedFilters = {
    delivery: [],
    housing: false,
    degree: []
};


/* =====================================
   3. RENDER SCHOOL CARDS
===================================== */

function renderSchools(schoolList) {

    const gallery = document.getElementById("school-gallery");

    if (!gallery) return;

    // Clear existing cards
    gallery.innerHTML = "";

    // Display message if no results
    if (schoolList.length === 0) {
        gallery.textContent = "No schools match your selected filters.";
        return;
    }

    // Create a card for each school
    schoolList.forEach((school) => {

        const schoolCard = document.createElement("div");
        schoolCard.classList.add("school");

        const image = document.createElement("img");
        image.src = school.image;
        image.alt = school.name;

        const heading = document.createElement("h3");
        heading.textContent = school.name;

        const description = document.createElement("p");
        description.textContent = school.description;

        const link = document.createElement("a");
        link.href = school.link;
        link.textContent = "Learn More";
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        schoolCard.appendChild(image);
        schoolCard.appendChild(heading);
        schoolCard.appendChild(description);
        schoolCard.appendChild(link);

        gallery.appendChild(schoolCard);

    });
}


/* =====================================
   4. FILTER FUNCTION
===================================== */

function filterSchools() {

    const filteredSchools = schools.filter((school) => {

        // Check delivery method
        const matchesDelivery =
            selectedFilters.delivery.length === 0 ||
            selectedFilters.delivery.some((mode) =>
                school.deliveryModes.includes(mode)
            );

        // Check housing
        const matchesHousing =
            !selectedFilters.housing || school.housing === true;

        // Check degree level
        const matchesDegree =
            selectedFilters.degree.length === 0 ||
            selectedFilters.degree.some((level) =>
                school.degreeLevels.includes(level)
            );

        // All filter categories must match
        return matchesDelivery && matchesHousing && matchesDegree;

    });

    renderSchools(filteredSchools);
}


/* =====================================
   5. PAGE LOAD AND EVENT LISTENERS
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Find filter inputs
    const filters = document.querySelectorAll(".filter-list input");

    // Find click counter
    const clickDisplay = document.getElementById("total-filter-clicks");

    // Track filter clicks and apply filters
    filters.forEach((filter) => {

        filter.addEventListener("change", () => {

            // Update click counter
            totalFilterClicks++;

            if (clickDisplay) {
                clickDisplay.textContent = totalFilterClicks;
            }

            console.log("Total Filter Clicks:", totalFilterClicks);

            // Identify filter category and value
            const filterType = filter.dataset.filter;
            const filterValue = filter.value;

            // Delivery method
            if (filterType === "delivery") {

                if (filter.checked) {
                    selectedFilters.delivery.push(filterValue);
                } else {
                    selectedFilters.delivery =
                        selectedFilters.delivery.filter(
                            (value) => value !== filterValue
                        );
                }
            }

            // Housing
            if (filterType === "housing") {
                selectedFilters.housing = filter.checked;
            }

            // Degree level
            if (filterType === "degree") {

                if (filter.checked) {
                    selectedFilters.degree.push(filterValue);
                } else {
                    selectedFilters.degree =
                        selectedFilters.degree.filter(
                            (value) => value !== filterValue
                        );
                }
            }

            // Refresh gallery
            filterSchools();

        });

    });


    /* =====================================
       6. RESET FILTERS
    ===================================== */

    const resetButton = document.getElementById("reset-filters");

    if (resetButton) {

        resetButton.addEventListener("click", () => {

            // Uncheck all filters
            filters.forEach((filter) => {
                filter.checked = false;
            });

            // Clear selected filters
            selectedFilters.delivery = [];
            selectedFilters.housing = false;
            selectedFilters.degree = [];

            // Display all schools again
            renderSchools(schools);

        });

    }


    /* =====================================
       7. INITIAL SCHOOL DISPLAY
    ===================================== */

    renderSchools(schools);

});
