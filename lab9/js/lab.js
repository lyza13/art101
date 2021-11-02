/* Lab 9: JavasScript for the Web
* Created: 11.02.2021
* @author Logan Flansaas and Lyza Stevens.
* @since  11.02.2021
* License: Public Domain.
*/
//declare variables
var new1El = document.createElement("p");
var new2El = document.createElement("p2");
var outputEl = document.getElementById("output");

//output
new1El.innerHTML = "This is a new line of output.";
new2El.innerHTML = "Here is another line of output for the lab.";
outputEl.appendChild(new1El)
outputEl.insertBefore(new2El,new1El);
