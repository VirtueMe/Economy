var users = require('./users');

var db = module.exports = {};

db.open = function () {
	this.db.open(function(err, db) {
    if(!err) {
      console.log("Connected to 'users' database");
    
      db.collection('users', function(err, collection) {
        collection.count(function(err, count) {
          if (count === 0) {
            console.log('populating collection');
            
            users.populateDB(collection);
          }
        });
      });
    }
	});
};

db.finder = function(query, fn) {
  this.db.collection('users', function(err, collection) {
    console.log('searching');
    if (err) {
      console.log('db error');
      return fn(new Error('db error'));
    }
    else {

      collection.findOne(query, function(err, user) {
        if (err) {
          console.log('user not found');
          return fn(new Error('db collection error users'));
        }
        else {
          console.log('user found again');
          if (user) {
            console.log('password:' + user.password);
          }
          return fn(null, user);
        }
      });
    }
  });
};

db.findById = function (id, fn) {
  this.finder({ _id: id }, fn);
};

db.findByUsername = function (username, fn) {
  return this.finder({ username: username }, fn);
};