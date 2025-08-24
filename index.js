const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('really daaddy!!!!!!!!!!');
});

app.listen(PORT, () => console.log(`Node app listening on port ${PORT}`));