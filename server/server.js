const express = require('express');
const superagent = require('superagent');
const cors = require('cors');
const config = require('./config');
const app = express();
const port = 8080;

app.use(cors());

app.get('/*', (req, res) => {
  const url = `${config.API_URL}${req.url}`;

  superagent
    .get(url)
    .set('X-CMC_PRO_API_KEY', config.API_KEY)
    .set('Accept', 'application/json')
    .then((result) => {
      return res.status(result.status).send(result.body);
    })
    .catch((e) => {
      res.send(e);
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
