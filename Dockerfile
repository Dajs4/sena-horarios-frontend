FROM node:18-alpine

WORKDIR /app

# Instalar dependencias primero (para aprovechar la caché de Docker)
COPY package.json package-lock.json* ./
RUN npm ci

# Copiar el resto de archivos del proyecto
COPY . .

# El puerto que Vite usa por defecto
EXPOSE 5173

CMD ["npm", "run", "dev"]