// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("ChangeContext").innerText = "Activity 1 completed";

// Task 2: Select an HTML element by its class and change its background color.
document.querySelector(".ChangeBgColor").style.backgroundColor = "red";

// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.
const Task3 = document.createElement("div");
Task3.innerText = "Hello, How are you";
Task3.style.border = "2px solid blue";
document.body.appendChild(Task3);

// Task 4: Create a new li element and add it to an existing ul list.
const ul = document.getElementById('myList');
const newLi = document.createElement('li');
newLi.textContent = 'New list item';
ul.appendChild(newLi);

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.
document.getElementById('removeTask5Button').addEventListener('click', function() {
    const elements = document.querySelectorAll('.RmTask5');
    elements.forEach(element => element.remove());
});

// Task 6: Remove the last child of a specific HTML element.
document.getElementById('removeTask6Button').addEventListener('click', function() {
    const parent = document.querySelector('.T6');
    if (parent.lastElementChild) {
        parent.removeChild(parent.lastElementChild);
    }
});

// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document.getElementById('myLink').src = "http://127.0.0.1:5500/Day9.html";

// Task 8: Add and remove a CSS class to/from an HTML element.
const elementToToggleClass = document.getElementById('textParagraph');
elementToToggleClass.classList.add('newClass');
setTimeout(() => {
    elementToToggleClass.classList.remove('newClass');
}, 3000);

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('textParagraph').textContent = 'Text has been changed!';
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
document.querySelector('.hoverElement').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#1b5e20';
});