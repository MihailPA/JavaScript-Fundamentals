//Problem 1. Reverse string
//Write a JavaScript function that reverses a string and returns it.

var array = 'sample',
    reversed = '',
    mover;

for (mover = array.length - 1; mover >= 0; mover -= 1) {
    reversed += array[mover];
}

console.log(reversed);