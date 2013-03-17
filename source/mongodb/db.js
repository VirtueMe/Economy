var mongo = require('mongodb');
var utils = require('./utils');
var proto = require('./proto');

var Db         = mongo.Db,
    Connection = mongo.Connection,
    Server     = mongo.Server;

var host = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : 'localhost';
var port = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : Connection.DEFAULT_PORT;

exports = module.exports = createDb;

function createDb() {
	function db() { }

	utils.merge(db, proto);

  	db.db = new Db('budget2', new Server(host, port, {auto_reconnect: true}), {w:1});

  return db;
}