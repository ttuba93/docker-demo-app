const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const APP_MESSAGE = process.env.APP_MESSAGE || 'Hello from Docker!';

app.get('/', (req, res) => {
  res.json({
    message: APP_MESSAGE,
    hostname: require('os').hostname(),
    time: new Date().toISOString(),
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
  console.log(`Message: ${APP_MESSAGE}`);
});
