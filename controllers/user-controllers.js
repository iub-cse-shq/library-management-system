var User = require('./../models/User.js');

module.exports.new = function(request, response) {
  response.render('signup.ejs');
}

module.exports.create = function(request, response) {
  var new_User = new User(request.body);
  new_User.save(function(err, data) {
    if (err)
      return response.status(400)
        .json({
          error: "Please add a title"
        });
    console.log(data);
    return response.status(200)
      .json({
        message: "User successfully created"
      });

  })
  console.log(request.body);
}

module.exports.list = function(request, response) {
User.find(function(err, data){
  if(err){
    response.status(400)
      .json({
        error: "Database query error"
      });
  }

  response.status(200).json({
    Users: data
  });
});

}
module.exports.single = function(request, response) {

  User.findOne({_id:request.params.UserID},
    function(err, data){
      if(err){
        response.status(400)
          .json({
            error: "Database query error"
          });
      }else{
      response.render('User.ejs', {
        User: data
      })
    }
  });

}
