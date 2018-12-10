module.exports = function(app) {

  var signup = require('./../controllers/signup-controllers.js');

  app.get('/signup', signup.new);

  app.post('/signup/create', signup.create);

  app.get('/signup/list', signup.list);
  
  app.get('/signup/:signupID', signup.single);

}
