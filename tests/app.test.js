const request = require('supertest');
const app = require('../src/app');

describe('Test server status health', () => {
  test('It should response with status code 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
