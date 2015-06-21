//Problem 9. Extract e-mails

//Write a function for extracting all email addresses from given text.
//All sub-strings that match the format @… should be recognized as emails.
//Return the emails as array of strings.

function extractEmails() {
    var regex = /[A-z0-9]{2,}\.?[A-z0-9]{2,}@[A-z0-9]{2,}\.[A-z]{2,}/g,    //This is what I`ve come up so far as a relatively good validation(in most cases) :)
    text = 'How many people like 9GAG.com or have sent e-mails to telerik.academy@jobs.com and dvt.readMoron@wtfsite.com ?',
    arr;

    arr = text.match(regex);
    console.log(arr);
}
extractEmails();