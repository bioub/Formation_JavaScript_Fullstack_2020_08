const assert = require('assert');
const MyMath = require('./my-math');

try {
  assert.equal(MyMath.sum(1, 2), 3);
  console.log('Tests sum OK');
} catch (err) {
  console.log('Tests sum FAIL');
  process.exit(1);
}
