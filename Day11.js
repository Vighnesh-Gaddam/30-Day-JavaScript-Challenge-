// Day 11: Promises and Async/Await

// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 2000);
});
myPromise.then(result => {
    console.log(result); 
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error usingcatch().
let Task2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise Rejected"), 2000);
});
Task2.catch(error => {
    console.log(error); 
});

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, 1000);
    });
}

fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(data1 => {
        console.log(data1); 
        return fetchData('https://jsonplaceholder.typicode.com/posts/2');
    })
    .then(data2 => {
        console.log(data2); 
        return fetchData('https://jsonplaceholder.typicode.com/posts/3');
    })
    .then(data3 => {
        console.log(data3); 
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function getData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), 2000);
    });

    let result = await promise;
    console.log(result); // "Done!"
}
getData();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function fetchWithError() {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => reject("An error occurred!"), 2000);
        });

        let result = await promise;
        console.log(result);
    } catch (error) {
        console.log(`Caught an error: ${error}`); 
    }
}
fetchWithError();

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchDataAsync() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}
fetchDataAsync();

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
let promise1 = Promise.resolve('First promise');
let promise2 = Promise.resolve('Second promise');
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Third promise');
});

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); 
    });

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
let promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'Fast promise');
});
let promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Slow promise');
});

Promise.race([promise4, promise5])
    .then(value => {
        console.log(value); 
    });
