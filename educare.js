module.exports = function(educare) {

  var educareModel = educare.schools;

  const index = function(req, res, done) {
    educareModel.find({}, function(err, result) {
      if (err) {
        return done(err)
      }
      res.send(result)
    })
  }

  const add = function(req, res, done){

    var need = req.body;
    console.log(need);
    educareModel.create({
      id_no: need.id_no,
      school: need.school,
      occupation: need.occupation,
      cell_no: need.cell_no,
      other:need.other,
      school_need: need.school_need,
      sector:need.sector,
      phase_doe:need.phase_doe,
      magisterial_district: need.magiserial_district,
      town_city: need.town_city,
      postal_code: need.postal_code,
      urban_rural: need.urban_rural,
      telephone:need.telephone
    }, function(err, result){
      if(err){
        return done(err);
        }
        res.send(result)
        console.log("Back end Post",result)
      })
    }


  return{
    index,
    add,
  }


}
