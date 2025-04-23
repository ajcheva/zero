import request from 'supertest';
import { app, prisma } from './index';

describe('API básica', () => {
  it('GET /api/users → 200 y un array', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // ... más tests si los tienes ...
});

afterAll(async () => {
  // Esto cierra la conexión a la BD y permite que Jest termine
  await prisma.$disconnect();
});