'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    let pjson = require('./package.json');
    return 'Welcome to fishroom ' + pjson.version + '!';
  },
});

server.route({
  method: 'GET',
  path: '/port/{port}/on',
  handler: (request, h) => {
    return turnPortOn(encodeURIComponent(request.params.port));
  },
});

server.route({
  method: 'GET',
  path: '/port/{port}/off',
  handler: (request, h) => {
    return turnPortOff(encodeURIComponent(request.params.port));
  },
});

const init = async() => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

function turnPortOn(port) {
  return 'Turning on port ' + port + '!';
};

function turnPortOff(port) {
  return 'Turning off port ' + port + '!';
};

exports.stop = async() => {
  await server.stop();
};

init();
