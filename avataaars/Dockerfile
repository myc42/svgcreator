# Utilisation d'une image Node isolée
FROM node:18-alpine

# Répertoire de travail interne au conteneur
WORKDIR /app

# On copie uniquement le fichier de description des dépendances
COPY package.json ./

# L'installation se fait ICI, à l'intérieur de Docker. 
# Votre PC ne court aucun risque.
RUN npm install

# Copie du reste du code source dans le conteneur
COPY . .

# Build de l'application
RUN npm run build

# Installation du serveur statique sécurisé
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]