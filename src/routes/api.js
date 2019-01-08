'use strict';
const gpio = require('../gpio');

module.exports = server => {
  server.route({
    method: 'GET',
    path: '/port/{port}/on',
    handler: (request, h) => {
      return gpio.turnPortOn(encodeURIComponent(request.params.port));
    },
  });

  server.route({
    method: 'GET',
    path: '/port/{port}/off',
    handler: (request, h) => {
      return gpio.turnPortOff(encodeURIComponent(request.params.port));
    },
  });
};
