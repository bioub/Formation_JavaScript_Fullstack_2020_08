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
  return interne;
}

const interne = externe();
interne();
console.log(typeof interne); // function

// pile d'appels
// ^
// |
// |
// |
// |          lg - lg - lg - lg
// |externe - interne           - lg
// +---------------------------------------------------------------------------------> temps
