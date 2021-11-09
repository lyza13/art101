/* Lab 11: Libraries & jQuery
* Created: 11.08.2021
* @author Logan Flansaas and Lyza Stevens.
* @since  11.08.2021
* License: Public Domain.
*/

$("#challenge").append("<button id='challenge-button'>Click me!</button>");
$("#problems").append("<button id='problems-button'>Click me!</button>");
$("#results").append("<button id='results-button'>Click me!</button>");

$("#challenge-button").click(function(){
  $("#challenge").toggleClass("special");
})

$("#problems-button").click(function(){
  $("#problems").toggleClass("special");
})

$("#results-button").click(function(){
  $("#results").toggleClass("special");
})
