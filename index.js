const express = require('express');
const app = express();
const fs = require('fs');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data file');
    } else {
      const parsedData = JSON.parse(data);
      res.render('main', { data: parsedData });
    }
  });
});

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
