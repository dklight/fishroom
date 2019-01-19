'use strict';
// const Gpio = require('onoff').Gpio;
const GpioFactory = require('./GpioFactory');
const Gpio = GpioFactory.create();

if (Gpio.accessible) {
  const ports = {
    1: new Gpio(17, 'out'),
    2: new Gpio(18, 'out'),
    3: new Gpio(19, 'out'),
    4: new Gpio(20, 'out'),
  };

  module.exports = {
    turnPort: function(port, action) {
      ports[port].writeSync(action === 'On');
      return 'Turning ' + action + ' port ' + port + '!';
    },
  };
} else {
  module.exports = {
    turnPort: function(port, action) {
      return 'Real GPIO not supported. Virtually turning '
      + action + ' port ' + port + '!';
    },
  };
}
