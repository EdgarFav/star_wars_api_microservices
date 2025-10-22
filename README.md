# Star Wars API Microservices 🌟

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)

Desarrollo de una API basada en arquitectura de microservicios para la gestión de información del universo de Star Wars. Este proyecto implementa un diseño modular con contenedores Docker y un gateway centralizado para el acceso a los servicios.

## 📋 Tabla de Contenidos

- [Funcionalidades Principales](#-funcionalidades-principales)
- [Tecnologías Usadas](#️-tecnologías-usadas)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Requisitos Previos](#️-requisitos-previos)
- [Instalación](#-instalación)
- [Documentación de la API](#-documentación-de-la-api)
- [Ejemplos de Uso](#️-ejemplos-de-uso)
- [Solución de Problemas](#-solución-de-problemas)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

## 🚀 Funcionalidades Principales

- **Modelo de Base de Datos:** Cada microservicio tiene su propio modelo de datos y está diseñado usando MongoDB y Mongoose.
- **CRUD para Entidades:** Controladores completos para operaciones de creación, lectura (actualización y eliminación están pendientes).
- **Rutas de Backend:** Cada microservicio tiene rutas bien definidas para sus operaciones.
- **Gateway Centralizado:** Gestión del acceso a los microservicios a través de un único punto de entrada.
- **Contenerización y Orquestación:** Uso de Docker para contenerización y Docker Compose para orquestación.
- **Documentación Interactiva:** Documentación automática con Swagger UI para cada microservicio.
- **Despliegue en Google Cloud:** Configuración y despliegue del proyecto para producción en la nube.

---

## 🛠️ Tecnologías Usadas

- **Backend:** JavaScript, Node.js, Express
- **Contenerización:** Docker, Docker Compose
- **Base de Datos:** MongoDB, Mongoose
- **Documentación:** Swagger UI, Swagger JSDoc
- **Proxy:** http-proxy-middleware
- **Infraestructura:** Google Cloud Platform

---

## 🏗️ Arquitectura del Proyecto

El proyecto está dividido en los siguientes microservicios:

### Microservicios

1. **Characters (Puerto 8001):** Gestión de personajes de Star Wars (crear, leer).
2. **Planets (Puerto 8003):** Gestión de planetas del universo Star Wars.
3. **Films (Puerto 8002):** Gestión de películas de la saga Star Wars.
4. **Database (Puerto 8004):** Servicio de base de datos MongoDB compartido.

### Componentes Adicionales

- **Gateway (Puerto 8000):** Punto de acceso central que enruta las peticiones a los microservicios correspondientes.

### Diagrama de Arquitectura

```
┌─────────────┐
│   Cliente   │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│   Gateway       │ (Puerto 8000)
│   (Proxy)       │
└────────┬────────┘
         │
    ┌────┴────┬────────────┬──────────┐
    ▼         ▼            ▼          ▼
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌──────────┐
│Characters│ │ Planets │ │  Films  │ │ Database │
│  :8001  │ │  :8003  │ │  :8002  │ │  :8004   │
└─────────┘ └─────────┘ └─────────┘ └────┬─────┘
                                          │
                                          ▼
                                    ┌──────────┐
                                    │ MongoDB  │
                                    └──────────┘
```

---

## ⚙️ Requisitos Previos

Asegúrate de tener instalados los siguientes componentes:

1. **Node.js** (versión 14 o superior)
2. **Docker** (versión 20.10 o superior)
3. **Docker Compose** (versión 1.29 o superior)
4. **Git** para clonar el repositorio
5. (Opcional) Cuenta activa en **Google Cloud Platform** para despliegue en producción

---

## 📦 Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/EdgarFav/star_wars_api_microservices.git
cd star_wars_api_microservices
```

### 2. Instalar Dependencias (Opcional para desarrollo)

Si deseas ejecutar los servicios individualmente sin Docker, instala las dependencias en cada microservicio:

```bash
# Characters
cd characters
npm install

# Films
cd ../films
npm install

# Planets
cd ../planets
npm install

# Database
cd ../database
npm install

# Gateway
cd ../gateway
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en el directorio `database` con las siguientes variables:

```env
MONGO_URI=mongodb://localhost:27017/starwars
PORT=8004
```

### 4. Construir y Ejecutar los Contenedores

Desde el directorio raíz del proyecto, ejecuta:

```bash
docker-compose up --build
```

Este comando construirá las imágenes Docker y levantará todos los servicios.

### 5. Verificar que los Servicios Están Activos

Una vez que todos los contenedores estén en ejecución, verifica el estado:

```bash
docker-compose ps
```

### 6. Acceso a la API

El gateway estará disponible en: **http://localhost:8000**

Los servicios individuales están disponibles en:
- Characters: http://localhost:8001
- Films: http://localhost:8002
- Planets: http://localhost:8003
- Database: http://localhost:8004

---

## 📖 Documentación de la API

La documentación interactiva de la API está disponible a través de Swagger UI.

### Entorno de Producción (Desplegado)

Para visualizar la documentación del proyecto desplegado en Google Cloud, visita:

- **Characters API:** http://104.154.230.18:8000/characters/api-docs
- **Films API:** http://104.154.230.18:8000/films/api-docs
- **Planets API:** http://104.154.230.18:8000/planets/api-docs

### Entorno Local

Una vez que el proyecto esté en ejecución local, visita:

- **Characters API:** http://localhost:8000/characters/api-docs
- **Films API:** http://localhost:8000/films/api-docs
- **Planets API:** http://localhost:8000/planets/api-docs

---

## 🖥️ Ejemplos de Uso

### Obtener Todos los Personajes

**Endpoint:** `GET /characters`

**Request:**
```bash
curl -X GET http://localhost:8000/characters
```

**Respuesta Ejemplo:**
```json
{
  "_id": "1",
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": {
    "_id": "1",
    "name": "Tatooine"
  },
  "films": [
    {
      "_id": "1",
      "title": "A New Hope"
    },
    {
      "_id": "2",
      "title": "The Empire Strikes Back"
    },
    {
      "_id": "3",
      "title": "Return of the Jedi"
    },
    {
      "_id": "6",
      "title": "Revenge of the Sith"
    }
  ]
}
```

### Obtener un Personaje por ID

**Endpoint:** `GET /characters/:id`

**Request:**
```bash
curl -X GET http://localhost:8000/characters/1
```

### Crear un Nuevo Personaje

**Endpoint:** `POST /characters`

**Request:**
```bash
curl -X POST http://localhost:8000/characters \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male"
  }'
```

### Obtener Todas las Películas

**Endpoint:** `GET /films`

**Request:**
```bash
curl -X GET http://localhost:8000/films
```

### Obtener Todos los Planetas

**Endpoint:** `GET /planets`

**Request:**
```bash
curl -X GET http://localhost:8000/planets
```

---

## 🔧 Solución de Problemas

### Los contenedores no inician

**Problema:** Los contenedores Docker no se inician correctamente.

**Solución:**
1. Verifica que Docker esté en ejecución:
   ```bash
   docker --version
   docker-compose --version
   ```
2. Limpia los contenedores y volúmenes existentes:
   ```bash
   docker-compose down -v
   docker system prune -a
   ```
3. Reconstruye los contenedores:
   ```bash
   docker-compose up --build
   ```

### Error de conexión a MongoDB

**Problema:** Los microservicios no pueden conectarse a MongoDB.

**Solución:**
1. Verifica que el servicio de database esté en ejecución:
   ```bash
   docker-compose ps
   ```
2. Revisa los logs del contenedor de database:
   ```bash
   docker-compose logs database
   ```
3. Asegúrate de que las variables de entorno estén configuradas correctamente.

### El Gateway no redirige correctamente

**Problema:** Las peticiones al gateway devuelven errores 502 o 504.

**Solución:**
1. Verifica que todos los microservicios estén en ejecución.
2. Revisa los logs del gateway:
   ```bash
   docker-compose logs gateway
   ```
3. Asegúrate de que los puertos no estén siendo utilizados por otros servicios.

### Problemas con npm install

**Problema:** Errores al instalar dependencias con npm.

**Solución:**
1. Limpia el caché de npm:
   ```bash
   npm cache clean --force
   ```
2. Elimina node_modules y package-lock.json:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Si deseas contribuir al proyecto:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y commitea (`git commit -m 'Agrega nueva funcionalidad'`)
4. Sube los cambios a tu rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Consulta el archivo LICENSE para más detalles.

---

## 👤 Autor

**Edgar Favela**

- GitHub: [@EdgarFav](https://github.com/EdgarFav)

---

## 🙏 Agradecimientos

- Datos basados en el universo de Star Wars
- Inspirado en la arquitectura de microservicios moderna
- Comunidad de desarrolladores de Node.js y Docker
