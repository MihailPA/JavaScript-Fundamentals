//Problem 10. Find palindromes
//Write a program that extracts from a given text all palindromes, e.g. //"ABBA", "lamal", "exe".

function findPalindromes() {
    var testText = 'Each exe opens a different game,with a different level of WOW or LOL difficulty .',
        testerForCommas = 0,
        arrTest,
        loopZter = 0,
        loopZter2 = 0,
        arrayOfPolies = [],
        forwardWord = [],
        backwardWord = [],
        checkerLoop = 0,
        isTheSame = true;       

    while (testerForCommas != -1) {
        testerForCommas = testText.indexOf(',');

        if (testerForCommas == (-1)) {
            break;
        }
        else {
            testText = testText.replace(',', ' ');
        }
    }
    arrTest = testText.split(' ');  
    var thisTextLen = arrTest.length;
    for (loopZter = 0; loopZter < thisTextLen; loopZter += 1) {
        for (loopZter2 = 0; loopZter2 < arrTest[loopZter].length; loopZter2 += 1) {
            forwardWord.push(arrTest[loopZter][loopZter2]);
            backwardWord.unshift(arrTest[loopZter][loopZter2]);
        }
        for (checkerLoop = 0; checkerLoop < forwardWord.length; checkerLoop += 1) {
            if (forwardWord[checkerLoop] != backwardWord[checkerLoop]) {
                isTheSame = false;
                break;
            }
        }
        if (isTheSame && forwardWord.length > 1) {  //making sure not to take in account the 1 letter words/symbols
            arrayOfPolies.push(arrTest[loopZter]);
        }
        else {
            isTheSame = true;
        }
        forwardWord.length = 0;
        backwardWord.length = 0;
    }
    console.log(arrayOfPolies);
}
