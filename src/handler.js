'use strict';

const server = require('./server');
const serverless = require('serverless-http')

module.exports.run = serverless(server);