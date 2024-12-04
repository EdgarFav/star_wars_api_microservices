# Star Wars Microservices

Desarrollo de una API basada en arquitectura de microservicios para la gestión de información del universo de Star Wars. Este proyecto implementa un diseño modular con contenedores Docker y un gateway centralizado para el acceso a los servicios.

## 🚀 Funcionalidades Principales

- **Modelo de Base de Datos:** Cada microservicio tiene su propio modelo de datos y está diseñado usando MongoDB y Mongoose.
- **CRUD para Entidades:** Controladores completos para operaciones de creación, lectura, (actualización y eliminación estan pendientes).
- **Rutas de Backend:** Cada microservicio tiene rutas bien definidas para sus operaciones.
- **Gateway Centralizado:** Gestión del acceso a los microservicios a través de un único punto de entrada.
- **Contenerización y Orquestación:** Uso de Docker para contenerización y Docker Compose para orquestación.
- **Despliegue en Google Cloud:** Configuración y despliegue del proyecto para producción en la nube.

---

## 🛠️ Tecnologías Usadas

- **Backend:** JavaScript, Node.js
- **Contenerización:** Docker, Docker Compose
- **Base de Datos:** MongoDB, Mongoose
- **Documentación:** Swagger
- **Infraestructura:** Google Cloud

---

## 📂 Estructura del Proyecto

El proyecto está dividido en los siguientes microservicios:

1. **Characters:** Gestión de personajes (crear, leer).
2. **Planets:** Gestión de planetas.
3. **Films:** Gestión de naves espaciales.

Además, incluye:

- **Gateway:** Punto de acceso central para todos los microservicios.

---

## ⚙️ Requisitos Previos

1. **Node.js**
2. **Docker**
3. **Docker Compose**
4. Cuenta activa en **Google Cloud** para despliegue.

---

## 🚀 Instrucciones de Instalación

1. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/star_wars_api_microservices.git
   cd star-wars-microservices
2. **Instalar dependencias:**
   Ingresando a cada microservicio (planets, films, characters, database y gateway) 
   ```bash
   npm install
3. **Configurar las variables de entorno en la base de datos:**
   Crear un archivo .env en la raíz del proyecto con las siguientes variables:
   ```bash
   MONGO_URI=mongodb://tu-mongodb-uri
4. **Construir y ejecutar los contendedores:**
   ```bash
   docker-compose up --build
5. **Acceso a la API:**
   El gateway estará disponible en: http://localhost:8000

---

## 📖 Documentación de la API
  La documentación de la API está disponible en Swagger.
<br/>
  Para visulaizar la documentacion de este proyecto desplegado, visita:
- http://104.154.230.18:8000/characters/api-docs ---> documentacion API characters
- http://104.154.230.18:8000/films/api-docs ---> documentacion API films
- http://104.154.230.18:8000/planets/api-docs ---> documentacion API planets

<br/>

  Una vez que el proyecto esté en ejecución local, visita:
- http://localhost:8000/characters/api-docs 
- http://localhost:8000/films/api-docs 
- http://localhost:8000/planets/api-docs 

---

## 🖥️ Ejemplo de Uso
 Obtener Personajes
 <br/>
 **GET:** /characters
 <br/>
 **Respuesta Ejemplo:**
 <br/>
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
