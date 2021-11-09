/* Lab 11: Libraries & jQuery
* Created: 11.08.2021
* @author Logan Flansaas and Lyza Stevens.
* @since  11.08.2021
* License: Public Domain.
*/

//Add a button to the challenge div
$("#challenge").append("<button id='challenge-button'>Click me!</button>");
//Add a button to the problems div
$("#problems").append("<button id='problems-button'>Click me!</button>");
//Add a button to the results div
$("#results").append("<button id='results-button'>Click me!</button>");
//Toggles the css styling of the challenge div
$("#challenge-button").click(function(){
  $("#challenge").toggleClass("special");
})
//Toggles the css styling of the problems div
$("#problems-button").click(function(){
  $("#problems").toggleClass("special");
})
//Toggles the css styling of the results div
$("#results-button").click(function(){
  $("#results").toggleClass("special");
})
