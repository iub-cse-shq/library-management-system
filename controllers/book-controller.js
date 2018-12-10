var Book = require('./../models/Book.js');

module.exports.new = function(request, response) {
  response.render('form.ejs');
}

module.exports.create = function(request, response) {
  var new_Book = new Book(request.body);
  new_Book.save(function(err, data) {
    if (err)
      return response.status(400)
        .json({
          error: "Please add a title"
        });
    console.log(data);
    return response.status(200)
      .json({
        message: "Book successfully created"
      });

  })
  console.log(request.body);
}

module.exports.list = function(request, response) {
Book.find(function(err, data){
  if(err){
    response.status(400)
      .json({
        error: "Database query error"
      });
  }

  response.status(200).json({
    Books: data
  });
});

}
module.exports.single = function(request, response) {

  Book.findOne({_id:request.params.BookID},
    function(err, data){
      if(err){
        response.status(400)
          .json({
            error: "Database query error"
          });
      }else{
      response.render('Book.ejs', {
        Book: data
      })
    }
  });

}
