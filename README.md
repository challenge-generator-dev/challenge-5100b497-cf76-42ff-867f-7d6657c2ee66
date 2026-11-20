# Implementación de CRUD de productos en DynamoDB con Express

El sistema de gestión de productos de una tienda en línea requiere la implementación de operaciones CRUD sobre una tabla de DynamoDB. La API REST se construirá con Express y se cubrirá con pruebas unitarias utilizando Jest. Los productos tienen los siguientes atributos: ID (clave primaria), nombre, descripción, precio y stock. La API debe validar que el precio y el stock sean valores positivos y que el nombre del producto sea único. En caso de violación de estas reglas, la API debe responder con un mensaje de error descriptivo.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | CRUD de productos con Express y DynamoDB |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `npm install --no-audit --no-fund && npm run build && docker compose config -q` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `npm install --no-audit --no-fund && npm run build && docker compose config -q`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Configuración del entorno y creación de la tabla DynamoDB

**Objetivo:** Configurar el entorno de desarrollo y crear la tabla DynamoDB para almacenar los productos.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configurar el proyecto con Express y DynamoDB.
- Crear la tabla DynamoDB con las columnas necesarias para almacenar los productos.
- Verificar que la tabla se ha creado correctamente.

**Entregable:** Proyecto configurado con Express y tabla DynamoDB creada.

<details>
<summary>Pistas de conocimiento</summary>

- AWS SDK v3 con DynamoDBDocumentClient
- Creación de tablas en DynamoDB

</details>

### Fase 2: Implementación de la API REST con operaciones CRUD

**Objetivo:** Implementar la API REST con las operaciones CRUD para los productos.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Implementar las rutas y controladores para las operaciones CRUD (crear, leer, actualizar, eliminar) de productos.
- Validar que el precio y el stock sean valores positivos y que el nombre del producto sea único.
- Manejar los errores de validación y responder con mensajes descriptivos.

**Entregable:** API REST implementada con operaciones CRUD y validaciones.

<details>
<summary>Pistas de conocimiento</summary>

- Rutas y controladores en Express
- Validación de datos en el backend

</details>

### Fase 3: Cobertura de pruebas unitarias con Jest

**Objetivo:** Cubrir las operaciones CRUD con pruebas unitarias utilizando Jest.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Escribir pruebas unitarias para cada operación CRUD de productos.
- Mockear DynamoDB utilizando Jest para evitar salir a la red.
- Verificar que las pruebas pasan y cubren los casos de éxito y error.

**Entregable:** Pruebas unitarias implementadas y ejecutadas con éxito.

<details>
<summary>Pistas de conocimiento</summary>

- Escritura de pruebas unitarias con Jest
- Mockeo de servicios externos en pruebas

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es una operación CRUD y por qué es importante en el manejo de datos?
- **paraQueSirve**: ¿Para qué sirve validar los datos en el backend y cómo se implementa en Express?
- **comoSeUsa**: ¿Cómo se utiliza Jest para escribir pruebas unitarias y mockear servicios externos?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar una API REST y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica el mockeo de servicios externos en las pruebas unitarias y por qué es importante?

## Criterios de Evaluacion

- Configuración correcta del entorno de desarrollo y creación de la tabla DynamoDB.
- Implementación de la API REST con operaciones CRUD y validaciones.
- Cobertura de pruebas unitarias con Jest y mockeo de DynamoDB.

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `app` | (raiz) | practice, chapter | server | Node | Express, DynamoDB, Jest |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `npm install --no-audit --no-fund && npm run build` — componente `app` (practice, chapter).

### Contratos entre componentes

- `app` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`
  - `GET /products`

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build && docker compose config -q
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
