# 🧩 Inventario API (NestJS + PostgreSQL + TypeORM)

API RESTful desarrollada con **NestJS**, **TypeORM** y **PostgreSQL** para la gestión de productos de inventario.

---

## 🚀 Objetivo

Proveer endpoints para crear, consultar, actualizar y eliminar productos, cumpliendo con las mejores prácticas de NestJS, validación con `class-validator` y documentación automática con **Swagger**.

---

## 🧱 Tecnologías principales

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Swagger](https://swagger.io/)
- [Class-validator](https://github.com/typestack/class-validator)
- [dotenv](https://github.com/motdotla/dotenv)

---

## ⚙️ Requerimientos previos

Asegúrate de tener instalado:

- Node.js >= 18
- PostgreSQL >= 14
- npm o yarn

---

## 🧩 Configuración inicial

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/inventory-api.git
cd inventory-api
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Crear base de datos en PostgreSQL

```sql
CREATE DATABASE inventory_db;
```

### 4️⃣ Crear archivo `.env` en la raíz del proyecto

```env
NODE_ENV=local
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=
DB_NAME=inventory_db
```

> Si tu usuario `postgres` tiene contraseña, reemplaza `DB_PASS` por tu valor.

---

## 🧰 Ejecución del proyecto

### Modo desarrollo

```bash
npm run start:dev
```

### Modo producción

```bash
npm run build
npm run start:prod
```

---

## 🧪 Endpoints disponibles

| Método | Endpoint | Descripción |
|---------|-----------|-------------|
| POST | `/products` | Crear un nuevo producto |
| GET | `/products` | Listar todos los productos |
| GET | `/products/:id` | Obtener un producto por ID |
| PUT | `/products/:id` | Actualizar un producto por ID |
| DELETE | `/products/:id` | Eliminar un producto por ID |

---

## 🧩 Ejemplo de body para creación

```json
{
  "nombre": "Laptop HP ProBook",
  "descripcion": "Computador portátil de 15 pulgadas",
  "precio": 4599.99,
  "cantidad": 10
}
```

---

## 🧾 Validaciones

- `nombre`: obligatorio, texto.
- `descripcion`: opcional, texto.
- `precio`: número decimal positivo.
- `cantidad`: número entero positivo.

> Si algún campo no cumple con las validaciones, la API responderá con `400 Bad Request`.

---

## 📚 Documentación Swagger

Una vez corriendo el servidor, accede a:

👉 [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

Allí encontrarás la documentación completa, esquemas de datos, ejemplos y opción para probar los endpoints.

---

## 🗃️ Estructura del proyecto

```
src/
 ┣ config/
 ┃ ┣ app.config.ts
 ┃ ┣ database.config.ts
 ┃ ┗ index.ts
 ┣ products/
 ┃ ┣ dto/
 ┃ ┣ entities/
 ┃ ┣ products.controller.ts
 ┃ ┣ products.module.ts
 ┃ ┗ products.service.ts
 ┣ app.module.ts
 ┣ main.ts
```

---

## 🧩 Buenas prácticas aplicadas

✅ Arquitectura modular con NestJS.  
✅ Uso de `ConfigModule` y `TypeOrmModule` asíncronos.  
✅ Validación robusta con `class-validator`.  
✅ Documentación con `@nestjs/swagger`.  
✅ Código limpio, tipado y estructurado.

---

## 🧑‍💻 Autor

**Mauricio Carbal Martinez*  
📧 mcarbal23@gmail.com  
📅 Octubre 2025
