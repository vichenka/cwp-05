const log = require('./log').log;
const file = require('fs').createWriteStream('log.txt');
let articles = require('../cwp05/articles.json');

module.exports.readAll = function readAll(req, res, payload, cb) {
	log(file, '/api/articles/readall', payload);
    cb(null, articles);
}