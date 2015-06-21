/*Problem 4. Parse tags

You are given a text. Write a function that changes the text in all regions:

<upcase>text</upcase> to uppercase.
<lowcase>text</lowcase> to lowercase
<mixcase>text</mixcase> to mix casing(random)
Example: We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.

The expected result:
We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.

Note: Regions can be nested.*/

var inputArr = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.',
inputArrLen = inputArr.length,
numberLooper = 0,
finalOutPutString = '',
tempTaker = '',
itterator = 0,
innerItterator = 0,
mixCount = 0,
mixedItterator = 0;

for (itterator = 0 ; itterator < inputArrLen; itterator += 1) {

    if (inputArr[itterator] != '<') {
        finalOutPutString += inputArr[itterator];
    }
    else {
        if (inputArr[itterator + 1] == 'u') {

            var fromWhere = (inputArr.indexOf('>', itterator + 1)) + 1,
                toWhere = (inputArr.indexOf('<', fromWhere));
            for (innerItterator = fromWhere; innerItterator < toWhere ; innerItterator += 1) {
                tempTaker += inputArr[innerItterator];
            }
            tempTaker = tempTaker.toUpperCase();
            finalOutPutString += tempTaker;
            tempTaker = '';
            itterator = (inputArr.indexOf('>', toWhere));
        }
        else if (inputArr[itterator + 1] == 'l') {

            var fromWhere = (inputArr.indexOf('>', itterator + 1)) + 1,
                toWhere = (inputArr.indexOf('<', fromWhere));
            for (innerItterator = fromWhere; innerItterator < toWhere ; innerItterator += 1) {
                tempTaker += inputArr[innerItterator];
            }
            tempTaker = tempTaker.toLowerCase();
            finalOutPutString += tempTaker;
            tempTaker = '';
            itterator = (inputArr.indexOf('>', toWhere));
        }
        else if (inputArr[itterator + 1] == 'm') {

            var fromWhere = (inputArr.indexOf('>', itterator + 1)) + 1,
                toWhere = (inputArr.indexOf('<', fromWhere));

            for (innerItterator = fromWhere; innerItterator < toWhere ; innerItterator += 1) {
                tempTaker += inputArr[innerItterator];
            }

            var charTaker = '';
            for (mixedItterator = 0; mixedItterator < tempTaker.length; mixedItterator += 1) {
                if (mixCount % 2 == 0) {
                    charTaker += tempTaker[mixedItterator].toUpperCase();
                }
                else {
                    charTaker += tempTaker[mixedItterator].toLowerCase();
                }
                mixCount += 1;
            }            
            tempTaker = charTaker;
            finalOutPutString += tempTaker;
            tempTaker = '';
            itterator = (inputArr.indexOf('>', toWhere));
        }        
    }
}
console.log(finalOutPutString);
