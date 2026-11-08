// filterCount: users can see how many filters have been applied 
let totalFilterClicks = 0;

document.addEventListener("DOMContentLoaded", () => {

    // Find all items inside the filter-list
    const filters = document.querySelectorAll(".filter-list input");

    // Find the counter on the page
    const clickDisplay = document.getElementById("total-filter-clicks");

    // Track every time a filter is clicked
    filters.forEach((filter) => {

        filter.addEventListener("click", () => {

            totalFilterClicks++;

            // Update the counter displayed on the page
            clickDisplay.textContent = totalFilterClicks;

            console.log("Total Filter Clicks:", totalFilterClicks);

        });

    });

});