const assert = require('assert');
const chalk = require('chalk'); // node_modules/chalk
const MyMath = require('./my-math');

try {
  assert.equal(MyMath.sum(1, 2), 3);
  console.log(chalk.green('Tests sum OK'));
} catch (err) {
  console.log(chalk.red('Tests sum FAIL'));
  process.exit(1);
}
