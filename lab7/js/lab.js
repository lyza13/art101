/* Lab 10: JavaScript Events and Forms
* Created: 11.04.2021
* @author Logan Flansaas and Lyza Stevens.
* @since  11.04.2021
* License: Public Domain.
*/

//declare variables
// button variable
var buttonEl = document.getElementById("my-button");
// name text field variable
var inputEl = document.getElementById("user-name");
// html output div varaiable
var outputEl = document.getElementById("output");

// sorts name alphabetically
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
//used within sortUserName function to sort capital and lowercase letters together - copied from compareWords function in source: https://dev.to/jenshaw/sorting-out-javascript-sort-4kbl
function compareWords(a,b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  } else {
    return 1;
  }
}

//makes the submit button output the sorted input string under script output
buttonEl.addEventListener("click", function(){
  outputEl.innerHTML = sortUserName(inputEl.value);
});
