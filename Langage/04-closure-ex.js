for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Si setTimeout est synchrone :
// 1s ... 0 ... 1s ... 1 ... 1s ... 2

// Si setTimeout est asynchrone :
// 1s ... 3 3 3

function externe(msg) {
  return function() {
    console.log(msg);
  };
}

// Avec une closure :
// 1s ... 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

for (let i=0; i<3; i++) {
  // portée de block (introduite par let)
  // portée de closure
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
