#!/bin/bash

# Ejecutar Prettier específicamente en los archivos de configuración
npx prettier --write tailwind.config.js
npx prettier --write vite.config.js
npx prettier --write postcss.config.js

echo "✅ Archivos de configuración formateados con Prettier"

