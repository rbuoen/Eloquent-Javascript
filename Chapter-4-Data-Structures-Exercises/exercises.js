// June 12, 2021

// The sum of a Range

function range(start, end, step = 1) {
    myArray = [];
    for (let i = start; (start < end) ? i <= end : i >= end; (start < end) ? i += step : i -= step * -1) {
        myArray.push(i);
    }
    return myArray;
}

function sum(range) {
    let sum = 0;
    for (num of range) {
        sum += num;
    }
    return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55