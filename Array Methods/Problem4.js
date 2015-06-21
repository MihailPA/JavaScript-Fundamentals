// Problem 4. Average age of females

// Write a function that calculates the average age of all females, extracted from an array of persons
// Use Array#filter
// Use only array methods and no regular loops (for, while)

function makePerson(firstname, lastname, age, gender) {
    var person = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender
    };
    return person;
}

var people = [
    new makePerson('Todor', 'Todorov', 19, false),
    new makePerson('Biser', 'Biserov', 25, false),
    new makePerson('Nikola', 'Nikolov', 13, false), 
    new makePerson('Mariq', 'Marieva', 22, true),
    new makePerson('Tanq', 'Tancheva', 45, true),
    new makePerson('Georgi', 'Georgiev', 17, false), 
    new makePerson('Stanislava', 'Stanislavova', 27, true),
    new makePerson('Petar', 'Petrov', 23, false),
    new makePerson('Tedi', 'Todorova', 15, true), 
    new makePerson('Daniel', 'Danielov', 29, false)
];

var result;

result = people.filter(function(item) {
    return item.gender;
});

console.log('Females : \n');

result.forEach(function(item, i) {
    var gend,
        str;

    if (result[i].gender) {
        gend = 'female';
    } else {
        gend = 'male';
    }

    str = (+i + 1) + '. ' + result[i].firstname + ' ' + result[i].lastname +
        ' is ' + gend + ' and is ' + result[i].age + ' years old.';

    console.log(str);
});

var averageAge;

averageAge = result.reduce(function(s, item) {
    return s + item.age;
}, 0) / result.length;

console.log('\nAverage age of females is : ' + averageAge + ' years!\n');