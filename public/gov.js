var schoolList = document.querySelector('.schoolNames').innerHTML;
var template = Handlebars.compile(schoolList);

var institutions =[];
$(document).ready(function(){
$.ajax({
  url:"http://localhost:4000/api/school",
  Type: "GET",
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
