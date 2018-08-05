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

 var schoolList = document.querySelector('.schoolNames').innerHTML;
 var template = Handlebars.compile(schoolList);

var institutions =[];
$(document).ready(function(){
$.ajax({
  url:"https://data.code4sa.org/resource/dxgm-6rn7.json",
  Type: "GET",
  data: {
      "$limit" : 50,
    }
}).then(function(data){

  data.map(function(results){
   institutions.push(results.institution);

  var schools = template({
    data : institutions
  });
  console.log(schools);
  document.getElementById("schools").innerHTML = schools;
})
});
});

$("#submit").click(function(){
  var firstname = document.getElementById("firstname").value;
  console.log(firstname);
  var surname = document.getElementById("surname").value;
  var idnumber = document.getElementById("id").value;
  var schoolName = document.getElementById("schools").value;
  console.log(schoolName);
  var occupation = document.getElementById("occupation").value;
  var cell_no = document.getElementById("contact").value;
  var school_need = document.getElementById("school_need").value;
  var other = document.getElementById("other").value;

  var information ={
    name:firstname,
    surname:surname,
    id_no:idnumber,
    schoolName:schoolName,
    cell_no: cell_no,
    other: other,
    school_need: school_need

  };
  console.log(information);

  $.ajax({
    url:"http://localhost:4000/api/school",
    Type:"POST"
  }).then(function(data){
    console.log(data);
  })

  alert("Thank you,Your information have been submitted.")
location.reload();
});
