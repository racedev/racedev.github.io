/*
Fetches json data from the file persons.json
*/
let familyMembers = [{
  name: "Peter Madsen",
  age: 52,
  hairColor: "blonde",
  relation: "dad",
  img: "img/dad.jpg"
}, {
  name: "Ane Madsen",
  age: 51,
  hairColor: "brown",
  relation: "mom",
  img: "img/ane.jpg"
}, {
  name: "Rasmus Madsen",
  age: 29,
  hairColor: "blonde",
  relation: "brother",
  img: "img/rasmus.jpg"
}, {
  name: "Mie Madsen",
  age: 25,
  hairColor: "brown",
  relation: "sister",
  img: "img/mie.jpg"
}, {
  name: "Mads Madsen",
  age: 18,
  hairColor: "dark",
  relation: "brother",
  img: "img/mads.jpg"
}, {
  name: "Jens Madsen",
  age: 14,
  hairColor: "blonde",
  relation: "brother",
  img: "img/jenspeter.jpg"
}];

console.log(familyMembers);

/*
Appends json data to the DOM
*/
function appendPersons(persons) {
  let htmlTemplate = "";

  // TODO: implement loop appending the persons

  document.querySelector("#persons").innerHTML = htmlTemplate;
}

appendPersons(familyMembers);

/*
Search functionality: find objects by given searchValue
*/
function search(searchValue) {
  searchValue = searchValue.toLowerCase();
  console.log(searchValue);

  // TODO: implement search functionality
}

/*
Adds a new object to the array familyMembers 
*/
function add() {
  console.log("Add button clicked");

  let inputName = document.getElementById('inputName');

  // TODO: implement add functionality
}