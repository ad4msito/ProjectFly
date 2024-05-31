const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 8078;

app.listen(port, () => {
  console.log('Servidor escuchando en el puerto ' + port);
});