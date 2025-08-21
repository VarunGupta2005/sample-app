const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('good mornin');
});

app.listen(PORT, () => console.log(`Nodde apffffp listening on port ${PORT}`));   