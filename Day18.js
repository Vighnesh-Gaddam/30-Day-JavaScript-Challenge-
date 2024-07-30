// Day 18: Algorithms

// Activity 1: Sorting Algorithms

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
            }
        }
    }
    console.log("Bubble Sort:", arr);
}

let arr1 = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr1);

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; 
    }
    console.log("Selection Sort:", arr);
}

let arr2 = [64, 34, 25, 12, 22, 11, 90];
selectionSort(arr2);

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

let arr3 = [64, 34, 25, 12, 22, 11, 90];
console.log("Quick Sort:", quickSort(arr3));

// Activity 2: Searching Algorithms

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let arr4 = [5, 3, 6, 2, 8];
console.log("Linear Search:", linearSearch(arr4, 6)); // Output: 2
console.log("Linear Search:", linearSearch(arr4, 10)); // Output: -1

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Binary Search:", binarySearch(sortedArr, 5)); // Output: 4
console.log("Binary Search:", binarySearch(sortedArr, 10)); // Output: -1

// Activity 3: String Algorithms

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function countCharacterOccurrences(str) {
    let count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    console.log("Character Counts:", count);
}

countCharacterOccurrences("hello");

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestUniqueSubstring(str) {
    let map = new Map();
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end < str.length; end++) {
        if (map.has(str[end])) {
            start = Math.max(map.get(str[end]) + 1, start);
        }
        map.set(str[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    console.log("Longest Unique Substring Length:", maxLength);
}

longestUniqueSubstring("abcabcbb"); // Output: 3 (abc)
longestUniqueSubstring("bbbbb");    // Output: 1 (b)

// Activity 4: Array Algorithms

// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
    k = k % arr.length; 
    let rotated = arr.slice(-k).concat(arr.slice(0, -k));
    console.log("Rotated Array:", rotated);
}

let arr5 = [1, 2, 3, 4, 5];
rotateArray(arr5, 2); // Output: [4, 5, 1, 2, 3]

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i++]);
    }
    while (j < arr2.length) {
        merged.push(arr2[j++]);
    }

    console.log("Merged Array:", merged);
}

let arr6 = [1, 3, 5, 7];
let arr7 = [2, 4, 6, 8];
mergeSortedArrays(arr6, arr7); // Output: [1, 2, 3, 4, 5, 6, 7, 8]