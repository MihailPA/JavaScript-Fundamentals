//Problem 4. Maximal increasing sequence
//Write a script that finds the maximal increasing sequence in an array.

var arr = [3, 2, 3, 4, 2, 2, 4],
    max = 0,
    current = 0,
    result = [],
    seqIndex,
    len = arr.length,
    i;

for ( i = 0; i < len; i+= 1) {
    if (arr[i] > arr[i - 1]) {
        current += 1;
        if (current > max) {
            max = current;
            seqIndex = i;
        }
    }
    else {
        current = 1;
    }

}
result = arr.splice(seqIndex - max + 1, max).join(',');

console.log(result);