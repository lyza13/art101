/* Lab 12: Conditionals
* Created: 11.15.2021
* @author Logan Flansaas and Lyza Stevens.
* @since  11.15.2021
* License: Public Domain.
*/

var buttonEl = document.getElementById("button");
var outputEl = document.getElementById("output");

function sortingHat(str){
  var length = str.length;
  var mod = length % 4;
  let house = ["Gryffindor","Ravenclaw","Slytherin","Hufflepuff"];
  return house[mod];
}

buttonEl.addEventListener("click", function(){
  var name = document.getElementById("input");
  outputEl.innerHTML = "The Sorting Hat has sorted you into " + sortingHat(name.value);
})
