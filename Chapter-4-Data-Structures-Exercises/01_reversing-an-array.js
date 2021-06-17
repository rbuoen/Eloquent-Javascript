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
    return outArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]