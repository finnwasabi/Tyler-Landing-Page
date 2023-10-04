alert("Hi there my chocolate bar!");

// var myArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (var i = 0; i < myArray.length; i++) {
//   for (var j = 0; j < myArray[i].length; j++) {
//     console.log(myArray[i][j]);
//   }
// }

// for (var i = 100; i > 0; i--) {
//   console.log(i);
// }

// for (var i = 0; i <= 100; i += 5) {
//   console.log(i);
// }

var persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

function getFullName(person) {
  return person.firstname + " " + person.lastname;
}

console.log(persons.map(getFullName));
