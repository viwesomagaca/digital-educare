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
    educareModel.create({
      name: need.name,
      surname: need.surname,
      id_no: need.id_no,
      schoolName: need.schoolName,
      occupation: need.occupation,
      cell_no: need.cell_no,
      address: need.address,
      school_need: need.school_need
    }, function(err, result){
      if(err){
        return done(err);

        }
        console.log(result)
        res.send(result)
      })
    }


  return{
    index,
    add,
  }


}
