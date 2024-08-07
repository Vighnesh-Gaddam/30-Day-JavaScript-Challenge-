document.addEventListener('DOMContentLoaded', () => {
    console.group('Activity 1: Understanding LocalStorage');

    // Task 1: Save a string value to localStorage and retrieve it. Log the retrieved value.
    localStorage.setItem('myString', 'Hello, LocalStorage!');
    let retrievedString = localStorage.getItem('myString');
    console.log("Retrieved string:", retrievedString);

    // Task 2: Save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
    let myObject = { name: "Vicky", age: 25 };
    localStorage.setItem('myObject', JSON.stringify(myObject));
    let retrievedObject = JSON.parse(localStorage.getItem('myObject'));
    console.log("Retrieved object:", retrievedObject);

    console.groupEnd();

    console.group('Activity 2: Using LocalStorage');

    // Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
    const localStorageForm = document.getElementById('localStorageForm');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');

    if (savedName && savedEmail) {
        nameField.value = savedName;
        emailField.value = savedEmail;
        console.log("Saved name:", savedName);
        console.log("Saved email:", savedEmail);
    }

    localStorageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('name', nameField.value);
        localStorage.setItem('email', emailField.value);
    });

    // Task 4: Remove an item from localStorage. Log the localStorage content before and after removal.
    console.log("LocalStorage before removal:", JSON.stringify(localStorage));
    localStorage.removeItem('myString');
    console.log("LocalStorage after removal:", JSON.stringify(localStorage));

    console.groupEnd();

    console.group('Activity 3: Understanding SessionStorage');

    // Task 5: Save a string value to sessionStorage and retrieve it. Log the retrieved value.
    sessionStorage.setItem('mySessionString', 'Hello, SessionStorage!');
    let retrievedSessionString = sessionStorage.getItem('mySessionString');
    console.log("Retrieved session string:", retrievedSessionString);

    // Task 6: Save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
    let mySessionObject = { name: "SessionVicky", age: 25 };
    sessionStorage.setItem('mySessionObject', JSON.stringify(mySessionObject));
    let retrievedSessionObject = JSON.parse(sessionStorage.getItem('mySessionObject'));
    console.log("Retrieved session object:", retrievedSessionObject);

    console.groupEnd();

    console.group('Activity 4: Using SessionStorage');

    // Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
    const sessionStorageForm = document.getElementById('sessionStorageForm');
    const sessionNameField = document.getElementById('sessionName');
    const sessionEmailField = document.getElementById('sessionEmail');
    const savedSessionName = sessionStorage.getItem('sessionName');
    const savedSessionEmail = sessionStorage.getItem('sessionEmail');

    if (savedSessionName && savedSessionEmail) {
        sessionNameField.value = savedSessionName;
        sessionEmailField.value = savedSessionEmail;
        console.log("Saved session name:", savedSessionName);
        console.log("Saved session email:", savedSessionEmail);
    }

    sessionStorageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        sessionStorage.setItem('sessionName', sessionNameField.value);
        sessionStorage.setItem('sessionEmail', sessionEmailField.value);
    });

    // Task 8: Remove an item from sessionStorage. Log the sessionStorage content before and after removal.
    console.log("SessionStorage before removal:", JSON.stringify(sessionStorage));
    sessionStorage.removeItem('mySessionString');
    console.log("SessionStorage after removal:", JSON.stringify(sessionStorage));

    console.groupEnd();

    console.group('Activity 5: Comparing LocalStorage and SessionStorage');

    // Task 9: Save the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
    function saveToBothStorages(key, value) {
        localStorage.setItem(key, value);
        sessionStorage.setItem(key, value);
        console.log(`Value in LocalStorage (${key}):`, localStorage.getItem(key));
        console.log(`Value in SessionStorage (${key}):`, sessionStorage.getItem(key));
    }

    saveToBothStorages('commonKey', 'Common Value');

    // Task 10: Clear all data from both localStorage and sessionStorage. Verify that both storages are empty.
    function clearAllStorages() {
        localStorage.clear();
        sessionStorage.clear();
        console.log("LocalStorage after clearing:", JSON.stringify(localStorage));
        console.log("SessionStorage after clearing:", JSON.stringify(sessionStorage));
    }

    clearAllStorages();

    console.groupEnd();
});