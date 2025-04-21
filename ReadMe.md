# Kryzalid Test Front-End

## Description du Projet

Ce projet est une application web de gestion de nouvelles (articles) avec un système de filtrage par catégorie. L'interface présente une liste d'articles avec leurs images, titres, introductions et dates de publication. Un footer contient des liens vers les réseaux sociaux et des sections thématiques.

## Technologies Utilisées

- **HTML/Twig** : Templates pour la structure de la page
- **SCSS/CSS** : Styles et mise en page
- **JavaScript** : Fonctionnalités interactives
- **Node.js** : Environnement d'exécution
- **JSON Server** : API simulée pour les données

## Structure du Projet

```
kryzalid-test-front-end/
├── dist/                  # Dossier de build (généré)
├── images/                # Images et icônes
├── node_modules/          # Dépendances (généré)
├── src/
│   ├── main.js            # Point d'entrée JavaScript
│   ├── scss/              # Fichiers SCSS source
│   │   ├── style.scss     # Styles principaux
│   │   └── utils/         # Utilitaires SCSS
│   └── templates/         # Templates Twig
│       ├── index.twig     # Template principal
│       └── partials/      # Partials Twig
├── compile.js             # Script de compilation
├── db.json                # Données JSON pour l'API
├── package.json           # Configuration du projet
└── ReadMe.md              # Documentation
```

## Prérequis

- Node.js (v14 ou supérieur)
- npm ou pnpm

## Installation

1. Clonez le dépôt :

```bash
git clone [URL_DU_REPO]
cd kryzalid-test-front-end
```

2. Installez les dépendances :

```bash
npm install
# ou
pnpm install
```

## Lancement du Projet

Pour lancer le projet, exécutez la commande suivante :

```bash
npm run start
# ou
pnpm run start
```

## Fonctionnalités

### Filtrage par Catégorie

- Un menu déroulant permet de filtrer les articles par catégorie
- L'option "Toutes" affiche tous les articles

### Affichage des Articles

- Chaque article affiche une image, un titre, une introduction et une date
- Les articles sont triés par date (du plus récent au plus ancien)

### Pagination

- Les articles sont paginés avec un bouton pour chaque page
- La pagination est gérée par JavaScript

### Footer

- Section gauche avec inscription à la newsletter et liens sociaux
- Section droite avec liens vers différentes sections thématiques

## Tâches Restantes

### 1. Amélioration de l'Aspect Responsive

## Personnalisation

### Variables CSS

Les principales variables CSS sont définies dans `src/scss/style.scss` :

```scss
:root {
  /* Colors */
  --bgColor: #eaeae8;
  --bgColorDarker: #d1d1d1;
  --textColor: #1b1b3a;
  --footerBgColor: #d1e467;

  /* Typography */
  --primaryFont: "DM Sans", Arial, sans-serif;
  --secondaryFont: "Aleo", Arial, sans-serif;

  /* Layout */
  --container-margin: 5vw;

  /* Effects */
  --transition: all 0.3s ease;
}
```
