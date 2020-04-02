"use strict"; // to enable strict mode and modern JavaScript functionality
// appends a string to the DOM

document.querySelector("#content").innerHTML = "Hi Frontenders!"; // declaring teacher objects

var teacher1 = {
  name: 'Birgitte',
  initials: 'bki'
};
var teacher2 = {
  name: 'Rasmus',
  initials: 'race'
}; // logs the teacher objects to the console

console.log(teacher1);
console.log(teacher2);

var showAlert = function showAlert() {
  alert('Open your Developer Console!');
};