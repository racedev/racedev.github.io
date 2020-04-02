/*
Fetches json data from the file persons.json
*/
fetch('json/persons.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    // TODO: call append functionality
  });

/*
Appends json data to the DOM
*/
function appendPersons(persons) {
  // TODO: loop trough persons and append to them DOM
}