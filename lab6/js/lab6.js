/* Lab 6: Data Types and Variables.
* Created: 10.20.2021
* @author Logan Flansaas and Lyza Stevens.
* @since  10.19.2021
* License: Public Domain.
*/

// Define Variables
var myTransport = [" Hyundai Elantra", " rides from friends", " bus", " walk"];

var myMainRide = {
  make : "Hyundai",
  model : "Elantra",
  color : "Black",
  year : 2017,
  age : function() {
    return 2021 - age;
  }
}

// output
document.writeln("Getting around:" + myTransport + "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
