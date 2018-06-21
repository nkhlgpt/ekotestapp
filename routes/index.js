const generalFunctions = require('./generalFunctions');

module.exports = function(app) {

	app.post('/api/reverse',generalFunctions.reverseWord);

}