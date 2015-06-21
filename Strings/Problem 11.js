//Problem 11. String format
//Write a function that formats a string using placeholders.
//The function should work with up to 30 placeholders and all types.

var str = stringFormat('Hello {0}! Now , this is {1}', 'Peter','Mitko');
console.log(str);

function stringFormat() {

    var regexForStringPlaceholder = /{[0-9]{1,}}/g,
        arrNew = [],
        indSt = '',
        digits = 0,
        currentVarToChange = '',
        switcher = 0,
        tempTaker = '',
        finalOutPut = '',
        currentNum = 0;

    for (var loops = 0; loops < arguments.length; loops += 1) {
        arrNew.push(arguments[loops]);
    }
    var theString = arrNew[0];

    for (var switcher = 0; switcher < theString.length; switcher+=1) {
        if (theString[switcher] == '{' && (!isNaN(theString[switcher + 1]))) {
            for (var p = switcher+1; p < theString.length; p += 1) {
                if (theString[p] == '}') {
                    currentNum = parseInt(tempTaker);
                    finalOutPut += arrNew[currentNum+1];
                    switcher = switcher + currentNum.toString().length + 2;
                    tempTaker = '';
                    break;
                }
                else {
                    tempTaker += theString[p];                   
                }
            }
        }
        else {
            finalOutPut += theString[switcher];
        }
    }
    return finalOutPut;
}