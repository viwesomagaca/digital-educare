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
  console.log(data);

  data.map(function(results){

   institutions.push(results.institution);


  var schools = template({
    data : institutions
  });

  document.getElementById("schools").innerHTML = schools;
})
console.log(institutions);
});
});



// document.querySelector('#schools').addEventListener('change', () => {
//   let schoolsFilter = document.querySelector('#schools').value;
//   var found = {};
// console.log("chosen school", schoolsFilter);
//   $.ajax({
//     url:"https://data.code4sa.org/resource/dxgm-6rn7.json",
//     Type: "GET",
//     data: {
//         "$limit" : 50,
//       }
//   }).then(function(data){
//     console.log('data', data);
//     return data.find(current => {
//       return current.institution === schoolsFilter;
//     })
//   }).then(function(results){
//     console.log("FOUND", results);
//     institute = {
//     institution:results.institution,
//     sector:results.sector,
//     phase_DoE:results.phase_doe,
//     magistratial_district:results.magisterial_district,
//     town:results.town_city,
//     postal_code: results.postal_code,
//     Urban_rural: results.Urban_rural,
//     telephone : results.telephone
//   };
//   console.log("institute",institute);
//   })
// })



$("#submit").click(async function(){
  var idnumber = document.getElementById("id").value;
  var schoolName = document.getElementById("schools").value;
  console.log(schoolName);
  var occupation = document.getElementById("occupation").value;
  var cell_no = document.getElementById("contact").value;
  var school_need = document.getElementById("school_need").value;
  var other = document.getElementById("other").value;

  let schoolsFilter = document.querySelector('#schools').value;
  var found = {};
  var institute = {};
  console.log("chosen school", schoolsFilter);
  let inst = await $.ajax({
    url:"https://data.code4sa.org/resource/dxgm-6rn7.json",
    Type: "GET",
    data: {
        "$limit" : 50,
      }
  })

  found = inst.find(current => {
    return current.institution == schoolsFilter;
  })

  console.log("FOUND", found);
  institute = {
    institution:found.institution,
    sector:found.sector,
    phase_doe:found.phase_doe,
    magisteral_district:found.magisterial_district,
    town_city:found.town_city,
    postal_code: found.postal_code,
    urban_rural: found.Urban_rural,
    telephone : found.telephone
  };
  console.log("institute",institute);

  var information ={
    id_no:idnumber,
    school:institute,
    occupation:occupation,
    cell_no: cell_no,
    other: other,
    school_need: school_need


  };


  console.log("++++++",information);

  $.ajax({
    url:"http://localhost:4000/api/school",
    Type:"POST",
    data: information,
    dataType: 'json',
  }).then(function(res){
    console.log("**********",res);
  });


  alert("Thank you,Your information have been submitted.")

});
