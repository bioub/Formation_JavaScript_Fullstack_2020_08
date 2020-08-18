const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Quel est le nombre entier ? ', (answer) => {
  // answer est de type string (à convertir)
  console.log('Vous avez saisi : ' + answer);

  // termine le programme
  rl.close();
});

console.log('FIN');
