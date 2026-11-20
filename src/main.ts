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