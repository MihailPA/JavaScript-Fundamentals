//Problem 3. Maximal sequence
//Write a script that finds the maximal sequence of equal elements in an array.

var arr = [2, 2, 2, 2, 3, 3, 1, 1, 3, 1],
    result = [],
    max = 0,
    current = 0,
    maxIndex,
    len = arr.length,
    i;

for (i = 0; i < len; i+=1) {

    if (arr[i] == arr[i - 1]) {
        current += 1;
        if (current > max) {
            max = current;
            maxIndex = i;
        }
    }
    else {
        current = 1;
    }
}

for (i = 0; i < max; i += 1) {
    result[i] = arr[maxIndex];
}

console.log(result.join(','));