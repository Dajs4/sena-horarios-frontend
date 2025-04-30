# Sistema de Programación de Horarios SENA - Frontend

Frontend para el sistema de programación y gestión de horarios del SENA, desarrollado con React y Vite.

## Tecnologías utilizadas

- **React**: Biblioteca para construir interfaces de usuario
- **Vite**: Herramienta de construcción rápida para desarrollo moderno
- **React Router**: Para la navegación entre páginas
- **Zustand**: Para la gestión de estado
- **TailwindCSS**: Framework CSS para diseño rápido y responsivo
- **Recharts**: Biblioteca para visualización de datos
- **Docker**: Para entorno de desarrollo consistente

## Requisitos previos

- Node.js 18.x o superior
- npm 9.x o superior
- Docker y Docker Compose (opcional, para desarrollo con contenedores)

## Instalación y ejecución

### Opción 1: Desarrollo local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/sena-horarios-frontend.git
   cd sena-horarios-frontend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir [http://localhost:5173](http://localhost:5173) en el navegador

### Opción 2: Desarrollo con Docker

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/sena-horarios-frontend.git
   cd sena-horarios-frontend
   ```

2. Iniciar con Docker Compose:
   ```bash
   docker-compose up
   ```

3. Abrir [http://localhost:5173](http://localhost:5173) en el navegador

## Estructura del proyecto

La estructura principal del proyecto es la siguiente:

```
src/
├── assets/           # Imágenes, iconos, etc.
├── components/       # Componentes reutilizables
├── config/           # Configuraciones globales
├── hooks/            # Custom hooks
├── pages/            # Páginas principales
├── routes/           # Configuración de rutas
├── services/         # Servicios (API, PDF, etc.)
├── store/            # Estado global (Zustand)
├── utils/            # Utilidades
├── App.jsx           # Componente principal
└── main.jsx          # Punto de entrada
```

## Comandos disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la construcción de producción localmente
- `npm run lint`: Ejecuta el linter para verificar el código
- `npm run lint:fix`: Corrige automáticamente los problemas de linting

## Cómo contribuir

1. Crear un fork del repositorio
2. Crear una rama para tu funcionalidad (`git checkout -b feature/amazing-feature`)
3. Confirmar cambios (`git commit -m 'Añade una característica increíble'`)
4. Enviar a la rama (`git push origin feature/amazing-feature`)
5. Abrir un Pull Request

## Configuración para colaboradores

Para dar acceso a tus compañeros y que puedan contribuir al proyecto:

1. Ve a la página principal del repositorio en GitHub
2. Haz clic en "Settings" (Configuración)
3. Selecciona "Collaborators" (Colaboradores) en el menú lateral
4. Haz clic en "Add people" (Añadir personas)
5. Busca por nombre de usuario, nombre completo o correo electrónico
6. Selecciona a tus compañeros y elige el nivel de acceso (generalmente "Write")
7. Haz clic en "Add [nombre] to this repository" (Añadir [nombre] a este repositorio)

Tus compañeros recibirán una invitación por correo electrónico que deberán aceptar para comenzar a contribuir.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.