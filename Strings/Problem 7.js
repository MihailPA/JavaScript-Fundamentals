//Problem 7. Parse URL
//Write a script that parses an URL address given in the format: //[protocol]://[server]/[resource] and extracts from it the [protocol], //[server] and [resource] elements.
//Return the elements in a JSON object.

var email = 'http://telerikacademy.com/Courses/Courses/Details/239',
    JSON = {},
    arounds;

JSON.protocol = '';
JSON.server = '';
JSON.resource = '';

function splitEmail() {
    var protocolEnder = email.indexOf('//');
    JSON.protocol = email.slice(0, protocolEnder);
    var serverAndRes = email.slice(protocolEnder + 2),
        indexOfSplitter = serverAndRes.indexOf('/');

    for (var i = 0; i < indexOfSplitter; i += 1) {
        JSON.server += serverAndRes[i];
    }
    JSON.resource = serverAndRes.slice(indexOfSplitter);

    console.log(JSON);
}

splitEmail();