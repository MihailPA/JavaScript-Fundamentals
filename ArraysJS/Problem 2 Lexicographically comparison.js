//Problem 2. Lexicographically comparison
//Write a script that compares two char arrays lexicographically (letter by letter).

var arr1 = ['z', 'd', 'r', 'a', 'v', 'e', 'i'],
    arr2 = ['z', 'd', 'r', 'a', 's', 't', 'i'],
    arr1len = arr1.length,
    arr2len = arr2.length,
    i;

if (arr1len > arr2len) {
    console.log('The first array is Longer!')
} else if (arr1len < arr2len) {
    console.log('The second array is Longer!')
} else {
    for (i = 0; i < Math.min(arr1len, arr2len) ; i += 1) {
        if (arr1[i] < arr2[i]) {
            console.log(arr1[i] + ' < ' + arr2[i]);
        } else if (arr1[i] > arr2[i]) {
            console.log(arr1[i] + ' > ' + arr2[i]);
        } else {
            console.log(arr1[i] + ' = ' + arr2[i]);
        }
    }
}