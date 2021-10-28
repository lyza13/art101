/* Lab 8: Anon Functions and Callbacks.
* Created: 10.27.2021
* @author Logan Flansaas and Lyza Stevens.
* @since  10.27.2021
* License: Public Domain.
*/
//declare variables
let nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let mapResults = "Original array: " + nums.join(', ') + "<br/><br/> Squared array: " + nums.map(square).join(', ') + "<br/><br/> Halved Array: " + nums.map(function(x) {
  var results = x/2;
  return results;
}).join(', ');
//returns the square of a given number
function square(x) {
  var results = x*x;
  return results;
}

//test output of square function
console.log(square(5));
console.log(square(9));
console.log(square(1));

//map of nums with square function
console.log(nums.map(square));

//map of nums with anonymous function
console.log(nums.map(function(x) {
  var results = x/2;
  return results;
}));

//output
var outputEl = document.getElementById("output");
outputEl.innerHTML = mapResults; // put your results here
