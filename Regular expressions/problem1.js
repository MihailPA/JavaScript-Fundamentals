//Problem 1. Format with placeholders
//Write a function that formats a string. The function should have placeholders, as shown in the example
//Add the function to the String.prototype

if (!String.prototype.format) {
    String.prototype.format = function (options) {
        var pattern,
            result = this,
            prop;
        for (prop in options) {
            pattern = new RegExp('\#\{' + prop + '\}');
            result = result.replace(pattern, options[prop]);
        }
        return result;
    }

}
var options01 = { name: 'John' };
var options02 = { name: 'John', age: 13 };
var string01 = 'Hello, there! Are you #{name}?';
var string02 = 'My name is #{name} and I am #{age}-years-old';

function regular01() {
    console.log(string01.format(options01));
    console.log(string02.format(options02));
}