var signup = require('./../models/signup.js');

module.exports.new = function(request, response) {
  response.render('signup.ejs');
}

module.exports.create = function(request, response) {
  var new_signup = new signup(request.body);
  new_signup.save(function(err, data) {
    if (err)
      return response.status(400)
        .json({
          error: "Please add a title"
        });
    console.log(data);
    return response.status(200)
      .json({
        message: "signup successfully created"
      });

  })
  console.log(request.body);
}

module.exports.list = function(request, response) {
signup.find(function(err, data){
  if(err){
    response.status(400)
      .json({
        error: "Database query error"
      });
  }

  response.status(200).json({
    signups: data
  });
});

}
module.exports.single = function(request, response) {

  signup.findOne({_id:request.params.signupID},
    function(err, data){
      if(err){
        response.status(400)
          .json({
            error: "Database query error"
          });
      }else{
      response.render('signup.ejs', {
        signup: data
      })
    }
  });

}
