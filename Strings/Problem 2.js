//Problem 2. Correct brackets
//Write a JavaScript function to check if in a given expression the brackets //are put correctly.
//Example of correct expression: ((a+b)/5-d). Example of incorrect //expression: )(a+b)).

var bracketWord = '(5%2)*(5/(6*4.2)/2)',
    looperForSecondPr,
    firstIndexOFOpening,
    firstIndexOFClosing,
    countOfOpenings = 0,
    countOfClosings = 0;

firstIndexOFOpening = bracketWord.indexOf('(');
firstIndexOFClosing = bracketWord.indexOf(')');


if (firstIndexOFOpening > firstIndexOFClosing) {
    console.log('INCORRECT');
}
else {
    for (looperForSecondPr = 0; looperForSecondPr < bracketWord.length; looperForSecondPr += 1) {
        if (bracketWord[looperForSecondPr] == '(') {
            countOfOpenings += 1;
        }
        if (bracketWord[looperForSecondPr] == ')') {
            countOfClosings += 1;
        }
    }
    if (countOfOpenings != countOfClosings) {
        console.log('INCORRECT');
    }
    else {
        console.log('CORRECT');
    }
}