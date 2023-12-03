const epxress = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = epxress();

app.use(epxress.json());
app.use(cors());
app.use('/', routes);


module.exports = app;