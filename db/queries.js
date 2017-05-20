var promise = require('bluebird');
var options = {
  promiseLib: promise
};
var pgp = require('pg-promise')();
var connString = process.env.DATABASE_URL;
var db = pgp(connString);


////////////////////////////////////////////
////////////// GET ONE Tweed AT A TIME/////////////
//////////////////////////////////////////

getTweed = (req,res,next) => {
  var id = req.params.id;
  db.one('SELECT * FROM tweeds WHERE id = $1', id)
    .then(function(data){
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Your tweed was retrieved'
      });
    })
    .catch(function(err){
      return next(err);
    });
};

// GET ALL TWEEDS
getAllTweeds = (req,res,next)  => {

   db.any('SELECT * FROM tweeds')
  .then(function(data){
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Success getting all verbs'
    });
  })
  .catch(function(err){
    return next(err);
  });

};

// CREATE ONE TWEED

createTweed = (req,res,next) => {
  db.none("INSERT INTO tweeds(tweed)" +"values(${tweed})", req.body)
  .then(function(data){
    res.status(200)
    .json({
      status:'success',
      data: data,
      message: 'You created a tweed'
    });
  })
  .catch(function(err){
    return next(err);
  });
};

module.exports = {
  getTweed: getTweed,
  getAllTweeds: getAllTweeds,
  createTweed: createTweed,
}
