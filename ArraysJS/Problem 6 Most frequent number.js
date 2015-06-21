//Problem 6. Most frequent number
//Write a script that finds the most frequent number in an array.

var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
    currentSeq = 0,
    maxSeq = 0,
    arrValue = 0,
    len,
    i,
    j;

for (i = 0, len = arr.length; i < len - 1; i += 1) {

    for (j = 0; j <= len - 1; j += 1) {

        if (arr[i] === arr[j]) {
            currentSeq += 1;

            if (currentSeq > maxSeq) {
                maxSeq = currentSeq;
                arrValue = arr[i];
            }
        }
    }
    currentSeq = 0;
}

console.log(arrValue + '(' + maxSeq + ' times)');