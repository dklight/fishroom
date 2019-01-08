'use strict';

const Hapi = require('hapi');
const inert = require('inert');
const hapiPino = require('hapi-pino');
const routes = require('./routes');
const DEV_PORT = 8000;

const server = Hapi.server({
  port: process.env.PORT || DEV_PORT,
});

async function start() {
  try {
    // register plugins
    await server.register(inert);

    await server.register({
      plugin: hapiPino,
      options: {
        prettyPrint: process.env.NODE_ENV !== 'production',
        logEvents: ['response', 'onPostStart'],
      },
    });

    // register routes
    await routes.register(server);

    // start the server
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.log(err);
    process.exit(1); // eslint-disable-line
  }
}

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

exports.stop = async() => {
  await server.stop();
};

start();
