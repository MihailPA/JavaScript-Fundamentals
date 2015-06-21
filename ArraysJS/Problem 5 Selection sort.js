//Problem 5. Selection sort
//Sorting an array means to arrange its elements in increasing order.
//Write a script to sort an array.
//Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.

var arr = [5, 2, 3, 1, 4, 8, 7, 9, 6, 10],
    result = [],
    n = arr.length,
    iMin,
    temp,
    j,
    i;

for (j = 0; j < n - 1; j += 1) {

    iMin = j;
    for (i = j + 1; i < n; i += 1) {

        if (arr[i] < arr[iMin]) {
            iMin = i;
        }
    }
    if (iMin != j) {
        temp = arr[j];
        arr[j] = arr[iMin];
        arr[iMin] = temp;
    }
}

for (i = 0; i < n; i += 1) {
    result[i] = arr[i];
}

result = result.join(', ');

console.log(result);