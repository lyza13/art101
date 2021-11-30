/* Lab 15: AJAX
* Created: 11.29.2021
* @author Logan Flansaas and Lyza Stevens.
* @since  11.29.2021
* License: Public Domain.
*/
var myUrl = "https://api.kanye.rest"

function callAjax() {
// Using the core $.ajax() method
$.ajax({
    // API endpoint
    url: myUrl,
    // POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json"
})
// If the request succeeds
// data is passed back
.done(function(data) {
    console.log("Success:", data);
    $("#output").html(data.quote);
})
// If the request fails
.fail(function(request,error) {
    console.log(request, error);
})
}
// calls AJAX on button click 
$("#activate").click(callAjax);
