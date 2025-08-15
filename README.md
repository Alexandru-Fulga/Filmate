# Filmate 🎬

<img src="./public/filmate-logo.png" alt="Filmate Hero Banner" width="300"/>

A modern movie discovery platform built with React that allows users to search through thousands of movies, view trending selections, and find where to watch their favorite films.

## Check the project live

- [LIVE PROJECT](https://filmate-sigma.vercel.app/)

## Features ✨

- **Movie Search**: Search through an extensive database of movies in real-time
- **Trending Movies**: Track and display most searched movies using Supabase
- **Watch Providers**: Find where to stream, rent, or buy movies
- **Detailed Information**: View comprehensive details about each movie including:
  - Ratings
  - Release dates
  - Plot summaries
  - Language information
  - Watch providers
- **Smooth Animations**: Enhanced user experience with GSAP animations

## Technologies Used 🛠

- **Frontend Framework**: React
- **Animation Library**: GSAP (GreenSock Animation Platform)
- **API Integration**: TMDB (The Movie Database)
- **Database**: Supabase
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

## Getting Started 🚀

1. **Clone the repository**

   ```bash
   git clone https://github.com/Alexandru-Fulga/filmate.git
   cd filmate
   ```

2. **Install dependencies**

   ```bash
   npm install (or npm i)
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory and add the following:

   ```bash
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## Project Structure 📁

```
filmate/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── Search.jsx
│   │   ├── Spinner.jsx
│   │   ├── TrendingMovies.jsx
│   │   └── WatchProviders.jsx
│   ├── utils/
│   │   └── supabaseClient.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
└── ...config files
```

## Key Features Explained 🔍

### Movie Search

- Real-time search functionality with debouncing
- Displays movie posters, ratings, and basic information
- Automatic search history tracking in Supabase

### Trending Movies

- Tracks and displays most searched movies
- Updates in real-time using Supabase database
- Animated number display for rankings

### Watch Providers

- Shows where to stream, rent, or buy movies
- Displays provider logos and availability
- Country-specific information

### UI/UX

- Smooth animations using GSAP
- Responsive design
- Loading states with custom spinner
- Modal-based detailed view

## 📝 License

- This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments 🙏

- TMDB API and JustWatch for providing movie data
- Supabase for backend services
- GSAP for animations

---

# Filmate 🎬 (Español)

Una plataforma moderna de descubrimiento de películas construida con React que permite a los usuarios buscar entre miles de películas, ver selecciones tendencias y encontrar dónde ver sus películas favoritas.

## Ver el proyecto en vivo

- [PROYECTO EN VIVO](https://filmate-sigma.vercel.app/)

## Características ✨

- **Búsqueda de Películas**: Búsqueda en tiempo real a través de una extensa base de datos
- **Películas Tendencia**: Seguimiento y visualización de las películas más buscadas usando Supabase
- **Proveedores de Streaming**: Encuentra dónde transmitir, alquilar o comprar películas
- **Información Detallada**: Ver detalles completos sobre cada película incluyendo:
  - Calificaciones
  - Fechas de estreno
  - Resúmenes de trama
  - Información de idioma
  - Proveedores de streaming
- **Animaciones Suaves**: Experiencia de usuario mejorada con animaciones GSAP

## Tecnologías Utilizadas 🛠

- **Framework Frontend**: React
- **Biblioteca de Animación**: GSAP (GreenSock Animation Platform)
- **Integración API**: TMDB (The Movie Database)
- **Base de Datos**: Supabase
- **Estilos**: Tailwind CSS
- **Herramienta de Construcción**: Vite

## Comenzando 🚀

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/Alexandru-Fulga/filmate.git
   cd filmate
   ```

2. **Instalar dependencias**

   ```bash
   npm install (o npm i)
   ```

3. **Configuración del Entorno**

   Crea un archivo `.env` en el directorio raíz y añade lo siguiente:

   ```bash
   VITE_TMDB_API_KEY=tu_clave_api_tmdb
   VITE_SUPABASE_URL=tu_url_supabase
   VITE_SUPABASE_ANON_KEY=tu_clave_anonima_supabase
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

## Estructura del Proyecto 📁

```
filmate/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── Search.jsx
│   │   ├── Spinner.jsx
│   │   ├── TrendingMovies.jsx
│   │   └── WatchProviders.jsx
│   ├── utils/
│   │   └── supabaseClient.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
└── ...archivos de configuración
```

## Características Principales Explicadas 🔍

### Búsqueda de Películas

- Funcionalidad de búsqueda en tiempo real con debouncing
- Muestra pósters de películas, calificaciones e información básica
- Seguimiento automático del historial de búsqueda en Supabase

### Películas Tendencia

- Seguimiento y visualización de las películas más buscadas
- Actualizaciones en tiempo real usando la base de datos Supabase
- Visualización animada de rankings

### Proveedores de Streaming

- Muestra dónde transmitir, alquilar o comprar películas
- Visualización de logos de proveedores y disponibilidad
- Información específica por país

### UI/UX

- Animaciones suaves usando GSAP
- Diseño responsivo
- Estados de carga con spinner personalizado
- Vista detallada basada en modales

## 📝 Licencia

- Este proyecto está licenciado bajo la licencia MIT. Consulte el archivo LICENSE para obtener más detalles.

## Agradecimientos 🙏

- TMDB API y JustWatch por proporcionar datos de películas
- Supabase por servicios de backend
- GSAP por animaciones
