const prenoms = ['Romain', 'Jean', 'Eric'];

function hello(name) {
  return `Hello ${name}`;
}

prenoms.forEach((p) => {
  console.log(hello(p));
});

console.log('FIN');

// pile d'appels
// ^
// |
// |
// |
// |hello - lg - hello - lg - hello - lg
// |forEach                              - lg
// +---------------------------------------------------------------------------------> temps
//          Romain       Jean         Eric FIN
