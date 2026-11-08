// filterCount: users can see how many filters have been applied 
let filterCount = 0;
let hintIsOpen = false;
let selectedCategory = "all";

document.addEventListener("DOMContentLoaded", () => {

    const myButton = document.getElementById("apply-filters");

    myButton.addEventListener("click", () => {
        filterCount = filterCount + 1;
        console.log("filterCount:", filterCount);
    });

});