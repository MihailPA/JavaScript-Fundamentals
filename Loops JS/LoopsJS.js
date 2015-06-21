//Problem 1. Numbers
//Write a script that prints all the numbers from 1 to N.

function Numbers() {

    alert('Prints all the numbers from 1 to N');

    var n = prompt('Please choose N = '),
        i,
        result = [];

    if (n < 1 || isNaN(n)) {
        result = 'Not correct value!';
    } else {
        for (i = 1; i < parseInt(n) + 1; i++) {
            result.push(i);
        }
        result = result.join(', ');
    }

    alert('result = ' + result);

}

// Problem 2. Numbers not divisible
//Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time

function NumbersNotDevisible() {

    alert('Prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time');

    var n = prompt('Please choose N = '),
        i,
        result = [];

    if (n < 1 || isNaN(n)) {
        result = 'Not correct value!';
    } else {
        for (i = 1; i < parseInt(n) + 1; i++) {
            if ((i % 3 !== 0) && (i % 7 !== 0)) {
                result.push(i);
            }
        }
        result = result.join(', ');
    }

    alert('result = ' + result);

}

//Problem 3. Min/Max of sequence
//Write a script that finds the max and min number from a sequence of numbers.

function MinMaxOfSequence() {

    alert('Min/Max from a sequence of numbers');

    var numbers = [],
        number,
        min = Number.MAX_VALUE,
        max = Number.MIN_VALUE;

    while (number = prompt('Enter number and press OK, after that enter another number (Press Enter to exit)')) {
        numbers.push(parseInt(number));
    }

    for (number in numbers) {
        if (numbers[number] >= max) {
            max = numbers[number];
        }

        if (numbers[number] <= min) {
            min = numbers[number];
        }
    }

    alert('Min = ' + min + ' , Max = ' + max);

}

//Problem 4. Lexicographically smallest
//Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.

function Lexicographically() {

    var prop,
        list = [];

    for (prop in document) {
        list.push(prop);
    }

    alert('lexicographically smallest element in document object is: ' + list.sort()[0] + '\nlexicographically largest element in document object is: ' + list.sort()[list.length - 1]);

    for (prop in window) {
        list.push(prop);
    }

    alert('lexicographically smallest element in window object is: ' + list.sort()[0] + '\nlexicographically largest element in window object is: ' + list.sort()[list.length - 1]);

    for (prop in navigator) {
        list.push(prop);
    }

    alert('lexicographically smallest element in navigator object is: ' + list.sort()[0] + '\nlexicographically largest element in navigator object is: ' + list.sort()[list.length - 1]);
}