const prenoms = ['Romain', 'Jean', 'Eric'];

function hello(name) {
  return `Hello ${name}`;
}

prenoms
  .filter((p) => p.length === 4)
  .map((p) => p.toUpperCase())
  .forEach((p) => console.log(hello(p)));

console.log('FIN');

// pile d'appels
// ^
// |
// |
// |
// |hello - lg - hello - lg - hello - lg
// |forEach                              - lg
// +---------------------------------------------------------------------------------> temps
//          ROMAIN       JEAN         ERIC FIN
