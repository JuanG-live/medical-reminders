# 🩺 Medical Reminders App

> Sistema de gestión de pacientes y recordatorios automáticos para profesionales de la salud

## 📋 Descripción

Aplicación web diseñada para facilitar la gestión de pacientes y el envío de recordatorios de turnos médicos. Desarrollada inicialmente para una psiquiatra que necesitaba automatizar el proceso de envío de recordatorios 24 horas antes de cada consulta.

## 🎯 Problema que resuelve

Los profesionales de la salud actualmente deben:
- Enviar recordatorios manualmente a cada paciente
- Gestionar listas de pacientes en agendas físicas o planillas
- Dedicar 20-30 minutos diarios a tareas administrativas repetitivas

Esta app reduce ese tiempo a 2-3 minutos mediante automatización y gestión centralizada.

## ⚡ Estado del Proyecto

**Versión actual:** MVP en desarrollo - Sprint 1  
**Última actualización:** Enero 2025

### ✅ Funcionalidades Completadas (Pantalla A - Gestión de Pacientes)

- [x] Agregar nuevo paciente (nombre, apellido, teléfono)
- [x] Ver lista de pacientes
- [x] Eliminar paciente individual
- [x] Validación de formularios
- [x] Limpieza automática de inputs después de agregar

### 🚧 En Desarrollo

- [ ] Editar información de paciente
- [ ] Persistencia de datos (localStorage)
- [ ] Mejoras de UI/UX

### 📅 Roadmap

**Sprint 2:** Pantalla B - Gestión de Turnos
- Formulario para agendar turnos
- Selección de paciente desde dropdown
- Vista de turnos agendados

**Sprint 3:** Pantalla C - Recordatorios
- Vista de turnos del día siguiente
- Generación automática de mensajes WhatsApp
- Marcado de recordatorios enviados

**Sprint 4:** Testing & Deploy
- Tests E2E con Cypress
- Deploy a producción
- Documentación completa

## 🛠️ Tecnologías

**Frontend:**
- React 19.2.0
- JavaScript (ES6+)
- CSS3
- Vite 7.3.1

**Herramientas de Desarrollo:**
- ESLint (configuración personalizada)
- Git & GitHub
- VS Code

**Próximamente:**
- Firebase (persistencia en la nube)
- Cypress (testing E2E)
- Twilio API (envío automático de WhatsApp - opcional)

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (v20.19.0 o superior)
- npm (v8.0.0 o superior)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JuanG-live/medical-reminders.git

# Entrar al directorio
cd medical-reminders

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run preview  # Previsualiza el build de producción
npm run lint     # Ejecuta el linter
```

## 📸 Screenshots

*(Próximamente)*

## 🏗️ Arquitectura

### Estructura del Proyecto

```
medical-reminders/
├── src/
│   ├── components/
│   │   └── PatientList.jsx    # Gestión de pacientes
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx               # Punto de entrada
│   └── index.css              # Estilos globales
├── public/
└── docs/                       # Documentación QA (próximamente)
```

### Flujo de Datos

```
Estado (useState)
    ↓
Componentes React
    ↓
Interacción Usuario
    ↓
Actualización Estado (setPatients)
    ↓
Re-render Automático
```

## 🧪 Testing

### QA Manual

El proyecto incluye documentación de casos de prueba manuales para cada funcionalidad implementada.

*(Documentación completa próximamente en `/docs`)*

### QA Automation

Se implementará suite de tests E2E con Cypress una vez completado el MVP.

## 🎓 Aprendizajes Clave

Este proyecto fue desarrollado como parte de mi transición de QA Analyst a Developer, aplicando:

- Gestión de estado con React Hooks (`useState`)
- Manejo de formularios y eventos
- Manipulación de arrays (`.map()`, `.filter()`, spread operator)
- Pensamiento orientado a componentes
- Control de versiones con Git
- Metodología Agile (Sprints, User Stories)

## 👨‍💻 Autor

**Juan María Génova**
- LinkedIn: [linkedin.com/in/juan-genova](https://linkedin.com/in/juan-genova)
- GitHub: [@JuanG-live](https://github.com/JuanG-live)
- Portfolio: [En construcción]

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [MIT License](LICENSE).

## 🙏 Agradecimientos

- Proyecto inspirado en la necesidad real de mi hermana, médica psiquiatra
- Desarrollado como parte de mi aprendizaje autodidacta en React
- Guiado por principios de QA y desarrollo ágil

---

⭐ Si este proyecto te resulta útil, considerá darle una estrella en GitHub
