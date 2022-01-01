const request = require('supertest');
const app = require('../../src/app');

describe('Test Geo JSON Request', () => {
  test('It should response with status code 201', async () => {
    const response = await request(app).get(
      '/geoJson?bbox=36.7710000,10.1737000,36.7862000,10.2074000'
    );
    expect(response.statusCode).toBe(201);
  });

  test('It should response with status code 500', async () => {
    const response = await request(app).get('/geoJson?bbox=36.7710000');
    expect(response.statusCode).toBe(500);
  });
});
