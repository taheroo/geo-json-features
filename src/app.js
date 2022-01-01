const express = require('express');
const http = require('http');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const geoJsonApi = require('./api/geoJson');

const port = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(geoJsonApi);

app.all('*', (req, res) => {
  res.status(200).send({ message: 'Version 1.0' });
});

const server = http.createServer(app);

if (process.env.NODE_ENV !== 'test') {
  server.listen(port, () => {
    console.log(`Server is up on port : ${port}`);
  });
}

module.exports = app;
