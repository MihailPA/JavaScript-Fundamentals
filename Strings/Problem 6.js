//Problem 6. Extract text from HTML
//Write a function that extracts the content of a html page given as text.
//The function should return anything that is in a tag, without the tags.

var htmlText = [
    '<html>',
    '<head>',
    '<title>Sample site</title>',
    '</head>',
    '<body>',
    '<div>text',
    '<div>more text</div>',
    'and more...',
    '</div>',
    'in body',
    '</body>',
    '</html>'
];

function extractInfoFromHTML() {
    var combiner = '',
   looper = 0,
   looperInner = 0,
   htmlLen = htmlText.length,
   indexOfOpening = 0,
   indextOfClosing = 0,
   tempTaker='';


    for (looper = 0; looper < htmlLen; looper += 1) {
        combiner += htmlText[looper];
    }
    for (looper = 0; looper < combiner.length; looper += 1) {
        if (combiner[looper] == '>') {
            //TODO
            indextOfClosing = looper;
            indexOfOpening = combiner.indexOf('<', indextOfClosing);
            if (indexOfOpening - indextOfClosing > 1.000001) {
                for (looperInner = indextOfClosing + 1; looperInner < indexOfOpening; looperInner += 1) {
                    //TODO
                    tempTaker += combiner[looperInner];
                }
            }
        }
    }
    console.log(tempTaker);   
}
extractInfoFromHTML();