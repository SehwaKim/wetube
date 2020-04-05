import express from 'express';
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log('Listening on: http://localhost:4000');
};

const handleHome = (req, res) => {
  console.log(req);
  res.send('<h1>hello from home~!</h1>');
};

const handleProfile = (req, res) => {
  res.send('<strong>You are on my profile</strong>');
};

app.get('/', handleHome);

app.get('/profile', handleProfile);

app.listen(PORT, handleListening);
