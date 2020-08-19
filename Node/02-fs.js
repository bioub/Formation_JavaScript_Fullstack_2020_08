const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const src = path.resolve(__dirname, '.gitignore');
const dest = path.resolve(__dirname, '.gitignore.copy');

// const buffer = fs.readFileSync(src);
// // buffer <-> tableau d'octets
// console.log(buffer.toString('utf-8'));

// const str = fs.readFileSync(src, { encoding: 'utf-8' });
// console.log(str);

// const buffer = fs.readFileSync(src);
// fs.writeFileSync(dest, buffer);

// apparu en Node v8
// fs.copyFileSync(src, dest);

// contient les fonctions de fs + une douzaine de méthodes plus haut niveau
// fse.copyFileSync('node_modules', 'node_modules.copy')

// Synchrone (bloquant pour le thread)
try {
  const buffer = fs.readFileSync(src);
  fs.writeFileSync(dest, buffer);
  console.log('Copy sync done');
} catch (err) {
  console.log(err);
}

// Asynchrone
// -> callback hell / pyramid of doom
fs.readFile(src, (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(dest, buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy async done');
      }
    });
  }
});

// Asynchrone basé sur des promesses (Promise)
fs.promises
  .readFile(src)
  .then((buffer) => fs.promises.writeFile(dest, buffer))
  .then(() => console.log('Copy async promise done'))
  .catch((err) => console.log(err));

// Avec fs-extra ne pas mettre .promises
fse
  .readFile(src)
  .then((buffer) => fse.writeFile(dest, buffer))
  .then(() => console.log('Copy async promise done'))
  .catch((err) => console.log(err));


// Asynchrone basé sur des promesses (Promise) et la syntaxe async/await ES2017/ES2018
async function copy() {
  try {
    const buffer = await fs.promises.readFile(src);
    await fs.promises.writeFile(dest, buffer);
    console.log('Copy sync done');
  } catch (err) {
    console.log(err);
  }
}

copy();
