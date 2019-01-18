'use strict';
const gpio = require('../gpio');

module.exports = server => {
  server.route({
    method: 'GET',
    path: '/port/{port}/{action}',
    handler: (request, h) => {
      return gpio.turnPort(
        encodeURIComponent(request.params.port),
        encodeURIComponent(request.params.action)
      );
    },
  });
};
