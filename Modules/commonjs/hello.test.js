const assert = require('assert');
const hello = require('./hello');

try {
  assert.equal(hello('Romain'), 'Hello Romain');
  console.log('Tests hello OK');
} catch (err) {
  console.log('Tests hello FAIL');
  process.exit(1);
}
