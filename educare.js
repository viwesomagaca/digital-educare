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


}
