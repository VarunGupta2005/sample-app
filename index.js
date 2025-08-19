const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from my AUTOMfAgTI CALLY ydh jfd  oksy h eplofyed Node.js app yay!');
});

app.listen(PORT, () => console.log(`Nodde app listening on port ${PORT}`));