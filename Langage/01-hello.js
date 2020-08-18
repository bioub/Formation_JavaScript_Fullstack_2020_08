const prenoms = ['Romain', 'Jean', 'Eric'];

function hello(name) {
  return `Hello ${name}`;
}

for (const p of prenoms) {
  console.log(hello(p));
}

