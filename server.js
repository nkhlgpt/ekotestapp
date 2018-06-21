// 'use strict';

const express = require('express');
const proc = require('proc-utils');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.set('port', process.env.PORT || 3000);

require('./routes')(app);

const server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port' + server.address().port);
});

// initialize proc
proc.init(app);