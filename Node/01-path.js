const path = require('path');

const relativePath = './01-path.js';
const absPath = __filename;

console.log(path.isAbsolute(relativePath));
console.log(path.isAbsolute(absPath));

console.log(path.dirname(absPath));
console.log(path.extname(absPath));
console.log(path.parse(absPath));

console.log(path.join('logs', 'app.log'));
console.log(path.resolve('logs', 'app.log'));

// CWD : Current Working Directory (où vous vous trouver en CLI)
console.log(process.cwd())
process.chdir(__dirname);
console.log(process.cwd())
console.log(path.resolve('logs', 'app.log'));

// En général on fait réference à des chemins absolus calculé à partir de __dirname
console.log(path.join(__dirname, 'logs', 'app.log'));
console.log(path.resolve(__dirname, 'logs', 'app.log'));
