/* Lab 16: JSON and APIs
* Created: 12.2.2021
* @author Logan Flansaas and Lyza Stevens.
* @since  12.2.2021
* License: Public Domain.
*/

var myUrl = "https://xkcd.com/info.0.json"

let comicObj = {
month: "",
num: 0,
link: "",
year: "",
news: "",
safe_title: "",
transcript: "",
alt: "",
img: "",
title: "",
day: ""
};

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
    comicObj.month = data.month;
    comicObj.num = data.num;
    comicObj.link = data.link;
    comicObj.year = data.year;
    comicObj.news = data.news;
    comicObj.safe_title = data.safe_title;
    comicObj.transcript = data.transcript;
    comicObj.alt = data.alt;
    comicObj.img = data.img;
    comicObj.title = data.title;
    comicObj.day = data.day;
    $("div#output h2").html(comicObj.title);
    $("#output").append('<img id="comic" src="" title="" alt=""/>');
    $("#comic").attr("src", comicObj.img);
    $("#comic").attr("title", comicObj.title);
    $("#comic").attr("alt", comicObj.alt);
    //$("#output").html(comicObj.title);
  //  $("#comic_img").attr('src', comicObj.img);
})
// If the request fails
.fail(function(request,error) {
    console.log(request, error);
})
}

$("#activate").click(callAjax);
