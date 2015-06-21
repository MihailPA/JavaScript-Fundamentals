//Problem 8. Replace tags
//Write a JavaScript function that replaces in a HTML document given as //string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].

function replceStuff() {
    var text = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>',
    openingA = '[URL=',
    closingA = ']',
    closingSecondAPart = '[/URL]',
    textLen = text.length,
    inLoop = 0,
    finalOut = text;

    while (true) {
        if ((finalOut.indexOf('<a href="') != -1) && (finalOut.indexOf('</a>') != -1)) {
            var openingA1 = finalOut.indexOf('<a href="');
            if (openingA1 != -1) {
                var close = finalOut.indexOf('">', openingA1);
                finalOut = finalOut.slice(0, close) + closingA + finalOut.slice(close + 2);
                finalOut = finalOut.replace('<a href="', openingA);
            }
            var closingA1 = finalOut.indexOf('</a>');
            if (closingA1 != -1) {
                finalOut = finalOut.replace('</a>', closingSecondAPart);
            }
        }
        else {
            break;
        }
    }
    console.log(finalOut);
}