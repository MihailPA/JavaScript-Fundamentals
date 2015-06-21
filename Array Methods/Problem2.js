// Problem 2. People of age

// Write a function that checks if an array of person contains only people of age (with age 18 or greater)
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
    new makePerson('Nikola', 'Nikolov', 33, false),
    new makePerson('Mariq', 'Marieva', 22, true),
    new makePerson('Tanq', 'Tancheva', 45, true),
    new makePerson('Georgi', 'Georgiev', 21, false),
    new makePerson('Stanislava', 'Stanislavova', 27, true),
    new makePerson('Petar', 'Petrov', 23, false),
    new makePerson('Tedi', 'Todorova', 15, true), // this person have age under 18
    new makePerson('Daniel', 'Danielov', 29, false)
];

var result;
result = people.every(function(item) {
    return item.age >= 18;
});

if (result) {
    console.log('Every person is at age 18 or greater!');
} else {
    console.log('Not every person is at age 18 or greater!');
}