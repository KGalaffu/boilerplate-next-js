# Journal des Modifications

## 2023-12-14

### Configuration de la Base de Données MySQL
- Modification du schéma Prisma pour utiliser MySQL
- Ajout des types de champs spécifiques à MySQL (@db.Text pour les champs longs)
- Mise à jour du fichier .env avec la configuration MySQL
- Configuration réussie de la base de données

### Mise en Place de l'Authentification
- Création du middleware pour la protection des routes
- Création du composant de formulaire d'inscription (RegisterForm)
- Création de la page d'inscription
- Mise en place de l'API d'inscription avec hachage des mots de passe
- Intégration des composants shadcn-ui (form, input, toast)

### Dépendances Requises
- Installation de mysql2 pour la connexion à MySQL
- Configuration de Prisma avec le provider MySQL
- Intégration des composants shadcn-ui nécessaires

### Commandes Exécutées
```bash
npx prisma generate
npx prisma db push
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input
npx shadcn-ui@latest add toast
```

### Prochaines Étapes
- Configuration de la page de connexion
- Mise en place de la page d'administration
- Configuration de l'internationalisation
- Tests des fonctionnalités d'authentification

## [0.2.0] - 2024-12-14

### Added
- Ajout de la gestion des rôles utilisateur (ADMIN, USER)
- Création d'un script de seed pour générer un utilisateur admin
- Mise à jour de la navbar pour afficher le bouton Admin uniquement pour les administrateurs
- Amélioration du style de la navbar avec des effets visuels

### Changed
- Mise à jour du schéma Prisma pour inclure l'énumération Role
- Modification de la configuration NextAuth pour une meilleure gestion des rôles
- Amélioration de la gestion des états de formulaire avec useFormState

### Security
- Implémentation de la vérification des rôles pour l'accès aux fonctionnalités admin

## [0.1.0] - 2024-12-14

### Added
- Configuration initiale du projet Next.js
- Mise en place de l'authentification avec NextAuth.js
- Intégration de Prisma avec MySQL
- Création des composants de formulaire pour l'inscription et la connexion
- Mise en place du système de routes protégées
