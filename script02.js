document.addEventListener("DOMContentLoaded", function() {
	sortCheckboxes();
});

function sortCheckOrder(order) {
	if(order === 'default') {
		sortCheckboxes();
	} else {
		sortCheckboxesByCalories(order);
	}
}

function sortCheckboxes() {
	var foodItemsContainer = document.getElementById("fooditems");
	var checkboxes = foodItemsContainer.querySelectorAll(".itemcheckbox");
	// Convert NodeList to an array for easier manipulation
	var checkboxesArray = Array.from(checkboxes);
	// Custom sorting function based on data-food-type
	checkboxesArray.sort(function(a, b) {
		var typeA = a.querySelector("input").getAttribute("data-food-type");
		var typeB = b.querySelector("input").getAttribute("data-food-type");
		// Define the sorting order
		var order = {
			"main": 1,
			"others": 2,
			"snacks": 3,
			"drinks": 4
		};
		return order[typeA] - order[typeB];
	});
	// Clear the container
	foodItemsContainer.innerHTML = "";
	// Append sorted checkboxes back to the container
	checkboxesArray.forEach(function(checkbox) {
		foodItemsContainer.appendChild(checkbox);
	});
}

function sortCheckboxesByCalories(order) {
	var foodItemsContainer = document.getElementById("fooditems");
	var checkboxes = foodItemsContainer.querySelectorAll(".itemcheckbox");
	// Convert NodeList to an array for easier manipulation
	var checkboxesArray = Array.from(checkboxes);
	// Custom sorting function based on data-calories
	checkboxesArray.sort(function(a, b) {
		var caloriesA = parseInt(a.querySelector("input").getAttribute("data-calories"));
		var caloriesB = parseInt(b.querySelector("input").getAttribute("data-calories"));
		if(order === 'asc') {
			return caloriesA - caloriesB;
		} else if(order === 'desc') {
			return caloriesB - caloriesA;
		}
	});
	// Clear the container
	foodItemsContainer.innerHTML = "";
	// Append sorted checkboxes back to the container
	checkboxesArray.forEach(function(checkbox) {
		foodItemsContainer.appendChild(checkbox);
	});
}
// Function to check if an element is in the viewport
function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();
	return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
// Function to handle the animation of itemcheckbox elements
function animateItems() {
	var items = document.querySelectorAll('.itemcheckbox');
	items.forEach(function(item, index) {
		// Add a class with a delay based on the index
		setTimeout(function() {
			item.classList.add('show');
		}, index * 100); // Adjust the delay as needed
	});
}
// Event listener for scroll
window.addEventListener('scroll', function() {
	// Check if the fooditems container is in the viewport
	if(isElementInViewport(document.getElementById('fooditems'))) {
		// Call the animateItems function when in viewport
		animateItems();
		// Remove the scroll event listener to avoid multiple calls
		window.removeEventListener('scroll', arguments.callee);
	}
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
// Store the currently selected category
let currentCategory = "lunchResult";
document.getElementById("addBreakfast").addEventListener("click", () => {
	addToMealTime("breakfast");
});
document.getElementById("addLunch").addEventListener("click", () => {
	addToMealTime("lunch");
});
document.getElementById("addDinner").addEventListener("click", () => {
	addToMealTime("dinner");
});

function addToMealTime(mealTime) {
	const selectedFoodItems = Array.from(foodItems).filter((checkbox) => {
		if(checkbox.checked) {
			checkbox.checked = false; // Clear the checkbox
			return true;
		}
		return false;
	}).map((checkbox) => ({
		name: checkbox.value,
		calories: parseInt(checkbox.getAttribute("data-calories"), 10),
		image: checkbox.getAttribute("data-image"), // Image URL
	}));
	selectedFoodItems.forEach((foodItem) => {
		const existingItem = selectedItems[mealTime].find((item) => item.name === foodItem.name);
		if(existingItem) {
			// If the item with the same name already exists, increment its count.
			existingItem.count++;
		} else {
			// If it's a new item, add it to the list with a count of 1.
			foodItem.count = 1;
			selectedItems[mealTime].push(foodItem);
		}
	});
	// Add the class with the slide-in animation to the updated mealtime result element
    const mealtimeResultElement = document.getElementById(`${mealTime}Items`);
    mealtimeResultElement.classList.add('slideIn');
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
	if(targetCategory) {
		// Scroll to the target category
		targetCategory.scrollIntoView({
			behavior: "smooth",
			block: "center"
		});
		// Set the border color and radius of the selected category
		targetCategory.style.border = `3px solid ${getBorderColor(category)}`;
		targetCategory.style.borderTopRightRadius = '14px';
		targetCategory.style.borderTopLeftRadius = '14px';
	}
}

function getBorderColor(category) {
	switch(category) {
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
    return items.reduce((total, item) => total + (item.calories * item.count), 0);
}

function updateSelection() {
	const breakfastItemsElement = document.getElementById("breakfastItems");
	const lunchItemsElement = document.getElementById("lunchItems");
	const dinnerItemsElement = document.getElementById("dinnerItems");
	// Keep track of the previous state
	const prevSelectedItems = {
		breakfast: [...selectedItems.breakfast],
		lunch: [...selectedItems.lunch],
		dinner: [...selectedItems.dinner],
	};
	// Update the breakfastItems element
	updateMealtimeResult(breakfastItemsElement, selectedItems.breakfast, "breakfast");
	// Update the lunchItems element
	updateMealtimeResult(lunchItemsElement, selectedItems.lunch, "lunch");
	// Update the dinnerItems element
	updateMealtimeResult(dinnerItemsElement, selectedItems.dinner, "dinner");
	// Animate the total calorie counts only if the categories have changed
	if (!arraysEqual(prevSelectedItems.breakfast, selectedItems.breakfast)) {
		animateTotalCaloriesForMealtime(document.getElementById("breakfastTotalCalories"), selectedItems.breakfast);
	}
	if (!arraysEqual(prevSelectedItems.lunch, selectedItems.lunch)) {
		animateTotalCaloriesForMealtime(document.getElementById("lunchTotalCalories"), selectedItems.lunch);
	}
	if (!arraysEqual(prevSelectedItems.dinner, selectedItems.dinner)) {
		animateTotalCaloriesForMealtime(document.getElementById("dinnerTotalCalories"), selectedItems.dinner);
	}
	// Animate the total calorie counts for each mealtime individually
	animateTotalCaloriesForMealtime(document.getElementById("breakfastTotalCalories"), selectedItems.breakfast);
	animateTotalCaloriesForMealtime(document.getElementById("lunchTotalCalories"), selectedItems.lunch);
	animateTotalCaloriesForMealtime(document.getElementById("dinnerTotalCalories"), selectedItems.dinner);
	// Calculate and display total calories across all meal times
	const allSelectedItems = [...selectedItems.breakfast, ...selectedItems.lunch, ...selectedItems.dinner];
	const totalCalories = calculateTotalCalories(allSelectedItems);
	// Get the totalCaloriesValue span element
	const totalCaloriesSpan = document.getElementById("totalCaloriesValue");
	// Set text content for the total calories count
	totalCaloriesSpan.textContent = totalCalories;
	// Set text color and border color
	const color = getColorForValue(totalCalories);
	totalCaloriesSpan.style.color = color;
	// Animate the total calorie count for all meals
	animateCounting(totalCaloriesSpan, totalCalories);
	// Update suggestions based on total calories
	updateSuggestions(totalCalories);
}
// Helper function to check if two arrays are equal
function arraysEqual(arr1, arr2) {
	return JSON.stringify(arr1) === JSON.stringify(arr2);
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
            deleteItemWithAnimation(listItem, item.name, mealTime);
        });
        // Display the count along with the item name and image
        listItem.innerHTML = `${item.count} x <img src="${item.image}" alt="${item.name}"> ${item.name}`;
        listItem.appendChild(deleteButton);
        listElement.appendChild(listItem);
    });
}

function deleteItemWithAnimation(listItem, itemName, mealTime) {
    // Apply a CSS class to initiate the delete animation
    listItem.classList.add('delete-animation');
    // Wait for the animation to complete before removing the item from the list
    listItem.addEventListener('animationend', () => {
        // Remove the CSS class after the animation completes
        listItem.classList.remove('delete-animation');
        // Remove the list item from the DOM
        listItem.remove();
        // Remove the item from the selected items array
        selectedItems[mealTime] = selectedItems[mealTime].filter((item) => item.name !== itemName);
        // Update the selection and other UI elements
        updateSelection();
    });
}

function animateTotalCaloriesForMealtime(totalCaloriesElement, mealItems) {
    const totalCalories = calculateTotalCalories(mealItems);
    if (totalCaloriesElement.dataset.isAnimating === "true") {
        return; // Animation is already in progress
    }
    totalCaloriesElement.dataset.isAnimating = "true"; // Set the flag
    const duration = 500; // Animation duration in milliseconds
    const frames = 15; // Number of frames
    const initialFontSize = 14; // Starting font size
    const maxFontSize = 18; // Maximum font size
    const fontSizeIncrement = (maxFontSize - initialFontSize) / frames;
    const increment = totalCalories / (duration / frames);
    const updateValue = (currentValue, currentFontSize) => {
        if (currentValue < totalCalories) {
            // Animate only the numerical part of the content
            totalCaloriesElement.innerHTML = `แคลอรี่ทั้งหมด : <span style="font-size: ${currentFontSize}px;">${Math.round(currentValue).toLocaleString()}</span> กิโลแคลอรี่`;
            currentFontSize += fontSizeIncrement; // Increment font size
            currentValue += increment;
            // Use requestAnimationFrame for smoother animations
            requestAnimationFrame(() => updateValue(currentValue, currentFontSize));
        } else {
            // Animate only the numerical part of the content
            totalCaloriesElement.innerHTML = `แคลอรี่ทั้งหมด : <span style="font-size: ${maxFontSize}px;">${totalCalories.toLocaleString()}</span> กิโลแคลอรี่`;
            totalCaloriesElement.dataset.isAnimating = "false"; // Reset the flag when the animation is complete
        }
    };
    updateValue(0, initialFontSize);
}

function animateCounting(element, targetValue) {
    const duration = 500; // Animation duration in milliseconds
    const frames = 15; // Number of frames
    const initialFontSize = 18; // Starting font size
    const maxFontSize = 26; // Maximum font size
    const fontSizeIncrement = (maxFontSize - initialFontSize) / frames;
    // Cubic ease-out easing function
    const easing = t => 1 - Math.pow(1 - t, 3);
    const increment = targetValue / (duration / frames);
    let currentValue = 0;
    let currentFontSize = initialFontSize;
    const updateValue = () => {
        if (currentValue < targetValue) {
            const easedProgress = easing(currentValue / targetValue);
            // Use toLocaleString to add a thousand separator
            element.textContent = Math.round(currentValue).toLocaleString();
            element.style.fontSize = `${initialFontSize + easedProgress * (maxFontSize - initialFontSize)}px`;
            currentValue += increment;
            requestAnimationFrame(updateValue);
        } else {
            // Use toLocaleString to add a thousand separator
            element.textContent = targetValue.toLocaleString();
            element.style.fontSize = `${maxFontSize}px`;
        }
    };
    updateValue();
}

function getColorForValue(value) {
	let color;
	switch(true) {
		case value <= 1000:
			color = 'red';
			break;
		case value >= 1001 && value <= 1799:
			color = 'orange';
			break;
		case value >= 1800 && value <= 2000:
			color = 'green';
			break;
		case value > 2000:
			color = 'red';
			break;
		default:
			color = 'gray'; // Default color for undefined cases
			break;
	}
	return color;
}

function updateSuggestions(value) {
	const suggestionsSpan = document.getElementById("suggestions");
	let suggestionText = '';
	let suggestionColor = '';
	switch(true) {
		case value <= 1000:
			suggestionText = '❌ รับประทานน้อยเกินไปแล้ว ❌';
			suggestionColor = 'red';
			break;
		case value >= 1001 && value <= 1799:
			suggestionText = 'รับประทานอีกหน่อยนะ -';
			suggestionColor = 'orange';
			break;
		case value >= 1800 && value <= 2000:
			suggestionText = '✔ รับประทานเพียงพอแล้ว ✔';
			suggestionColor = 'green';
			break;
		case value > 2000:
			suggestionText = '❌ รับประทานมากเกินไปแล้ว ❌';
			suggestionColor = 'red';
			break;
		default:
			suggestionText = 'ค่าผิดพลาด';
			suggestionColor = 'gray';
			break;
	}
	suggestionsSpan.textContent = suggestionText;
	suggestionsSpan.style.color = suggestionColor;
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
		if(checkbox.checked) {
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
	// Scroll smoothly to the element with class "searchandfilter"
	const searchAndFilterDiv = document.querySelector('.searchandfilter');
	if(searchAndFilterDiv) {
		searchAndFilterDiv.scrollIntoView({
			behavior: 'smooth'
		});
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
		if(foodType) {
			foodType = foodType.toLowerCase();
			let itemInfoText = "";
			const infoElement = itemCheckboxDiv.querySelector(".info");
			if(infoElement) {
				itemInfoText = infoElement.textContent.toLowerCase();
			}
			if((filterType === "all" || foodType === filterType) && (foodName.includes(searchQuery) || itemInfoText.includes(searchQuery))) {
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
// Attach the filter and search function to input change events
document.getElementById("foodFilter").addEventListener("change", function() {
	const filterType = document.getElementById("foodFilter").value;
	filterAndSearch(filterType);
});
document.getElementById("foodSearch").addEventListener("input", function() {
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
	for(var i = 0; i < classname.length; i++) {
		classname[i].addEventListener('click', animateButton, false);
	}
}
// Call the btnanimate function to initialize the button animations
btnanimate();