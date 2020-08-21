# Exercice

## Dans Express Rest

Créer un nouveau model Group avec 2 champs :
- nom (obligatoire)
- description

Créer les routes :
- GET /api/groups
- GET /api/groups/:id
- POST /api/groups

Insérer 3 groupes en base : Famille, Amis, Collègues

## Dans Angular

Créer un module groups avec un routeur

Créer les mêmes composants que dans contacts pour lister, afficher le détails et créer des groupes

## Optionnel

En vous inspirant de https://mongoosejs.com/docs/populate.html 

Ajouter une propriété group dans Contact et une propriétés contacts dans Group

Utiliser l'API populate sur les routes
- GET /api/groups/:id
- GET /api/contacts/:id

Dans Angular afficher les contacts ou le groupe correspondant.

Editer le formulaire de contact-create pour qu'il puisse sélectionner un groupe dans un menu déroulant.
