// setTimeout(() => console.log('1s'), 1000);
// timeout(1000).then(() => console.log('1s'));


// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// timeout(1000).then(() => console.log('1s'));

// const util = require('util');

// const timeout = util.promisify(setTimeout);
// timeout(1000).then(() => console.log('1s'));

// const { Observable } = require('rxjs');

// function interval(delayMs) {
//   return new Observable((observer) => {
//     setInterval(() => {
//       observer.next();
//     }, delayMs);
//   });
// }

// interval(1000).subscribe(() => console.log('1s'));

const { interval } = require('rxjs');
const { map, filter, take } = require('rxjs/operators');

interval(1000)
  .pipe(
    map((val) => val * 2),
    filter((val) => val > 10),
    take(3),
  )
  .subscribe((val) => console.log(val));
