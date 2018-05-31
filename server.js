const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8000;

app.use('/dist', express.static(path.resolve(__dirname, './dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Miria's Gate served on ${port}`));
