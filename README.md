# Portfolio Profesional - Jorge Jiménez Morgado

Portfolio moderno y minimalista de Desarrollador Full Stack Junior. Construido con React, Vite y Tailwind CSS siguiendo las mejores prácticas de desarrollo frontend y arquitectura limpia.

## 👤 Sobre Mí

Desarrollador Full Stack Junior formado en bootcamp intensivo de desarrollo web. Con experiencia en la creación de aplicaciones web completas y especial interés en backend, lógica de negocio y trabajo con bases de datos.

- 📍 **Ubicación**: Elche, España
- 💼 **Estado**: Disponibilidad inmediata
- 🚗 **Movilidad**: Carnet de conducir y vehículo propio
- 🎯 **Especialización**: Backend con Node.js, Express y MongoDB

## 🚀 Tecnologías Utilizadas

- **React 18** - Librería de UI
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de CSS utility-first
- **PostCSS** - Procesador de CSS
- **JavaScript ES6+** - Lenguaje de programación

## ✨ Características

- ✅ Diseño moderno y profesional tipo SaaS
- ✅ Totalmente responsive (mobile-first)
- ✅ Modo oscuro por defecto
- ✅ Animaciones suaves y transiciones
- ✅ Navbar fija con scroll suave
- ✅ Componentes modulares y reutilizables
- ✅ Código limpio y bien organizado
- ✅ Optimizado para rendimiento
- ✅ Preparado para producción

## 📂 Estructura del Proyecto

```
my-portfolio/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/        # Componentes React
│   │   ├── Navbar.jsx     # Barra de navegación
│   │   ├── Hero.jsx       # Sección hero principal
│   │   ├── About.jsx      # Sobre mí
│   │   ├── Technologies.jsx # Tecnologías y habilidades
│   │   ├── Projects.jsx   # Proyectos destacados
│   │   ├── Experience.jsx # Experiencia profesional
│   │   ├── Contact.jsx    # Formulario de contacto
│   │   └── Footer.jsx     # Pie de página
│   ├── data/              # Datos de la aplicación
│   │   ├── projectsData.js      # Datos de proyectos
│   │   ├── technologiesData.js  # Datos de tecnologías
│   │   └── experienceData.js    # Datos de experiencia
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales y Tailwind
├── index.html             # HTML principal
├── tailwind.config.js     # Configuración de Tailwind
├── postcss.config.js      # Configuración de PostCSS
├── vite.config.js         # Configuración de Vite
└── package.json           # Dependencias y scripts
```

## 🛠️ Instalación y Uso

### Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone [tu-repositorio]
cd my-portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter (si configurado)

## 🎨 Personalización

### Modificar Contenido Personal

1. **Información Personal**: Edita los componentes en `src/components/`
   - `Hero.jsx` - Nombre y título profesional
   - `About.jsx` - Biografía y ubicación
   - `Contact.jsx` - Información de contacto

2. **Proyectos**: Modifica `src/data/projectsData.js`
   ```javascript
   {
     title: "Título del Proyecto",
     description: "Descripción",
     image: "URL de la imagen",
     technologies: ["React", "Node.js"],
     github: "URL de GitHub",
     demo: "URL del demo"
   }
   ```

3. **Tecnologías**: Actualiza `src/data/technologiesData.js`

4. **Experiencia**: Edita `src/data/experienceData.js`

### Modificar Colores y Estilos

Los colores principales se configuran en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Modifica estos valores
    500: '#0ea5e9',
    600: '#0284c7',
  }
}
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. Despliega:
```bash
vercel
```

### Netlify

1. Construye el proyecto:
```bash
npm run build
```

2. La carpeta `dist/` está lista para desplegar en Netlify

### Otras Plataformas

El proyecto es compatible con cualquier hosting que soporte aplicaciones estáticas:
- GitHub Pages
- Cloudflare Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 📱 Secciones del Portfolio

1. **Hero** - Presentación principal con nombre y CTA
2. **Sobre Mí** - Biografía profesional
3. **Tecnologías** - Stack tecnológico con iconos
4. **Proyectos** - Proyectos destacados con imágenes y links
5. **Experiencia** - Timeline de experiencia profesional
6. **Contacto** - Formulario de contacto y redes sociales
7. **Footer** - Links rápidos y copyright

## 🎯 Mejores Prácticas Implementadas

- ✅ Componentes funcionales con Hooks
- ✅ Separación de datos y lógica
- ✅ Código modular y reutilizable
- ✅ Nomenclatura clara y consistente
- ✅ Comentarios donde es necesario
- ✅ Mobile-first responsive design
- ✅ Optimización de imágenes
- ✅ Lazy loading preparado
- ✅ SEO básico configurado

## 📝 Próximos Pasos Sugeridos

- [ ] Añadir tu CV en formato PDF
- [ ] Personalizar con tu información real
- [ ] Agregar imágenes de proyectos reales
- [ ] Conectar formulario de contacto con backend
- [ ] Implementar Google Analytics
- [ ] Añadir blog (opcional)
- [ ] Implementar i18n para múltiples idiomas
- [ ] Añadir tests unitarios

## 🤝 Contribuciones

Este es un proyecto personal, pero siéntete libre de hacer fork y adaptarlo a tus necesidades.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Contacto

**Jorge Jiménez Morgado**
- 📧 Email: jorgejimenez.dev@gmail.com
- 📱 Teléfono: 658 042 293
- 💼 LinkedIn: [jorge-jimenez-morgado](https://linkedin.com/in/jorge-jimenez-morgado)
- 🐙 GitHub: [@GeX90](https://github.com/GeX90)
- 📍 Ubicación: Elche, España

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
