# 1. Utilise l'image officielle Node.js légère
FROM node:12-alpine3.9

# 2. Crée un répertoire pour ton app dans le conteneur
WORKDIR /app

# 3. Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# 4. Installe les dépendances en mode production
RUN npm install --only=production

# 5. Copie tout le reste de l'application
COPY . .

# 6. Expose le port que l'app utilise
EXPOSE 3000

# 7. Commande de démarrage
CMD ["npm", "start"]

