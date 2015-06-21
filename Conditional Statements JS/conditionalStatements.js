// Problem 1 Exchange if grater

function exchange() {
    var a = document.getElementById("problem1a").value,
        b = document.getElementById("problem1b").value,
        temp;
    if (a > b) {
        var temp = a,
            a = b,
            b = temp;
    }
    document.getElementById("console").value = a + ' ' + b;
}

// Problem 2 Multiplication sign

function multiplicationSign() {
    var a = document.getElementById("problem2a").value,
        b = document.getElementById("problem2b").value,
        c = document.getElementById("problem2c").value,
        result;
    if (a == 0 || b == 0 || c == 0) {
        result = 0;
    }
    if (a, b, c > 0) {
        result = '+';
    }
    if (a, b, c < 0) {
        result = '-';
    }
    if (a > 0 && b > 0 && c < 0) {
        result = '-';
    }
    if (a > 0 && b < 0 && c > 0) {
        result = '-';
    }
    if (a < 0 && b > 0 && c > 0) {
        result = '-';
    }
    if (a < 0 && b < 0 && c > 0) {
        result = '+';
    }
    if (a < 0 && b > 0 && c < 0) {
        result = '+';
    }
    if (a > 0 && b < 0 && c < 0) {
        result = '+';
    }
    document.getElementById('console').value = result;
}

// Problem 3 The biggest of Three

function biggest() {
    var a = document.getElementById("prob3a").value,
        b = document.getElementById("prob3b").value,
        c = document.getElementById("prob3c").value,
        result;
		
    if (a >= b) {
        if (a > c) {
            result = a;
        } 
		else {
            result = c;
        }
    }
    if (b >= a) {
        if (b > c) {
            result = b;
        } 
		else {
            result = c;
        }
    }
    if (c >= b) {
        if (c > a) {
            result = c;
        } 
		else {
            result = a;
        }
    }
    if (c >= a) {
        if (c > b) {
            result = c;
        } 
		else {
            result = b;
        }
    }
    document.getElementById("console").value = result;
}

// Problem 4 Sort 3 numbers

function sortNum() {
    var a = document.getElementById("problem4a").value,
        b = document.getElementById("problem4b").value,
        c = document.getElementById("problem4c").value,
        result = [];
    if (a >= b) {
        if (a >= c) {
            if (b >= c) {
                result.push(a, b, c)
            }
            else {
                result.push(a, c, b)
            }
        }
    }
    if (b >= c) {
        if (b >= a) {
            if (c >= a) {
                result.push(b, c, a)
            }
            else {
                result.push(b, a, c)
            }
        }
    }
    if (c >= a) {
        if (c >= b) {
            if (a >= b) {
                result.push(c, a, b)
            }
            else {
                result.push(c, b, a)
            }
        }
    }
    document.getElementById("console").value = result;
}

// Problem 5 Digit as word

function digitWord() {
    var a = document.getElementById("problem5a").value,
        result = [];
        
    
    switch (a) {
        case '0': result = 'Zero'; break;
        case '1': result = 'One'; break;
        case '2': result = 'Two'; break;
        case '3': result = 'Three'; break;
        case '4': result = 'Four'; break;
        case '5': result = 'Five'; break;
        case '6': result = 'Six'; break;
        case '7': result = 'Seven'; break;
        case '8': result = 'Eight'; break;
        case '9': result = 'Nine'; break;
        default: result = 'Not a Digit';
    }
    document.getElementById('console').value = result;
}

// Problem 6 Quadratic equation

function quadEquation() {
    var a = document.getElementById('problem6a').value,
        b = document.getElementById('problem6b').value,
        c = document.getElementById('problem6c').value,
        result;

    var D = b * b - 4 * a * c,
        onlyRoot = -b / (2 * a),
        root1 = (-b - Math.sqrt(D)) / (2 * a),
        root2 = (-b + Math.sqrt(D)) / (2 * a);

    if (D < a) {
        result = 'Equation has no real roots';
    }
    else if (D === 0) {
        result = 'x = ' + onlyRoot;
    }
    else if (D > 0) {
        result = 'x₁=' + root1 + ' ' + 'x₂=' + root2;
    }
    document.getElementById('console').value = result;
}

// Problem 7 The biggest of five numbers

function biggest() {
    var a = document.getElementById("problem7a").value,
        b = document.getElementById("problem7b").value,
        c = document.getElementById("problem7c").value,
        d = document.getElementById("problem7d").value,
        e = document.getElementById("problem7e").value,
        greatest;

    if (a > b && a > c && a > d && a > e) {
        greatest = a;
    }
    if (b > a && b > c && b > d && b > e) {
        greatest = b;
    }
    if (c > a && c > b && c > d && c > e) {
        greatest = c;
    }
    if (d > a && d > b && d > c && d > e) {
        greatest = d;
    }
    if (e > a && e > b && e > c && e > d) {
        greatest = e;
    }
    document.getElementById("console").value = greatest;
}

// Problem 8 Number as words

function numWord() {
    var number = document.getElementById("problem8a").value,
        hundreds = (Math.floor(number / 100)),
        tenths = ((Math.floor(number / 10)) % 10),
        ones = (number % 10),
        teens = (ones + 10),
        result;

    switch (hundreds) {
        case 1: hundreds = 'one hundred '; break;
        case 2: hundreds = 'two hundred '; break;
        case 3: hundreds = 'three hundred '; break;
        case 4: hundreds = 'four hundred '; break;
        case 5: hundreds = 'five hundred '; break;
        case 6: hundreds = 'six hundred '; break;
        case 7: hundreds = 'seven hundred '; break;
        case 8: hundreds = 'eight hundred '; break;
        case 9: hundreds = 'nine hundred '; break;
    }

    switch (tenths) {
        case 0: tenths = ''; break;
        case 1: tenths = 'ten'; break;
        case 2: tenths = 'twenty '; break;
        case 3: tenths = 'thirty '; break;
        case 4: tenths = 'fourty '; break;
        case 5: tenths = 'fifty '; break;
        case 6: tenths = 'sixty '; break;
        case 7: tenths = 'seventy '; break;
        case 8: tenths = 'eighty '; break;
        case 9: tenths = 'ninety '; break;
    }

    switch (teens) {
        case 11: teens = 'eleven'; break;
        case 12: teens = 'twelve'; break;
        case 13: teens = 'thirteen'; break;
        case 14: teens = 'fourteen'; break;
        case 15: teens = 'fifteen'; break;
        case 16: teens = 'sixteen'; break;
        case 17: teens = 'seventeen'; break;
        case 18: teens = 'eighteen'; break;
        case 19: teens = 'nineteen'; break;
    }

    switch (ones) {
        case 0: ones = ''; break;
        case 1: ones = 'one'; break;
        case 2: ones = 'two'; break;
        case 3: ones = 'three'; break;
        case 4: ones = 'four'; break;
        case 5: ones = 'five'; break;
        case 6: ones = 'six'; break;
        case 7: ones = 'seven'; break;
        case 8: ones = 'eight'; break;
        case 9: ones = 'nine'; break;
        case 10: ones = 'ten'; break;

    }

    if (number == 0) {
        result = 'zero';
    }
    if (number <= 9 && number > 0) {
        result = ones;
    }
    if (number > 10 && number <= 19) {
        result = teens;
    }
    if (number == 10) {
        result = tenths;
    }
    if (number >= 20 && number <= 99) {
        result = tenths + ones;
    }
    if (number >= 100 && number <= 999) {
        result = hundreds + 'and ' + tenths + ones;
    }
    if (number < 0 || number > 999) {
        console.log('Invalid input ... 0 <= number <= 999');
    }
    if (number == 0) {
        result = 'zero';
    }
    if (number <= 9 && number > 0) {
        result = ones;
    }
    if (number > 10 && number <= 19) {
        result = teens;
    }
    if (number == 10) {
        result = tenths;
    }
    if (number >= 20 && number <= 99) {
        result = tenths + ones;
    }
    if (number >= 100 && number <= 110) {
        result = hundreds + 'and ' + tenths + ones;
    }
    if (number >= 111 && number <= 119) {
        result = hundreds + 'and ' + teens;
    }
    if (number >= 120 && number <= 210) {
        result = hundreds + 'and ' + tenths + ones;
    }
    if (number >= 211 && number <= 219) {
        result = hundreds + 'and ' + teens;
    }
    if (number >= 220 && number <= 310) {
        result = hundreds + 'and ' + tenths + ones;
    }
    if (number >= 311 && number <= 319) {
        result = hundreds + 'and ' + teens;
    }
    if (number >= 320 && number <= 410) {
        result = hundreds + 'and ' + tenths + ones;
    }
    if (number >= 411 && number <= 419) {
        result = hundreds + 'and ' + teens;
    }
    if (number >= 420 && number <= 510) {
        result = hundreds + 'and ' + tenths + ones;
    }
    if (number >= 511 && number <= 519) {
        result = hundreds + 'and ' + teens;
    }
    if (number >= 520 && number <= 610) {
        result = hundreds + 'and ' + tenths + ones;
    }
    if (number >= 611 && number <= 619) {
        result = hundreds + 'and ' + teens;
    }
    if (number >= 620 && number <= 710) {
        result = hundreds + 'and ' + tenths + ones;
    }
    if (number >= 711 && number <= 719) {
        result = hundreds + 'and ' + teens;
    }
    if (number >= 720 && number <= 810) {
        result = hundreds + 'and ' + tenths + ones;
    }
    if (number >= 811 && number <= 819) {
        result = hundreds + 'and ' + teens;
    }
    if (number >= 820 && number <= 910) {
        result = hundreds + 'and ' + tenths + ones;
    }
    if (number >= 911 && number <= 919) {
        result = hundreds + 'and ' + teens;
    }
    if (number >= 920 && number <= 999) {
        result = hundreds + 'and ' + tenths + ones;
    }
    document.getElementById("console").value = result;
}