const readline = require('readline');
const Random = require('./random');


class Jeu {
  constructor(options = {}) {
    const { min = 0, max = 100 } = options;
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Random.getInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà joué : ${this.essais.join(' - ')} !!!`);
    }

    this._rl.question('Quel est le nombre entier ? ', (answer) => {
      const entierSaisi = parseInt(answer);

      if (isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un entier');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      }
      else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      }
      else {
        console.log('Gagné');
        // termine le programme
        this._rl.close();
      }
    });
  }
}


module.exports = Jeu;
