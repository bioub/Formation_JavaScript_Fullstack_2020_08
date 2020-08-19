const contacts = [{
  prenom: 'Romain',
  id: 123,
}, {
  prenom: 'Eric',
  id: 456,
}, {
  prenom: 'Jean',
  id: 789,
}];

// Ecrire un API REST avec express

// GET /api/contacts
// Retourne en JSON le tableau
// Status 200

// GET /api/contacts/:id
// Retourne en JSON l'élément du tableau associé à l'id
// Status 200 si trouvé
// Status 404 si pas trouvé

// DELETE /api/contacts/:id
// Retourne en JSON l'élément du tableau associé à l'id
// le supprime du tableau
// Status 200 si trouvé
// Status 404 si pas trouvé
