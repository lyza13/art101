/* Lab 7: Functions
* Created: 10.25.2021
* Author: Lyza Stevens and Logan Flansaas
* License: Public Domain
*/
var userName = window.prompt("Hello! Please enter your name below.");
// sortUserName - function that takes user input and sorts the letters of their name
function sortUserName(name) {
  console.log("userName =", name);
  //split string to array
  var nameArray = name.split(" ").join('').split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort(compareWords);
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//copied from compareWords function in source: https://dev.to/jenshaw/sorting-out-javascript-sort-4kbl
function compareWords(a,b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  } else {
    return 1;
  }
}

//output
document.writeln("Thank you, ", userName, ". Here is your sorted name: ",
  sortUserName(userName), "</br>");
