const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const APP_MESSAGE = process.env.APP_MESSAGE || 'Hello from Docker!';

let visitCount = 0;

const bts_songs = [
  { title: 'Dynamite', year: 2020 },
  { title: 'Butter', year: 2021 },
  { title: 'Spring Day', year: 2017 },
  { title: 'Fake Love', year: 2018 },
  { title: 'Boy With Luv', year: 2019 },
  { title: 'ON', year: 2020 },
  { title: 'DNA', year: 2017 },
  { title: 'Mic Drop', year: 2017 },
];

app.get('/', (req, res) => {
  visitCount++;
  res.json({
    message: APP_MESSAGE,
    visits: visitCount,
    hostname: require('os').hostname(),
    time: new Date().toISOString(),
  });
});

app.get('/song', (req, res) => {
  const song = bts_songs[Math.floor(Math.random() * bts_songs.length)];
  res.json({ artist: 'BTS', song: song.title, year: song.year });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
  console.log(`Message: ${APP_MESSAGE}`);
});