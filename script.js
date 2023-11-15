document.addEventListener("DOMContentLoaded", function() {
    // Hide the loading container after a 2-second delay when the DOM is ready
    setTimeout(function() {
        document.getElementById("loading-container").style.display = "none";
    }, 3000);
});

window.addEventListener("load", function() {
    // Hide the loading container when the page has fully loaded
    document.getElementById("loading-container").style.display = "none";
});

const foodItems = document.querySelectorAll("input[name='foodItem']");
const breakfastResult = document.getElementById("breakfastResult");
const lunchResult = document.getElementById("lunchResult");
const dinnerResult = document.getElementById("dinnerResult");
const totalCaloriesResult = document.getElementById("totalCaloriesResult");

let selectedItems = {
    breakfast: [],
    lunch: [],
    dinner: [],
};

foodItems.forEach((checkbox) => {
    checkbox.addEventListener("change", updateSelection);
});

document.getElementById("addBreakfast").addEventListener("click", () => {
    addToMealTime("breakfast");
});

document.getElementById("addLunch").addEventListener("click", () => {
    addToMealTime("lunch");
});

document.getElementById("addDinner").addEventListener("click", () => {
    addToMealTime("dinner");
});

foodItems.forEach((checkbox) => {
    checkbox.addEventListener("change", updateSelection);
});

// Store the currently selected category
let currentCategory = "lunchResult";

function addToMealTime(mealTime) {
    const selectedFoodItems = Array.from(foodItems)
        .filter((checkbox) => {
            if (checkbox.checked) {
                checkbox.checked = false; // Clear the checkbox
                return true;
            }
            return false;
        })
        .map((checkbox) => ({
            name: checkbox.value,
            calories: parseInt(checkbox.getAttribute("data-calories"), 10),
            image: checkbox.getAttribute("data-image"), // Image URL
        }));

    selectedFoodItems.forEach((foodItem) => {
        const existingItem = selectedItems[mealTime].find((item) => item.name === foodItem.name);
        if (existingItem) {
            // If the item with the same name already exists, increment its count.
            existingItem.count++;
        } else {
            // If it's a new item, add it to the list with a count of 1.
            foodItem.count = 1;
            selectedItems[mealTime].push(foodItem);
        }
    });

    // Call the updateSelection function to update the UI with the selected items
    updateSelection();

    // Remove the border from the previously selected category
    document.getElementById(`${currentCategory}`).style.border = "none";

    // Scroll to the corresponding category
    scrollToCategory(mealTime);

    // Update the currently selected category
    currentCategory = `${mealTime}Result`;
}

function scrollToCategory(category) {
    const targetCategory = document.getElementById(`${category}Result`);
    
    // Check if the category exists
    if (targetCategory) {
        // Scroll to the target category
        targetCategory.scrollIntoView({ behavior: "smooth", block: "center" });
        
        // Set the border color of the selected category
        targetCategory.style.border = `2px solid ${getBorderColor(category)}`;
    }
}

function getBorderColor(category) {
    switch (category) {
        case "breakfast":
            return "#1D976C";
        case "lunch":
            return "#1FA2FF";
        case "dinner":
            return "#FF512F";
        default:
            return "#000"; // Default border color
    }
}


function calculateTotalCalories(items) {
    return items.reduce((total, item) => total + item.calories, 0);
}

function updateSelection() {
    const breakfastItemsElement = document.getElementById("breakfastItems");
    const lunchItemsElement = document.getElementById("lunchItems");
    const dinnerItemsElement = document.getElementById("dinnerItems");

    // Update the breakfastItems element
    updateMealtimeResult(breakfastItemsElement, selectedItems.breakfast, "breakfast");

    // Update the lunchItems element
    updateMealtimeResult(lunchItemsElement, selectedItems.lunch, "lunch");

    // Update the dinnerItems element
    updateMealtimeResult(dinnerItemsElement, selectedItems.dinner, "dinner");

    // Animate the total calorie counts for each mealtime individually
    animateTotalCaloriesForMealtime(document.getElementById("breakfastTotalCalories"), selectedItems.breakfast);
    animateTotalCaloriesForMealtime(document.getElementById("lunchTotalCalories"), selectedItems.lunch);
    animateTotalCaloriesForMealtime(document.getElementById("dinnerTotalCalories"), selectedItems.dinner);

    // Calculate and display total calories across all meal times
    const allSelectedItems = [...selectedItems.breakfast, ...selectedItems.lunch, ...selectedItems.dinner];
    const totalCalories = calculateTotalCalories(allSelectedItems);

    // Create a span element for the total calories count
    const totalCaloriesSpan = document.createElement("span");
    totalCaloriesSpan.style.color = getColorForValue(totalCalories, 0, 2000);
    totalCaloriesResult.innerHTML = `รวมวันนี้ทานไป `;
    totalCaloriesResult.appendChild(totalCaloriesSpan);

    // Create a span element for "kcal" text
    const kcalSpan = document.createElement("span");
    kcalSpan.textContent = `  kcal`;
    totalCaloriesResult.appendChild(kcalSpan);

    // Animate the total calorie count for all meals
    animateCounting(totalCaloriesSpan, totalCalories);

    // Define the messages based on total calories range
    let message = '';
    if (totalCalories < 1000) {
        message = 'กินน้อยไปแล้วนะ';
    } else if (totalCalories >= 1000 && totalCalories <= 1800) {
        message = 'กินอีกหน่อยก็ดีนะ';
    } else if (totalCalories >= 1801 && totalCalories <= 2000) {
        message = 'กินเท่านี้ก็เพียงพอแล้ว';
    } else if (totalCalories > 2000) {
        message = 'กินเยอะไปแล้วนะ';
    }

    // Create a div for the message, but don't initially display it
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.id = 'totalCaloriesMessage';

    // Add a class to the message based on total calories range
    if (totalCalories < 1000) {
        messageDiv.classList.add('too-little');
    } else if (totalCalories >= 1000 && totalCalories <= 1800) {
        messageDiv.classList.add('can-eat-more');
    } else if (totalCalories >= 1801 && totalCalories <= 2000) {
        messageDiv.classList.add('about-right');
    } else if (totalCalories > 2000) {
        messageDiv.classList.add('warning');
    }

    messageDiv.style.display = 'none'; // Initially hide the message
    totalCaloriesResult.appendChild(messageDiv);

    // Display the message if it's not empty
    if (message) {
        messageDiv.style.display = 'block';
    }
}

function updateMealtimeResult(resultElement, items, mealTime) {
    const listElement = resultElement.querySelector("ul");
    listElement.innerHTML = "";

    items.forEach((item) => {
        const listItem = document.createElement("li");

        // Create the delete button with the "delete-button" class
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "ลบ";
        deleteButton.className = "delete-button"; // Apply the CSS class
        deleteButton.addEventListener("click", () => {
            deleteItem(item.name, mealTime);
        });

        // Display the count along with the item name and image
        listItem.innerHTML = `${item.count} x <img src="${item.image}" alt="${item.name}"> ${item.name}`;
        listItem.appendChild(deleteButton);
        listElement.appendChild(listItem);
    });
}

function deleteItem(itemName, mealTime) {
    selectedItems[mealTime] = selectedItems[mealTime].filter((item) => item.name !== itemName);
    updateSelection();
}


function animateTotalCaloriesForMealtime(totalCaloriesElement, mealItems) {
    const totalCalories = calculateTotalCalories(mealItems);
    if (totalCaloriesElement.dataset.isAnimating === "true") {
        return; // Animation is already in progress
    }
    totalCaloriesElement.dataset.isAnimating = "true"; // Set the flag

    const duration = 1000; // Animation duration in milliseconds
    const frames = 30; // Number of frames
    const initialFontSize = 16; // Starting font size
    const maxFontSize = 20; // Maximum font size
    const fontSizeIncrement = (maxFontSize - initialFontSize) / frames;
    let currentFontSize = initialFontSize;
    const increment = totalCalories / (duration / frames);
    let currentValue = parseFloat(totalCaloriesElement.textContent.match(/\d+/)); // Get the current value

    const updateValue = () => {
        if (currentValue < totalCalories) {
            totalCaloriesElement.textContent = `แคลอรี่ทั้งหมด : ${Math.round(currentValue)} kcal`;
            totalCaloriesElement.style.fontSize = `${currentFontSize}px`; // Update font size
            currentValue += increment;
            currentFontSize += fontSizeIncrement; // Increment font size
            requestAnimationFrame(updateValue);
        } else {
            totalCaloriesElement.textContent = `แคลอรี่ทั้งหมด : ${totalCalories} kcal`;
            totalCaloriesElement.style.fontSize = `${maxFontSize}px`; // Set to maximum font size
            totalCaloriesElement.dataset.isAnimating = "false"; // Reset the flag when the animation is complete
        }
    };

    updateValue();
}

// Include your getColorForValue and animateCounting functions here if they are defined elsewhere in your code.
function animateCounting(element, targetValue) {
    const duration = 1000; // Animation duration in milliseconds
    const frames = 30; // Number of frames
    const initialFontSize = 18; // Starting font size
    const maxFontSize = 26; // Maximum font size
    const fontSizeIncrement = (maxFontSize - initialFontSize) / frames;
    const increment = targetValue / (duration / frames);
    let currentValue = 0;
    let currentFontSize = initialFontSize;

    const updateValue = () => {
        if (currentValue < targetValue) {
            element.textContent = Math.round(currentValue);
            element.style.fontSize = `${currentFontSize}px`; // Update font size
            currentValue += increment;
            currentFontSize += fontSizeIncrement; // Increment font size
            requestAnimationFrame(updateValue);
        } else {
            element.textContent = targetValue;
            element.style.fontSize = `${maxFontSize}px`; // Set to maximum font size
        }
    };

    updateValue();
}

function getColorForValue(value, minValue, maxValue) {
    // Define the color scale (green to red)
    const minColor = [29, 151, 31]; // Green
    const maxColor = [255, 0, 0]; // Red

    // Calculate the color values
    const r = Math.round(minColor[0] + (maxColor[0] - minColor[0]) * ((value - minValue) / (maxValue - minValue)));
    const g = Math.round(minColor[1] + (maxColor[1] - minColor[1]) * ((value - minValue) / (maxValue - minValue)));
    const b = Math.round(minColor[2] + (maxColor[2] - minColor[2]) * ((value - minValue) / (maxValue - minValue)));

    return `rgb(${r},${g},${b})`;
}

// Initialize the selection when the page loads
updateSelection();

// Add event listeners for reset buttons
document.getElementById("resetBreakfast").addEventListener("click", () => {
    resetMealtime("breakfast");
});

document.getElementById("resetLunch").addEventListener("click", () => {
    resetMealtime("lunch");
});

document.getElementById("resetDinner").addEventListener("click", () => {
    resetMealtime("dinner");
});

// Modify the resetSelection function to reset a specific mealtime
function resetMealtime(mealTime) {
    selectedItems[mealTime] = [];
    const checkboxes = Array.from(foodItems);
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkbox.checked = false;
        }
    });
    updateSelection();
}

document.getElementById("resetSelection").addEventListener("click", resetSelection);

function resetSelection() {
    selectedItems = {
        breakfast: [],
        lunch: [],
        dinner: [],
    };

    // Clear the checkboxes
    foodItems.forEach((checkbox) => {
        checkbox.checked = false;
    });

    // Clear the displayed selections and total calories
    updateSelection();

    // Reset the background color of totalresult to the default color
    totalCaloriesResult.style.backgroundColor = '#bebebe';

    const navButtons = document.querySelectorAll(".nav-button");
    const categoryDivs = {
        breakfast: document.getElementById("breakfastResult"),
        lunch: document.getElementById("lunchResult"),
        dinner: document.getElementById("dinnerResult"),
    };

    // Deselect the navigation buttons and remove border effects
    navButtons.forEach((button) => {
        button.classList.remove("active");
    });

    // Reset the border effects on categoryDivs
    for (const key in categoryDivs) {
        if (categoryDivs.hasOwnProperty(key)) {
            categoryDivs[key].style.border = "none";
        }
    }
}

// Define a filter and search function
function filterAndSearch(filterType) {
    const searchQuery = document.getElementById("foodSearch").value.toLowerCase();
    const foodItems = document.querySelectorAll("input[name='foodItem']");

    foodItems.forEach((checkbox) => {
        let foodType = checkbox.getAttribute("data-food-type");
        const foodName = checkbox.value.toLowerCase();
        const itemCheckboxDiv = checkbox.parentElement;

        // Check if the data-food-type attribute exists
        if (foodType) {
            foodType = foodType.toLowerCase();

            let itemInfoText = "";
            const infoElement = itemCheckboxDiv.querySelector(".info");
            if (infoElement) {
                itemInfoText = infoElement.textContent.toLowerCase();
            }

            if ((filterType === "all" || foodType === filterType) && (foodName.includes(searchQuery) || itemInfoText.includes(searchQuery))) {
                itemCheckboxDiv.style.display = "block";
            } else {
                itemCheckboxDiv.style.display = "none";
            }
        } else {
            // Handle elements without the data-food-type attribute
            itemCheckboxDiv.style.display = "none";
        }
    });
}


// Add filter options for calories
function filterAndSearchByCalories(caloriesFilter) {
    const foodItems = document.querySelectorAll("input[name='foodItem']");

    foodItems.forEach((checkbox) => {
        const calories = checkbox.getAttribute("data-calories");

        if (caloriesFilter(calories)) {
            checkbox.parentElement.style.display = "block";
        } else {
            checkbox.parentElement.style.display = "none";
        }
    });
}

function lessThan100(calories) {
    return calories < 100;
}

function between101And250(calories) {
    return calories >= 101 && calories <= 250;
}

function moreThan250(calories) {
    return calories > 250;
}

// Attach the filter and search function to input change events
document.getElementById("foodFilter").addEventListener("change", function () {
    const filterType = document.getElementById("foodFilter").value;

    // Add filter options for calories
    if (filterType === "calories-less-than-100") {
        filterAndSearchByCalories(lessThan100);
    } else if (filterType === "calories-between-101-250") {
        filterAndSearchByCalories(between101And250);
    } else if (filterType === "calories-250-or-more") {
        filterAndSearchByCalories(moreThan250);
    } else {
        filterAndSearch(filterType);
    }
});

document.getElementById("foodSearch").addEventListener("input", function () {
    const filterType = document.getElementById("foodFilter").value;
    filterAndSearch(filterType);
});

// Add the "itemcheckbox" class to the wrapping divs
const foodItemDivs = document.querySelectorAll("input[name='foodItem']").forEach((checkbox) => {
    const itemCheckboxDiv = checkbox.parentElement;
    itemCheckboxDiv.classList.add("itemcheckbox");
});

// Initialize the filter and search
filterAndSearch("all");

function btnanimate() {
    var animateButton = function(e) {
        e.preventDefault();

        // Reset animation
        e.target.classList.remove('animate');

        e.target.classList.add('animate');
        setTimeout(function() {
            e.target.classList.remove('animate');
        }, 700);
    };

    
    var classname = document.getElementsByClassName("confetti-button");

    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', animateButton, false);
    }
}

// Call the btnanimate function to initialize the button animations
btnanimate();
