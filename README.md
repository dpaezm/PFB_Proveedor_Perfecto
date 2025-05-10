# PFB Proveedor Perfecto

Proyecto final de Bootcamp que combina una API REST en Node.js con un frontend moderno en React. Permite gestionar proveedores, productos y reseñas, integrando funcionalidades como login, carga de archivos, filtrado, y más.

## 🗂 Estructura del Proyecto

```
PFB_Proveedor_Perfecto/
├── API-Proveedor-Perfecto/      # Backend (Node.js, Express)
├── FRONT-Proveedor-Perfecto/    # Frontend (React + Vite)
```

---

## 🚀 Requisitos Previos

Asegúrate de tener instalados:

- Node.js v18+ recomendado
- npm (incluido con Node)
- Git
- MySQL server (ejecutando localmente)
- Visual Studio Code (opcional, recomendado)

---

## 🛠 Instalación Paso a Paso

### 1. Clona el Repositorio

```bash
git clone https://github.com/dpaezm/PFB_Proveedor_Perfecto.git
cd PFB_Proveedor_Perfecto
```

---

## ⚙️ Backend – `API-Proveedor-Perfecto`

### 📦 Instalación

```bash
cd API-Proveedor-Perfecto
npm install
```

### 🔐 Variables de Entorno

Crea un archivo `.env` con las siguientes claves (ajusta valores reales):

```
PORT=4000
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=tu_password
MYSQL_DATABASE=pfb_proveedor
JWT_SECRET=tu_clave_secreta
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=usuario@example.com
SMTP_PASS=clave
```

### 🧱 Inicializar Base de Datos

```bash
npm run initdb
```

### ▶️ Arrancar el Servidor

```bash
npm run dev
```

Servidor corriendo en `http://localhost:4000`

---

## 💻 Frontend – `FRONT-Proveedor-Perfecto`

### 📦 Instalación

```bash
cd ../FRONT-Proveedor-Perfecto
npm install
```

Este proyecto usa:

- **Vite** como bundler
- **React 19**
- **TailwindCSS**
- **Material UI**
- **React Router DOM v7**
- **React Toastify**

### ▶️ Arrancar la App

```bash
npm run dev
```

La app estará en `http://localhost:5173`

---

## 📚 Principales Paquetes Usados

### Backend

- `express`, `mysql2`, `dotenv`
- `jsonwebtoken`, `bcrypt`, `morgan`
- `sharp`, `nodemailer`, `cors`, `express-fileupload`

### Frontend

- `react`, `react-dom`, `react-router-dom`
- `@mui/material`, `@emotion/react`, `@emotion/styled`
- `tailwindcss`, `@tailwindcss/vite`
- `react-icons`, `react-toastify`

---

## 🔧 Extensiones recomendadas (VS Code)

- ESLint
- Prettier
- DotENV
- Tailwind CSS IntelliSense
- React Developer Tools

---

## ✅ Comandos Útiles

| Acción                     | Comando                        |
|---------------------------|--------------------------------|
| Instalar dependencias API | `npm install`                  |
| Instalar dependencias FE  | `npm install`                  |
| Iniciar backend           | `npm run dev`                  |
| Iniciar frontend          | `npm run dev`                  |
| Inicializar BD            | `npm run initdb`               |

---

## 🧪 Linting

Ambos proyectos incluyen configuración de ESLint para mantener el código limpio. Ejecuta:

```bash
npm run lint
```

---

## 🤝 Contribuciones

Este proyecto es académico. Si quieres colaborar, contacta al autor del repo o haz un fork y pull request.


