globalThis.globalVar = 'globalVar';
const moduleVar = 'moduleVar';

function externe() {
  const closureVar = 'closureVar';
  function interne() {
    const localVar = 'localVar';
    console.log(localVar);
    console.log(closureVar);
    console.log(moduleVar);
    console.log(globalVar);
  }
  interne();
}

externe();
console.log(typeof interne); // undefined

// pile d'appels
// ^
// |
// |
// |lg - lg - lg - lg
// |interne
// |externe           - lg
// +---------------------------------------------------------------------------------> temps
