// Day 10: Event Handling

// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('textParagraph').innerText = 'Hello, How are you';
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
document.getElementById('toggleImage').addEventListener('dblclick', function() {
    this.style.opacity = this.style.opacity === '0' ? '1' : '0';
});

// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.
document.getElementById('mouseOverElement').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'green';
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
document.getElementById('mouseOverElement').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'yellow';
});

// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.getElementById('keyInput').addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById('keyInput').addEventListener('keyup', function(event) {
    document.getElementById('inputValue').innerText += event.key;
});

// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.getElementById('mySelect').addEventListener('change', function() {
    document.getElementById('selectedValue').innerText = `Selected value: ${this.value}`;
});

// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked item: ${event.target.innerText}`);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.getElementById('addElementButton').addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.innerText = 'taaaaaaadddddddddddddaaaaaaaaaaaa';
    newElement.classList.add('dynamic-child', 'task-paragraph');
    document.getElementById('dynamicParent').appendChild(newElement);
});