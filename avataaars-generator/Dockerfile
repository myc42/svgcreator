FROM node:14-alpine

WORKDIR /app

# 1. On copie d'abord le package.json
COPY package*.json ./

# 2. ON CRÉE UN DOSSIER VIDE pour "leurrer" npm
# Comme ça, npm pense que la librairie est déjà là et ne cherchera pas sur Internet
RUN mkdir -p node_modules/avataaars && touch node_modules/avataaars/package.json

# 3. Maintenant on installe le reste
RUN npm install --legacy-peer-deps

# 4. On copie tout le reste du code
COPY . .

EXPOSE 3000
CMD ["npm", "start"]