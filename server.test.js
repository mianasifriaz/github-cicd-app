const request = require('supertest');
const app = require('./server');

describe('API Tests', () => {
  test('GET /health should return 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  test('GET /api/users should return array', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/users should create user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'David', role: 'DevOps' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('David');
  });
});
