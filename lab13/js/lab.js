/* Lab 13: Loops
* Created: 11.22.2021
* @author Logan Flansaas and Lyza Stevens.
* @since  11.22.2021
* License: Public Domain.
*/

let oneLongString = "";

for (let i = 1; i < 201; i++) {

  if ((i%3 == 0) && (i%5 == 0) && (i%7 == 0)){
    oneLongString += i + " FizzBuzzBoom!<br>";
  }
  else if ((i%3 == 0) && (i%5 == 0)){
    oneLongString += i + " FizzBuzz!<br>";
  }
  else if ((i%3 == 0) && (i%7 == 0)){
    oneLongString += i + " FizzBoom!<br>";
  }
  else if ((i%5 == 0) && (i%7 == 0)){
    oneLongString += i + " BuzzBoom!<br>";
  }
  else if ((i%3 == 0)){
    oneLongString += i + " Fizz!<br>";
  }
  else if ((i%5 == 0)){
    oneLongString += i + " Buzz!<br>";
  }
  else if ((i%7 == 0)){
    oneLongString += i + " Boom!<br>";
  }
  else{
    oneLongString += i + "<br>";
  }
}

$("#output").html(oneLongString);
