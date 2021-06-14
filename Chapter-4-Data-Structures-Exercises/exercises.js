// June 12, 2021

// The sum of a Range

// returns and array containing a range of numbers
function range(start, end, step = start < end ? 1 : -1) {
    array = [];
    for (let i = start; start < end ? i <= end : i >= end; i += step) array.push(i);
    return array;
}

// returns the sum of an array of numbers
function sum(array) {
    let sum = 0;
    for (num of array) sum += num;
    return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// Reversing an Array

// function reverseArray(array) {
//     let outArray = [];
//     for (item of array) { 
//         outArray.unshift(item) 
//     }
//     return outArray;
// }

function reverseArray(array) {
    const outArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        outArray.push(array[i]);
    }
    return ourArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]