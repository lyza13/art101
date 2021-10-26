/* Lab 7: Functions
* Created: 10.25.2021
* Author: Lyza Stevens and Logan Flansaas
* License: Public Domain
*/

// sortUserName - function that takes user input and sorts the letters of their name
function sortUserName() {
  var userName = window.prompt("Hello! Please enter your name below.");
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//output
document.writeln("Here is your sorted name: ",
  sortUserName(), "</br>");
