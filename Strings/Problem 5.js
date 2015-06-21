//Problem 5. nbsp
//Write a function that replaces non breaking white-spaces in a text with &nbsp;

var whiteSpaceSentence = 'Why do we need this excersice? Please tell me...';

function implementWhiteSpace(whiteSpaceSentence) {
        hasStillSpaces = true,
        itterationVal = 0;
    
    while (hasStillSpaces == true) {
        for (itterationVal = 0; itterationVal < whiteSpaceSentence.length; itterationVal += 1) {
            if (whiteSpaceSentence[itterationVal] == ' ') {
                break;
            }
            hasStillSpaces = false;
        }
        if (hasStillSpaces == true) {
            whiteSpaceSentence.replace(' ', '&nbsp');
        }
        else {
            break;
        }
    }
    console.log(whiteSpaceSentence);     //If all is well you should see no difference in the end result ,compared to the input :)
}
implementWhiteSpace(whiteSpaceSentence);