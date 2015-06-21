//Problem 7. Binary search
//Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.

var arr = [5, 6, 17, 65, 3, 15, 169, -7, 45, 98, 55, 12],
    sortedArr = [],
    reqElement = 45,
    len = arr.length,
    center = len / 2,
    currentNum = arr[center],
    index = 0,
    result;


console.log('The Array:');
console.log(arr.join(', '));

arr.sort(function (a, b) { return a - b }); //sorted array !

while (reqElement !== currentNum) {

    while (reqElement > currentNum) {
        center = (len + center) / 2 | 0;
        currentNum = arr[center];
    }
    while (reqElement < currentNum) {
        center = (len - center) / 2 | 0;
        currentNum = arr[center];
    }

}

index = center;
result = arr[index];

console.log('The Sorted Array:');
console.log(arr.join(', '));
console.log('The Result:');
console.log('arr[' + index + ']= ' + result);