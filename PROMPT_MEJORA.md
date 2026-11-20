# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/repositories/product.repository.ts` — La fase "Configuración del entorno y creación de la tabla DynamoDB" se implementa aqui: este archivo es el ejercicio.
- `src/services/product.service.ts` — La fase "Implementación de la API REST con operaciones CRUD" se implementa aqui: este archivo es el ejercicio.
- `src/tests/product.service.spec.ts` — El topic pide TDD/pruebas: este archivo es el ejercicio.
- `src/tests/product.router.spec.ts` — El topic pide TDD/pruebas: este archivo es el ejercicio.

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

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build && docker compose config -q
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
CRUD de productos en DynamoDB expuesto por una API REST con Express y pruebas con Jest

### Misión / candidato
Persistir y consultar productos

### Reto
- Tema: CRUD de productos con Express y DynamoDB
- Seniority: advanced-l2
- Tipo: practical
- Título: Implementación de CRUD de productos en DynamoDB con Express
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del entorno y creación de la tabla DynamoDB — objetivo: Configurar el entorno de desarrollo y crear la tabla DynamoDB para almacenar los productos. — entregable (NO resolver): Proyecto configurado con Express y tabla DynamoDB creada.
- Fase 2: Implementación de la API REST con operaciones CRUD — objetivo: Implementar la API REST con las operaciones CRUD para los productos. — entregable (NO resolver): API REST implementada con operaciones CRUD y validaciones.
- Fase 3: Cobertura de pruebas unitarias con Jest — objetivo: Cubrir las operaciones CRUD con pruebas unitarias utilizando Jest. — entregable (NO resolver): Pruebas unitarias implementadas y ejecutadas con éxito.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "reto-express",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@aws-sdk/client-dynamodb": "3.1173.0",
    "@aws-sdk/lib-dynamodb": "3.1173.0",
    "@types/supertest": "7.2.1",
    "cors": "2.8.6",
    "express": "4.22.3",
    "helmet": "8.3.0",
    "morgan": "1.12.1",
    "supertest": "7.3.2"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3",
    "jest": "29.7.0",
    "ts-jest": "29.2.5",
    "@types/jest": "29.5.14"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "types": [
      "node",
      "jest"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.test.ts",
    "src/**/*.spec.ts"
  ]
}

// === ARCHIVO: src/routes/product.router.ts ===
import { Router, Request, Response } from 'express';
import { ProductService } from '../services/product.service';
import { ProductRepository } from '../repositories/product.repository';
import { validateProductCreate, validateProductUpdate } from '../utils/validation.util';
import { handleError } from '../utils/errors.util';
import { dynamoDBClient } from '../config/dynamodb.config';

// Capa de interfaz HTTP: traduce cada petición en una llamada al servicio
// y cada error de dominio en una respuesta con el código HTTP correspondiente.

// En un bloque catch el error llega como `unknown`; lo normalizamos a `Error`
// antes de delegarlo al manejador global de errores.
const toError = (error: unknown): Error => {
    if (error instanceof Error) {
        return error;
    }
    return new Error(String(error));
};

export class ProductRouter {
    private readonly router: Router;

    constructor(private readonly productService: ProductService) {
        this.router = Router();
        this.registerRoutes();
    }

    getRouter(): Router {
        return this.router;
    }

    private registerRoutes(): void {
        this.router.post('/', async (req: Request, res: Response) => {
            try {
                const productData = validateProductCreate(req.body);
                const product = await this.productService.createProduct(productData);
                res.status(201).json(product);
            } catch (error) {
                handleError(toError(error), res);
            }
        });

        this.router.get('/:id', async (req: Request, res: Response) => {
            try {
                const product = await this.productService.getProduct(req.params.id);
                res.json(product);
            } catch (error) {
                handleError(toError(error), res);
            }
        });

        this.router.put('/:id', async (req: Request, res: Response) => {
            try {
                const productData = validateProductUpdate(req.body);
                const product = await this.productService.updateProduct(req.params.id, productData);
                res.json(product);
            } catch (error) {
                handleError(toError(error), res);
            }
        });

        this.router.delete('/:id', async (req: Request, res: Response) => {
            try {
                await this.productService.deleteProduct(req.params.id);
                res.status(204).send();
            } catch (error) {
                handleError(toError(error), res);
            }
        });

        this.router.get('/', async (_req: Request, res: Response) => {
            try {
                const products = await this.productService.listProducts();
                res.json(products);
            } catch (error) {
                handleError(toError(error), res);
            }
        });
    }
}

// Instancia por defecto conservada para compatibilidad con importaciones previas.
const defaultProductRouter = new ProductRouter(
    new ProductService(new ProductRepository(dynamoDBClient))
);

const router = defaultProductRouter.getRouter();

export default router;

// === ARCHIVO: src/services/product.service.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { ProductRepository } from '../repositories/product.repository';
import { Product, ProductCreateDTO, ProductUpdateDTO } from '../models/product.model';
import { ValidationError, NotFoundError } from '../utils/errors.util';

export class ProductService {
    constructor(private productRepository: ProductRepository) {}

    /**
     * Crea un nuevo producto
     * @param productData Datos del producto
     * @returns Producto creado
     * TODO(reto): Implementar validación de unicidad del nombre y reglas de negocio
     */
    async createProduct(productData: ProductCreateDTO): Promise<Product> {
      throw new Error('TODO(reto): createProduct');
    }

    /**
     * Obtiene un producto por ID
     * @param id ID del producto
     * @returns Producto encontrado
     * @throws NotFoundError si el producto no existe
     * TODO(reto): Implementar la lógica para obtener un producto
     */
    async getProduct(id: string): Promise<Product> {
      throw new Error('TODO(reto): getProduct');
    }

    /**
     * Actualiza un producto existente
     * @param id ID del producto
     * @param productData Datos a actualizar
     * @returns Producto actualizado
     * @throws NotFoundError si el producto no existe
     * TODO(reto): Implementar la lógica de actualización
     */
    async updateProduct(id: string, productData: ProductUpdateDTO): Promise<Product> {
      throw new Error('TODO(reto): updateProduct');
    }

    /**
     * Elimina un producto
     * @param id ID del producto
     * @throws NotFoundError si el producto no existe
     * TODO(reto): Implementar la lógica de eliminación
     */
    async deleteProduct(id: string): Promise<void> {
      throw new Error('TODO(reto): deleteProduct');
    }

    /**
     * Lista todos los productos
     * @returns Lista de productos
     * TODO(reto): Implementar la lógica para listar productos
     */
    async listProducts(): Promise<Product[]> {
      throw new Error('TODO(reto): listProducts');
    }
}

// === ARCHIVO: src/repositories/product.repository.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { DynamoDBDocumentClient, PutCommand, GetCommand, UpdateCommand, DeleteCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { Product, ProductCreateDTO, ProductUpdateDTO } from '../models/product.model';
import { NotFoundError } from '../utils/errors.util';

export class ProductRepository {
    private readonly tableName = 'Products';

    constructor(private dynamoDBClient: DynamoDBDocumentClient) {}

    /**
     * Crea un nuevo producto en DynamoDB
     * @param productData Datos del producto
     * @returns Producto creado
     * TODO(reto): Implementar la lógica para crear un producto en DynamoDB
     */
    async create(productData: ProductCreateDTO): Promise<Product> {
      throw new Error('TODO(reto): create');
    }

    /**
     * Obtiene un producto por ID
     * @param id ID del producto
     * @returns Producto encontrado o null si no existe
     * TODO(reto): Implementar GetCommand para obtener el producto
     */
    async findById(id: string): Promise<Product | null> {
        // TODO(reto): Implementar lógica para obtener el producto
        return null;
    }

    /**
     * Actualiza un producto existente
     * @param id ID del producto
     * @param productData Datos a actualizar
     * @returns Producto actualizado
     * @throws NotFoundError si el producto no existe
     * TODO(reto): Implementar UpdateCommand para actualizar el producto
     */
    async update(id: string, productData: ProductUpdateDTO): Promise<Product> {
      throw new Error('TODO(reto): update');
    }

    /**
     * Elimina un producto
     * @param id ID del producto
     * @throws NotFoundError si el producto no existe
     * TODO(reto): Implementar DeleteCommand para eliminar el producto
     */
    async delete(id: string): Promise<void> {
        // TODO(reto): Implementar lógica para eliminar el producto
    }

    /**
     * Lista todos los productos
     * @returns Lista de productos
     * TODO(reto): Implementar ScanCommand para listar productos
     */
    async findAll(): Promise<Product[]> {
        // TODO(reto): Implementar lógica para listar productos
        return [];
    }

    /**
     * Genera un ID único para el producto
     * @returns ID generado
     */
    private generateId(): string {
      throw new Error('TODO(reto): generateId');
    }
}

// === ARCHIVO: src/models/product.model.ts ===
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface ProductCreateDTO {
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface ProductUpdateDTO {
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
}

// === ARCHIVO: src/config/dynamodb.config.ts ===
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, TranslateConfig } from '@aws-sdk/lib-dynamodb';

export const dynamoDBClient = new DynamoDBClient({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
    }
});

const translateConfig: TranslateConfig = {
    marshallOptions: {
        convertEmptyValues: false,
        removeUndefinedValues: true,
        convertClassInstanceToMap: false
    },
    unmarshallOptions: {
        wrapNumbers: false
    }
};

const dynamoDBDocumentClient = DynamoDBDocumentClient.from(dynamoDBClient, translateConfig);

export { dynamoDBDocumentClient };

// === ARCHIVO: src/utils/errors.util.ts ===
export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

export class NotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NotFoundError';
    }
}

export class DatabaseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DatabaseError';
    }
}

/**
 * Maneja errores y envía la respuesta HTTP adecuada
 * @param error Error capturado
 * @param res Objeto de respuesta Express
 */
export function handleError(error: Error, res: any): void {
    if (error instanceof ValidationError) {
        res.status(400).json({ error: error.message });
    } else if (error instanceof NotFoundError) {
        res.status(404).json({ error: error.message });
    } else if (error instanceof DatabaseError) {
        res.status(500).json({ error: 'Error en la base de datos' });
    } else {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

// === ARCHIVO: src/utils/validation.util.ts ===
import { ProductCreateDTO, ProductUpdateDTO } from '../models/product.model';
import { ValidationError } from './errors.util';

/**
 * Valida los datos para crear un producto
 * @param productData Datos del producto
 * @returns Datos validados
 * @throws ValidationError si los datos no son válidos
 */
export function validateProductCreate(productData: any): ProductCreateDTO {
    if (!productData.name || typeof productData.name !== 'string' || productData.name.trim() === '') {
        throw new ValidationError('El nombre del producto es obligatorio');
    }
    if (!productData.description || typeof productData.description !== 'string') {
        throw new ValidationError('La descripción del producto es obligatoria');
    }
    if (typeof productData.price !== 'number' || productData.price <= 0) {
        throw new ValidationError('El precio debe ser un número positivo');
    }
    if (typeof productData.stock !== 'number' || productData.stock < 0) {
        throw new ValidationError('El stock debe ser un número no negativo');
    }
    return productData;
}

/**
 * Valida los datos para actualizar un producto
 * @param productData Datos del producto
 * @returns Datos validados
 * @throws ValidationError si los datos no son válidos
 */
export function validateProductUpdate(productData: any): ProductUpdateDTO {
    if (productData.name !== undefined && (typeof productData.name !== 'string' || productData.name.trim() === '')) {
        throw new ValidationError('El nombre del producto debe ser una cadena no vacía');
    }
    if (productData.description !== undefined && typeof productData.description !== 'string') {
        throw new ValidationError('La descripción del producto debe ser una cadena');
    }
    if (productData.price !== undefined && (typeof productData.price !== 'number' || productData.price <= 0)) {
        throw new ValidationError('El precio debe ser un número positivo');
    }
    if (productData.stock !== undefined && (typeof productData.stock !== 'number' || productData.stock < 0)) {
        throw new ValidationError('El stock debe ser un número no negativo');
    }
    return productData;
}

// === ARCHIVO: src/main.ts ===
import express from 'express';
import { app } from './app';
import { ProductRouter } from './routes/product.router';
import { ProductService } from './services/product.service';
import { ProductRepository } from './repositories/product.repository';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const PORT = process.env.PORT || 3000;

// Punto de entrada: construye el cliente de DynamoDB desde variables de entorno,
// ensambla las capas router -> service -> repository y arranca el servidor.
async function initializeApp(): Promise<void> {
  const awsRegion = process.env.AWS_REGION || 'us-east-1';
  const tableName = process.env.DYNAMODB_TABLE || 'products';

  const dynamoDBClient = new DynamoDBClient({
    region: awsRegion,
    endpoint: process.env.DYNAMODB_ENDPOINT,
    credentials: process.env.AWS_ACCESS_KEY_ID
      ? {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
        }
      : undefined,
  });

  const docClient = DynamoDBDocumentClient.from(dynamoDBClient, {
    marshallOptions: {
      removeUndefinedValues: true,
      convertClassInstanceToMap: true,
    },
  });

  const productRepository = new ProductRepository(docClient);
  const productService = new ProductService(productRepository);
  const productRouter = new ProductRouter(productService);

  app.use('/products', productRouter.getRouter());

  app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error('Error no manejado:', err.message);
    const statusCode =
      err.name === 'ValidationError' ? 400 :
      err.name === 'NotFoundError' ? 404 :
      500;
    res.status(statusCode).json({
      error: err.name || 'Error',
      message: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
    console.log(`Entorno: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Región AWS: ${awsRegion}`);
    console.log(`Tabla DynamoDB: ${tableName}`);
  });
}

initializeApp().catch((error) => {
  console.error('Error al inicializar la aplicación:', error);
  process.exit(1);
});

// === ARCHIVO: src/app.ts ===
import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { ValidationError } from './utils/errors.util';
import { NotFoundError } from './utils/errors.util';
import { DatabaseError } from './utils/errors.util';

export const app: Express = express();

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-ID'],
  exposedHeaders: ['X-Request-ID'],
  credentials: true,
  maxAge: 86400,
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.use((req: Request, res: Response, next: NextFunction) => {
  const requestId = req.headers['x-request-id'] as string || crypto.randomUUID();
  (req as any).requestId = requestId;
  res.setHeader('X-Request-ID', requestId);
  next();
});

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    name: 'reto-express',
    version: '1.0.0',
    description: 'API de gestión de productos con Express y DynamoDB',
    endpoints: {
      products: '/products',
      health: '/health',
    },
    documentation: '/api-docs',
  });
});

app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(new NotFoundError('Ruta no encontrada'));
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Error en la aplicación:', {
    message: err.message,
    name: err.name,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined,
  });

  if (err instanceof ValidationError) {
    return res.status(400).json({
      error: 'ValidationError',
      message: err.message,
      timestamp: new Date().toISOString(),
    });
  }

  if (err instanceof NotFoundError) {
    return res.status(404).json({
      error: 'NotFoundError',
      message: err.message,
      timestamp: new Date().toISOString(),
    });
  }

  if (err instanceof DatabaseError) {
    return res.status(500).json({
      error: 'DatabaseError',
      message: 'Error interno de base de datos',
      timestamp: new Date().toISOString(),
    });
  }

  return res.status(500).json({
    error: 'InternalServerError',
    message: process.env.NODE_ENV === 'production' 
      ? 'Error interno del servidor' 
      : err.message,
    timestamp: new Date().toISOString(),
  });
});

export default app;

// === ARCHIVO: src/tests/product.service.spec.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { ProductService } from '../services/product.service';
import { ProductCreateDTO, ProductUpdateDTO, Product } from '../models/product.model';

describe('ProductService', () => {
  throw new Error('TODO(reto): describe');
});

// === ARCHIVO: src/tests/product.router.spec.ts ===
// TODO(reto): archivo stubbeado; implementa los casos de prueba del CRUD de productos.
import request from 'supertest';
import express, { Express } from 'express';
import { ProductRouter } from '../routes/product.router';
import { ProductService } from '../services/product.service';
import { ProductRepository } from '../repositories/product.repository';

describe.skip('ProductRouter', () => {
  let app: Express;

  beforeAll(() => {
    const service = new ProductService({} as ProductRepository);
    app = express();
    app.use(express.json());
    app.use('/products', new ProductRouter(service).getRouter());
  });

  it('POST /products crea el producto y responde 201', async () => {
    // TODO(reto): arrange con un repositorio en memoria; act con POST; assert de status y cuerpo.
    await request(app).post('/products').send({});
  });

  it('POST /products responde 400 con datos inválidos', async () => {
    // TODO(reto): arrange con precio negativo; act con POST; assert de status 400 y error.
    await request(app).post('/products').send({});
  });

  it('GET /products/:id devuelve el producto existente', async () => {
    // TODO(reto): arrange con un producto guardado; act con GET; assert del cuerpo.
    await request(app).get('/products/existing-id');
  });

  it('GET /products/:id responde 404 cuando no existe', async () => {
    // TODO(reto): arrange sin producto; act con GET; assert de status 404.
    await request(app).get('/products/missing-id');
  });

  it('PUT /products/:id actualiza y responde 200', async () => {
    // TODO(reto): arrange con producto guardado; act con PUT; assert de los campos actualizados.
    await request(app).put('/products/existing-id').send({});
  });

  it('DELETE /products/:id responde 204 y luego 404', async () => {
    // TODO(reto): arrange con producto guardado; act con DELETE; assert de status.
    await request(app).delete('/products/existing-id');
  });

  it('GET /products lista todos los productos', async () => {
    // TODO(reto): arrange con varios productos; act con GET; assert de la longitud del arreglo.
    await request(app).get('/products');
  });
});

// === ARCHIVO: src/types/cors.d.ts ===
declare module 'cors';


// === ARCHIVO: src/types/morgan.d.ts ===
declare module 'morgan';


// === ARCHIVO: docker-compose.yml ===
# Infraestructura local del reto. SOLO desarrollo: credenciales de ejemplo (local-dev-only), puertos en loopback.
# Levantar: docker compose up -d --wait
name: infra-local
services:
  dynamodb-local:
    image: "amazon/dynamodb-local:2.5.2"
    command: ["-jar","DynamoDBLocal.jar","-sharedDb","-inMemory"]
    ports:
      - "127.0.0.1:8000:8000"
    healthcheck:
      test: ["CMD-SHELL","bash -c ':> /dev/tcp/127.0.0.1/8000' || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 5s


// === ARCHIVO: infra-local/README.md ===
# Infraestructura local

Servicios de soporte para el reto, definidos en `docker-compose.yml` (raiz del repo).

```bash
docker compose up -d --wait
```

| Servicio | Imagen | Puertos (host) |
|---|---|---|
| DynamoDB Local | `amazon/dynamodb-local:2.5.2` | 8000 |

Credenciales: solo de desarrollo local (`local-dev-only`, `local`). No son secretos ni deben reutilizarse.
Los scripts de `infra-local/` (tablas, topics) se ejecutan con el compose en estado healthy.


// === ARCHIVO: infra-local/dynamodb/create-tables.sh ===
#!/usr/bin/env bash
# Crea las tablas en DynamoDB Local (idempotente). Credenciales dummy: DynamoDB Local no valida firmas.
set -euo pipefail

export AWS_ACCESS_KEY_ID=local
export AWS_SECRET_ACCESS_KEY=local
export AWS_REGION=us-east-1
ENDPOINT="${DYNAMODB_ENDPOINT:-http://localhost:8000}"

create_table() {
  local name="$1" pk="$2" sk="${3:-}"
  if aws dynamodb describe-table --table-name "$name" --endpoint-url "$ENDPOINT" >/dev/null 2>&1; then
    echo "Tabla $name ya existe"
    return
  fi
  local attrs="AttributeName=$pk,AttributeType=S"
  local keys="AttributeName=$pk,KeyType=HASH"
  if [ -n "$sk" ]; then
    attrs="$attrs AttributeName=$sk,AttributeType=S"
    keys="$keys AttributeName=$sk,KeyType=RANGE"
  fi
  # shellcheck disable=SC2086
  aws dynamodb create-table --table-name "$name" --attribute-definitions $attrs --key-schema $keys \
    --billing-mode PAY_PER_REQUEST --endpoint-url "$ENDPOINT" >/dev/null
  echo "Tabla $name creada"
}

create_table "app-items" "id"

```
