// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
console.log("im here");

$(document).ready(function(){
var schoolList = document.querySelector('.schoolNames').innerHTML;
var template = Handlebars.compile(schoolList);

var institutions =[];
$.ajax({
  url:"http://localhost:4000/api/school",
  Type: "GET",
}).then(function(data){
console.log(data);

  var schools = template({
    data : data
  });
  console.log(schools);
  document.getElementById("schools").innerHTML = schools;
})
});
