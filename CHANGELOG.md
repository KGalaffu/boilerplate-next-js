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

## [0.3.0] - 2024-12-14

### Added
- Intégration complète de Next-intl pour l'internationalisation
- Support des langues : Anglais (en), Français (fr) et Allemand (de)
- Création des fichiers de traduction dans le dossier `messages/`
- Ajout du sélecteur de langue dans la navbar
- Routes dynamiques avec paramètre de locale `[locale]`

### Changed
- Refonte du middleware pour gérer l'authentification et l'internationalisation
- Mise à jour du layout pour supporter les traductions côté client et serveur
- Configuration des routes publiques avec gestion automatique des locales
- Amélioration de la gestion des redirections avec préservation de la locale

### Configuration
- Création du fichier `i18n.config.ts` pour la configuration des locales
- Configuration du middleware avec `localePrefix: 'as-needed'`
- Mise en place des routes dynamiques avec `[locale]`
- Configuration des chemins (pathnames) pour la navigation internationalisée

### Technical Details
- Utilisation de `getTranslations` pour les traductions côté serveur
- Implémentation de `NextIntlClientProvider` pour les traductions côté client
- Gestion des routes publiques et protégées avec support multilingue
- Configuration du matcher pour le middleware Edge

### Files Modified
- `src/middleware.ts`: Gestion combinée de l'auth et i18n
- `src/app/[locale]/layout.tsx`: Support des traductions
- `src/config/i18n.config.ts`: Configuration des locales
- `messages/*.json`: Fichiers de traduction
- `src/components/Navbar.tsx`: Ajout du sélecteur de langue

### Dependencies Added
```bash
npm install next-intl
```

## [0.1.0] - 2024-12-14

### Added
- Configuration initiale du projet Next.js
- Mise en place de l'authentification avec NextAuth.js
- Intégration de Prisma avec MySQL
- Création des composants de formulaire pour l'inscription et la connexion
- Mise en place du système de routes protégées
