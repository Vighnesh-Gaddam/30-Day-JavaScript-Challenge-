// Day 16: Recursion

// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function Fibonacci(num) {
    if (num === 0 || num === 1) {
        return num;
    } else {
        return Fibonacci(num - 1) + Fibonacci(num - 2);
    }
}
console.log(Fibonacci(7)); // Output: 13
console.log(Fibonacci(5)); // Output: 5

// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
let arr = [1, 2, 3, 4, 5];

function SumArr(arr, count = 0, sum = 0) {
    if (count === arr.length) {
        return sum;
    } else {
        sum += arr[count];
        count++;
        return SumArr(arr, count, sum);
    }
}
console.log(SumArr(arr)); // Output: 15

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
let arr2 = [1, 2, 3, 4, 5];

function MaxArr(arr, count = 0, max = arr[0]) {
    if (count === arr.length) {
        return max;
    } else {
        if (arr[count] > max) {
            max = arr[count];
        }
        count++;
        return MaxArr(arr, count, max);
    }
}
console.log(MaxArr(arr2)); // Output: 5
console.log(MaxArr([10, 20, 30, 40])); // Output: 40

// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function revstr(str, start = 0, end = str.length - 1) {
    if (start >= end) {
        return str;
    }

    let strArr = str.split('');
    [strArr[start], strArr[end]] = [strArr[end], strArr[start]];

    return revstr(strArr.join(''), start + 1, end - 1);
}

let name = "vicky";
console.log(revstr(name)); // Output: "ykciv"

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str, start = 0, end = str.length - 1) {
    if (start >= end) {
        return true;
    }
    if (str[start] !== str[end]) {
        return false;
    }
    return isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false

// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; // Target not found
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, end);
    }
}

let sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(sortedArr, 5)); // Output: 4
console.log(binarySearch(sortedArr, 10)); // Output: -1

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target, index = 0, count = 0) {
    if (index === arr.length) {
        return count;
    }
    if (arr[index] === target) {
        count++;
    }
    return countOccurrences(arr, target, index + 1, count);
}

let arr3 = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrences(arr3, 2)); // Output: 3
console.log(countOccurrences(arr3, 4)); // Output: 1

// Activity 5: Tree Traversal (Optional)

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

let root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6, new TreeNode(5), new TreeNode(7)));
inOrderTraversal(root); // Output: 1 2 3 4 5 6 7

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function treeDepth(node) {
    if (node === null) {
        return 0;
    }
    let leftDepth = treeDepth(node.left);
    let rightDepth = treeDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

console.log(treeDepth(root)); // Output: 3
console.log(treeDepth(new TreeNode(1))); // Output: 1
