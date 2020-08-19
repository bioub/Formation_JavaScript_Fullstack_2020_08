const assert = require('assert'); // binaire node.js lib/assert.js
const chalk = require('chalk'); // node_modules/chalk
const hello = require('./hello'); // local

try {
  assert.equal(hello('Romain'), 'Hello Romain');
  console.log(chalk.green('Tests hello OK'));
} catch (err) {
  console.log(chalk.red('Tests hello FAIL'));
  process.exit(1);
}
