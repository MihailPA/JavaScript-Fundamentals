//Problem 12. Generate list
//Write a function that creates a HTML <ul> using a template for every HTML //<li>.
//The source of the list should be an array of elements.
//Replace all placeholders marked with –{…}– with the value of the //corresponding property of the object.

function makeNewPersonIfValid() {
    var name = document.getElementById('nameEntry').value.trim(),
        age = document.getElementById('ageEntry').value.trim(),
        arrayOfpeople = [];    
    if (name.length > 2 && isNaN(age) == false && ((age*1)%1 == 0)) {
        var person = {},        
        liNode = document.createElement('li'),
        strongNode = document.createElement('strong'),
        spanNode = document.createElement('span'),
        ulContainer = document.getElementById('ul');

        person.name = name;
        person.age = parseInt(age);
        arrayOfpeople.push(person);
        strongNode.appendChild(document.createTextNode(person.name));
        spanNode.appendChild(document.createTextNode(person.age));
        liNode.appendChild(strongNode);
        liNode.appendChild(spanNode);
        ulContainer.appendChild(liNode);
    }
    else {
        alert('invalid data!');
    }    
}