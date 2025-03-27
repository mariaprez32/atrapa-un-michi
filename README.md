# 🐱 Atrapa un Michi

<div align="center">
  <img src="./public/paw-logo.png" alt="Logo de Atrapa un Michi" width="180">
  <h3>Encuentra a tu compañero felino perfecto</h3>
</div>

## 📋 Descripción General

**Atrapa un Michi** es una aplicación web responsive diseñada para conectar gatos con sus hogares definitivos. La plataforma muestra gatos disponibles para adopción en una interfaz interactiva y fácil de usar, permitiendo a los posibles adoptantes explorar, guardar favoritos e iniciar el proceso de adopción.

## ✨ Características

- **Galería Interactiva de Gatos**: Explora gatos disponibles en un carrusel responsive (3 gatos en escritorio, 1 en móvil/tablet)
- **Perfiles Detallados**: Cada gato tiene un perfil con imagen, nombre, edad, raza y descripción
- **Sistema de Favoritos**: Guarda gatos en tu lista de favoritos para revisarlos más tarde
- **Diseño Responsive**: Experiencia optimizada para escritorio, tablet y dispositivos móviles
- **Soporte de Temas**: Alterna entre modo claro y oscuro para una visualización confortable
- **Proceso de Adopción**: Flujo simple para iniciar el proceso de adopción del gato elegido

## 🖥️ 

![Captura de pantalla de Atrapa un Michi](public/shot.png)

## 🛠️ Tecnologías

### Frontend

- **React**: Desarrollo de UI basado en componentes
- **React Router**: Navegación y enrutamiento
- **React Hook Form**: Gestión y validación de formularios
- **React Icons**: Iconos para la interfaz
- **CSS**: Estilos personalizados con diseño responsive

### Gestión de Estado

- **Context API**: Gestión global de estado para favoritos y tema
- **localStorage**: Persistencia de preferencias de usuario y favoritos

### Integración de API

- **The Cat API**: Fuente de datos e imágenes de gatos

### Desarrollo y Pruebas

- **Vite**: Entorno de desarrollo rápido y herramienta de construcción
- **Vitest**: Pruebas unitarias y de componentes
- **ESLint**: Calidad y consistencia del código

## 🚀 Primeros Pasos

### Prerequisitos

- Node.js (v16 o superior)
- npm o yarn

### Variables de Entorno

Crea un archivo `.env` en el directorio raíz con las siguientes variables:

```
VITE_API_KEY=tu_clave_api_de_cats
```

Puedes obtener una clave API de [The Cat API](https://thecatapi.com/).

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/mariaprez32/atrapa-un-michi.git
   cd atrapa-un-michi
   ```

2. Instala dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre tu navegador y visita `http://localhost:5173`

## 🧪 Ejecutar Pruebas

```bash
# Ejecutar pruebas
npm run test

# Ejecutar pruebas en modo observador
npm run test:watch
```

## 📱 Uso

1. **Explora Gatos**: Descubre gatos disponibles en el carrusel de la página principal
2. **Guarda Favoritos**: Haz clic en el icono de corazón en la tarjeta de un gato para añadirlo a tus favoritos
3. **Ve tus Favoritos**: Navega a la página "Favoritos" para ver todos tus gatos guardados
4. **Inicia la Adopción**: Haz clic en el botón "¡Adóptame!" para comenzar el proceso de adopción de un gato específico
5. **Cambia el Tema**: Alterna entre modo claro y oscuro usando el selector de tema en el encabezado

## 📁 Estructura del Proyecto

```
atrapa-un-michi/
├── public/               # Recursos estáticos
│   ├── paw-logo.png      # Logo de la app
│   └── ...
├── src/
│   ├── components/       # Componentes UI reutilizables
│   │   ├── Button/       # Componente de botón
│   │   ├── CatCard/      # Componente de tarjeta de gato
│   │   ├── CatsSlider/   # Componente de carrusel
│   │   ├── FavoriteButton/ # Componente de botón de favoritos
│   │   ├── Footer/       # Componente de pie de página
│   │   └── Header/       # Encabezado con navegación
│   ├── contexts/         # Contextos de React
│   │   ├── FavoriteContext/ # Gestión de estado de favoritos
│   │   └── ThemeContext/ # Gestión de estado del tema
│   ├── hooks/            # Hooks personalizados
│   │   └── useFavorites.js # Hook para funcionalidad de favoritos
│   ├── pages/            # Páginas de la aplicación
│   │   ├── AdoptPage/    # Página de formulario de adopción
│   │   ├── FavoritesPage/ # Página de favoritos guardados
│   │   └── HomePage/     # Página principal
│   ├── routes/           # Configuración de rutas
│   │   └── AppRoutes.jsx # Definición de rutas de la app
│   ├── services/         # Servicios de API
│   │   └── catService.js # Integración con Cat API
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos globales
│   └── main.jsx          # Punto de entrada
├── .env                  # Variables de entorno
├── package.json          # Dependencias y scripts
├── vite.config.js        # Configuración de Vite
└── README.md             # Documentación del proyecto
```

## 📱 Diseño Responsive

La aplicación es completamente responsive con diferentes layouts para:

- **Escritorio (>900px)**: Carrusel de 3 columnas, navegación completa
- **Tablet (768px-900px)**: Carrusel de 1 columna, menú hamburguesa
- **Móvil (<768px)**: Carrusel de 1 columna, espaciado optimizado, menú hamburguesa


## 👥 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. Haz un fork del repositorio
2. Crea una rama para tu función (`git checkout -b feature/funcion-increible`)
3. Haz commit de tus cambios (`git commit -m 'Añadir alguna función increíble'`)
4. Push a la rama (`git push origin feature/funcion-increible`)
5. Abre un Pull Request

Por favor, asegúrate de que tu código sigue las guías de estilo del proyecto e incluye pruebas apropiadas.

## 🙏 Agradecimientos

- [The Cat API](https://thecatapi.com/) por proporcionar datos de gatos
- [React Icons](https://react-icons.github.io/react-icons/) por el conjunto de iconos
- Todos los contribuyentes y revisores que han ayudado a mejorar este proyecto

---

<div align="center">
  <p>Hecho con ❤️ por <a href="https://github.com/mariaprez32">María Pérez</a>, <a href="https://github.com/aelnor-dev">Lorena Martínez </a> y <a href="https://github.com/yuliia-martynovych">Yuliia Martynovych</a> </p>
  <p>🐾 Ayuda a un gato a encontrar su hogar para siempre 🐾</p>
</div>
