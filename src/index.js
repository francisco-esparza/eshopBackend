// @ts-nocheck
require('dotenv').config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

// Connection ORM Sequilize
const sequelize = require('./database/db.sql');

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json({limit:'100MB'}));
app.use(express.urlencoded({ extended: true, limit: '100MB' }));

//Declaramos las rutas segun la version de la API
app.use('/v1', require('./routes/v1'));

//Portada de la API
app.use(express.static(path.join(__dirname, 'public'))); 

// Mostrar imagenes mediante URL
app.get('/image/:id', async (req, res) => {
  const file = path.join(process.cwd(),`/src/files/imgs/${req.params.id}`);
  res.sendFile(file);
});

//Iniciamos el servidor
var server = app.listen(port, function(){
  console.log('Listening on port ' + port);
  sequelize.sync({ force: false })
  .then(() => console.log("Mysql is connect!"))
  .catch(error => console.log('Error: ', error))
});