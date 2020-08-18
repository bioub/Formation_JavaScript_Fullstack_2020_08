// Créer un objet directement
// -> object literal

const coords = {
  x: 1,
  y: 2,
};

coords.z = 3; // ajoute un couple clé/valeur
coords.z = 4; // modifie un couple clé/valeur

delete coords.z; // supprimer une clé

// $coords = [
//   "x" => 1,
//   "y" => 3,
// ];

// $coords["z"] = 3;
coords["z"] = 3;

// 2 syntaxe équivalente
console.log(coords.z);
console["log"](coords["z"]);

const method = "log";
console[method](coords["z"]);

// boucler sur les clés
for (const key in coords) {
  if (coords.hasOwnProperty(key)) {
    const value = coords[key];
    console.log(key, value);
  }
}

// réutiliser des objets (et/ou besoin de méthodes)
// -> fonction constructeur
function Contact(prenom) {
  this.prenom = prenom;
}

Contact.prototype.hello = function () {
  return `Hello ${this.prenom}`;
};
// class Contact {
//   constructor(prenom) {
//     this.prenom = prenom;
//     // this.hello = function() {
//     //   return `Hello (object) ${this.prenom}`;
//     // }
//   }
//   hello() {
//     return `Hello ${this.prenom}`;
//   }
// }

const romain = new Contact("Romain");

console.log(typeof Contact); // function
console.log(typeof romain); // object

console.log(romain.prenom); // Romain
console.log(romain.hello()); // object

console.log(romain.prenom !== undefined); // true
console.log(romain.hello !== undefined); // true

console.log(romain.hasOwnProperty("prenom")); // true
console.log(romain.hasOwnProperty("hello")); // false
