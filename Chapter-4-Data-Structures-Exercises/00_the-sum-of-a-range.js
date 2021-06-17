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