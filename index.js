import express from 'express';
import router from './routes/helpRoutes.js';

var app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use('/api', router);