var users = [
    { _id: '1', username: 'bob', password: 'secret', email: 'bob@example.com' },
    { _id: '2', username: 'joe', password: 'birthday', email: 'joe@example.com' }
];


exports.populateDB = function(collection) {
  collection.insert(users, function(err, result) {});
};