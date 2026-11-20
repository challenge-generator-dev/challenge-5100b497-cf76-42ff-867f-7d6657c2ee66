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