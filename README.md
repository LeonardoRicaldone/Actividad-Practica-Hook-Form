# Event Planner - Impulso Creativo

## Descripción

Event Planner es una aplicación web desarrollada en React.js para la gestión de eventos de la organización juvenil "Impulso Creativo". La aplicación permite crear, leer, actualizar y eliminar eventos de manera eficiente, con una interfaz responsive y moderna.

## Características

- **CRUD completo** para gestión de eventos
- **Interfaz responsive** que se adapta a móviles, tablets y escritorio
- **Validación de formularios** con react-hook-form
- **Notificaciones** para feedback del usuario
- **Componentes reutilizables** y modulares
- **Hooks personalizados** para lógica de negocio
- **Navegación** con React Router DOM

## Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/
│   │   ├── Title.jsx
│   │   ├── Title.css
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   ├── Card.jsx
│   │   ├── Card.css
│   │   ├── Message.jsx
│   │   ├── Message.css
│   │   ├── EventForm.jsx
│   │   └── EventForm.css
│   ├── hooks/
│   │   └── useEventActions.js
│   ├── screens/
│   │   ├── WelcomeScreen.jsx
│   │   ├── WelcomeScreen.css
│   │   ├── HomeScreen.jsx
│   │   └── HomeScreen.css
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── public/
│   └── index.html
└── package.json
```

## Tecnologías Utilizadas

- **React.js** - Biblioteca para construir interfaces de usuario
- **React Router DOM** - Para navegación entre páginas
- **React Hook Form** - Para validación de formularios
- **CSS3** - Para estilos responsive
- **Fetch API** - Para comunicación con el backend

## API

La aplicación consume la siguiente API:
- **URL**: `https://retoolapi.dev/JWtbTo/eventos`
- **Operaciones**: GET, POST, PUT, DELETE

### Estructura de Datos

```json
{
  "id": 1,
  "evento": "Nombre del evento",
  "direccion": "Dirección del evento",
  "tipoEvento": "Virtual/Presencial/Fishery",
  "descripcion": "Descripción del evento"
}
```

## Instalación y Uso

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone 
cd frontend
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en http://localhost:5173/

### Dependencias Principales

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.0",
  "react-hook-form": "^7.43.0"
}
```

## Funcionalidades

### Pantalla de Bienvenida
- Mensaje de bienvenida personalizado
- Redirección automática después de 5 segundos
- Botón para proceder manualmente

### Dashboard Principal
- Listado de todos los eventos
- Búsqueda y filtrado
- Operaciones CRUD completas
- Notificaciones de éxito/error

### Gestión de Eventos
- **Crear**: Formulario para nuevos eventos
- **Leer**: Visualización en cards responsivas
- **Actualizar**: Edición de eventos existentes
- **Eliminar**: Confirmación antes de eliminar

## Hooks Personalizados

### useEventActions
Hook que encapsula toda la lógica CRUD:
- `fetchEvents()` - Obtener eventos
- `createEvent(data)` - Crear evento
- `updateEvent(id, data)` - Actualizar evento
- `deleteEvent(id)` - Eliminar evento

## Validaciones

El formulario incluye validaciones para:
- Campos obligatorios
- Longitud mínima de texto
- Selección de tipo de evento
- Mensajes de error claros

## Diseño Responsive

La aplicación se adapta a diferentes tamaños de pantalla:
- **Desktop**: Layout en grid con múltiples columnas
- **Tablet**: Adaptación de espaciado y tamaños
- **Mobile**: Layout de una columna con botones expandidos

## Colores del Tema

La aplicación utiliza una paleta de colores piel:
- **Primary**: #D4A574
- **Secondary**: #F5DEB3
- **Accent**: #CD853F
- **Background**: #FAF0E6
- **Text**: #8B4513

## Autor

Leonardo
