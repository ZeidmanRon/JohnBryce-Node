const express = require('express');
const axios = require('axios');
const xml2js = require('xml2js');

const app = express();
const port = 3000;

// Middleware for bearer token authentication
const authenticate = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (bearerToken === 'Bearer 123') {
    next();
  } else {
    res.sendStatus(401);
  }
};

// Middleware to check if the request is a GET '/users' endpoint
const checkEndpoint = (req, res, next) => {
  if (req.method === 'GET' && req.path === '/users') {
    next();
  } else {
    res.sendStatus(404);
  }
};

app.use(authenticate);
app.use(checkEndpoint);

app.get('/users', async (req, res) => {
  try {
    const format = req.query.format || 'json';
    const offset = parseFloat(req.query.offset) || 0;
    const limit = parseFloat(req.query.limit) || 10;

    // Fetching users data from the given API
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    let users = response.data;

    // Applying pagination
    users = users.slice(offset, offset + limit);

    if (format === 'xml') {
      // Convert users data to XML
      const xmlBuilder = new xml2js.Builder({ rootName: 'users', headless: true });
      const xml = xmlBuilder.buildObject({ user: users });
      res.set('Content-Type', 'application/xml');
      res.send(xml);
    } else {
      // Return users data as JSON by default
      res.json(users);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
