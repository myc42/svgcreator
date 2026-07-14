# SVG Creator - Avatar Generator

## À propos du projet

SVG Creator est un générateur de personnages au format SVG permettant de créer des avatars personnalisables.

Ce projet est basé sur un projet open source existant :
[fangpenlin/avataaars-generator](https://github.com/fangpenlin/avataaars-generator?utm_source=chatgpt.com)

Le projet original permettait déjà de générer des avatars SVG personnalisables. J'ai repris cette base afin de l'adapter à mon propre besoin.

L'objectif était de créer un style de personnages différent de celui proposé initialement. J'ai donc étudié la structure du projet, puis adapté les composants graphiques et les personnages afin d'obtenir un rendu correspondant au type de personnages que je souhaitais créer.

Ce projet est donc une adaptation personnelle d'une base open source existante.

---

# Crédits et projet original

Merci à l'auteur du projet original pour avoir rendu cette base disponible en open source.

Projet original :
[avataaars-generator GitHub Repository](https://github.com/fangpenlin/avataaars-generator?utm_source=chatgpt.com)

Le générateur original est également disponible en ligne :

[Get Avataaars](https://getavataaars.com?utm_source=chatgpt.com)

---

# Fonctionnalités

Le projet permet de :

* créer des personnages personnalisés ;
* générer des illustrations SVG ;
* modifier différents éléments du personnage ;
* réutiliser les avatars dans des applications web ;
* exporter des personnages facilement intégrables.

---

# Pourquoi Docker ?

Le projet original utilisait une configuration plus ancienne qui pouvait provoquer des problèmes de compatibilité selon les versions de Node.js, npm ou les dépendances installées localement.

J'ai choisi Docker afin de moderniser l'environnement d'exécution et rendre le projet plus simple à utiliser.

Les avantages :

* environnement identique pour tous les utilisateurs ;
* aucune installation locale de Node.js nécessaire ;
* gestion automatique des dépendances ;
* meilleure isolation du projet ;
* lancement simplifié avec quelques commandes.

Grâce à Docker, le projet peut fonctionner sur différentes machines sans avoir à reproduire manuellement toute la configuration.

---

# Prérequis

Installer :

* Docker
* Docker Compose
* Make

Vérifier les installations :

```bash
docker --version
docker compose version
make --version
```

---

# Installation

Cloner le projet :

```bash
git clone https://github.com/myc42/svgcreator.git
```

Entrer dans le dossier :

```bash
cd svgcreator
```

---

# Lancement avec Docker

## 1. Compiler la librairie SVG

La librairie `avataaars` doit être compilée avant de lancer l'application.

```bash
make build-lib
```

Cette commande utilise un conteneur Node.js temporaire afin de compiler la librairie sans dépendre de la configuration locale.

---

## 2. Construire et lancer l'application

```bash
make rebuild-all
```

Cette commande effectue :

1. nettoyage des anciens conteneurs ;
2. nettoyage des caches ;
3. compilation de la librairie ;
4. reconstruction des images Docker ;
5. démarrage des conteneurs.

---

# Commandes disponibles

Afficher toutes les commandes :

```bash
make help
```

---

## Compiler la librairie

```bash
make build-lib
```

Compile la librairie `avataaars` utilisée par le générateur.

---

## Reconstruction complète

```bash
make rebuild-all
```

À utiliser après une modification importante ou un changement de dépendances.

---

## Nettoyage Docker

```bash
make clean-all
```

Supprime :

* les conteneurs Docker ;
* les volumes associés ;
* les fichiers temporaires générés.

---

## Redémarrer l'application

```bash
make restart-app
```

Redémarre uniquement le conteneur de l'application.

---

# Architecture du projet

```
svg-creator
│
├── avataaars/
│   └── Librairie de composants SVG
│
├── avataaars-generator/
│   └── Application de génération d'avatars
│
├── docker-compose.yml
│   └── Configuration des conteneurs
│
├── Makefile
│   └── Commandes automatisées
│
└── README.md
```

---

# Organisation technique

Le projet sépare :

### Librairie graphique

Le dossier `avataaars` contient les composants SVG et leur logique de génération.

### Application

Le dossier `avataaars-generator` contient l'interface permettant de créer les personnages.

### Docker

Docker permet d'exécuter l'ensemble dans un environnement contrôlé.

---

# Licence

Ce projet utilise une base open source et conserve les crédits du projet original.

Les adaptations, modifications graphiques et personnalisations réalisées dans cette version sont personnelles.
