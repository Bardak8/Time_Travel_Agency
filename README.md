# ⏳ TimeTravel Agency

Une webapp moderne et élégante pour une agence de voyage temporel de luxe.

## 🎨 Aperçu

TimeTravel Agency est une application web single-page qui présente une agence fictive de voyages temporels de luxe. Le site propose une expérience utilisateur immersive avec des animations fluides et un design premium.

## 🎨 URL duy site
https://bardak8.github.io/Time_Travel_Agency/

## ✨ Fonctionnalités

- **Header animé** avec navigation smooth scroll
- **Hero section** avec animations de particules et gradient orbs
- **Cards de destinations interactives** avec hover effects:
  - Paris 1889 (Belle Époque)
  - Crétacé -65M (Dinosaures)
  - Florence 1504 (Renaissance)
- **Modal détaillé** pour chaque destination avec informations complètes
- **Section À propos** avec statistiques animées
- **Widget chatbot** interactif en bas à droite
- **Footer complet** avec newsletter et liens
- **Design responsive** mobile-first
- **Animations au scroll** (fade-in, scale)

## 🛠️ Technologies

- **React 18** - Framework JavaScript
- **Vite** - Build tool rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Bibliothèque d'animations
- **Inter & Montserrat** - Typographies modernes
- **Docker** - Conteneurisation et déploiement
- **Nginx** - Serveur web pour la production

## 🎨 Palette de couleurs

- **Fond sombre**: `zinc-950`, `zinc-900`
- **Accents dorés**: `gold-400` à `gold-600`
- **Texte**: `zinc-100` à `zinc-400`

## 🚀 Installation

### Option 1 : Avec Docker (Recommandé) 🐳

**Prérequis** : Docker et Docker Compose installés sur votre machine

1. **Lancer l'application** :
```bash
docker-compose up -d
```

2. **Ouvrir le navigateur** :
L'application sera disponible à l'adresse : `http://localhost:3000`

3. **Arrêter l'application** :
```bash
docker-compose down
```

**Commandes utiles** :
```bash
# Voir les logs
docker-compose logs -f

# Rebuild l'image
docker-compose up -d --build

# Supprimer l'image
docker-compose down --rmi all
```

### Option 2 : Installation classique

1. **Installer les dépendances** :
```bash
npm install
```

2. **Lancer le serveur de développement** :
```bash
npm run dev
```

3. **Ouvrir le navigateur** :
Le site sera disponible à l'adresse : `http://localhost:5173`

## 📦 Build pour la production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

Pour prévisualiser le build :
```bash
npm run preview
```

## 📁 Structure du projet

```
timetravel-agency/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header avec navigation
│   │   ├── Hero.jsx            # Section hero avec animations
│   │   ├── Destinations.jsx    # Grille des destinations
│   │   ├── DestinationModal.jsx # Modal de détails
│   │   ├── About.jsx           # Section à propos
│   │   ├── Chatbot.jsx         # Widget chatbot
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx                 # Composant principal
│   ├── main.jsx                # Point d'entrée React
│   └── index.css               # Styles globaux Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── Dockerfile                  # Configuration Docker
├── docker-compose.yml          # Orchestration Docker
├── nginx.conf                  # Configuration Nginx
└── .dockerignore               # Fichiers exclus du build Docker
```

## 🎯 Composants principaux

### Header
- Navigation sticky avec effet au scroll
- Logo animé
- Menu responsive
- Bouton CTA "Réserver"

### Hero
- Animations de particules en arrière-plan
- Gradient orbs animés
- Titre principal avec gradient
- Indicateur de scroll animé

### Destinations
- 3 cards interactives avec hover effects
- Ouverture de modal au clic
- Animations au scroll (stagger effect)

### DestinationModal
- Affichage complet des détails
- Points forts et inclusions
- Prix et durée
- Boutons CTA

### About
- 4 features avec icônes
- Statistiques animées (counter effect)
- Background décoratif

### Chatbot
- Widget flottant en bas à droite
- Interface de chat animée
- Réponses rapides
- Animation d'ouverture/fermeture

### Footer
- Informations complètes
- Liens organisés par catégories
- Newsletter
- Réseaux sociaux

## 🎨 Personnalisation

### Couleurs
Les couleurs peuvent être modifiées dans `tailwind.config.js` :
```js
colors: {
  gold: { ... },
  dark: { ... }
}
```

### Animations
Les animations Framer Motion peuvent être ajustées dans chaque composant avec les props :
- `initial`
- `animate`
- `whileInView`
- `transition`

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints :
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🐳 Docker

### Architecture
Le projet utilise une architecture Docker multi-stage :

1. **Stage 1 (Build)** : Node 18 Alpine
   - Installation des dépendances
   - Build de l'application React avec Vite
   
2. **Stage 2 (Production)** : Nginx Alpine
   - Serveur web léger et performant
   - Compression gzip activée
   - Cache des fichiers statiques optimisé
   - Headers de sécurité configurés

### Configuration Nginx
- Compression gzip pour de meilleures performances
- Cache des assets statiques (1 an)
- Support du routing SPA (Single Page Application)
- Headers de sécurité (X-Frame-Options, X-Content-Type-Options, etc.)

### Ports
- **Port 3000** : Application web accessible sur `http://localhost:3000`

### Avantages Docker
- ✅ Déploiement simplifié et reproductible
- ✅ Environnement isolé et cohérent
- ✅ Optimisation de la taille de l'image (multi-stage build)
- ✅ Performances optimales avec Nginx
- ✅ Prêt pour la production

## 🌟 Améliorations possibles

- [ ] Ajouter un système de réservation fonctionnel
- [ ] Intégrer une API pour le chatbot
- [ ] Ajouter plus de destinations
- [ ] Implémenter un système de paiement
- [ ] Ajouter des vidéos de fond réelles
- [ ] Créer un espace client
- [ ] Multilingue (i18n)

## 📄 Licence

Projet éducatif - Usage libre

## 👨‍💻 Développement

Créé avec passion pour démontrer les capacités de React, Tailwind CSS et Framer Motion.
Un aperçu de notre maquette : https://v0-time-travel-agency-app-alpha.vercel.app/
---

**Note** : Ce projet est fictif et créé à des fins de démonstration. Aucun voyage temporel réel n'est disponible (pour le moment) ! ⏳✨
