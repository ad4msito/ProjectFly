const Vuelos = require('../../database/vuelodb.json');
const Links = require('../links')
exports.getVuelos = async (req,res) => {
    try {    
      const resVuelos = {
            Vuelos,
            Links : {
                login:Links.login,
                reservar:Links.CrearReserva
            }
        }
        res.json(resVuelos);
    } catch (err){
        res.status(500).json({message:"error interno del servidor"});
    }
}
exports.getOne = async (req,res) => {
    try {
    var vueloId = parseInt(req.params.id); // O puedes obtenerlo de req.params o req.query si es dinámico
    const vuelo = Vuelos.find(v => v.id === vueloId);
    console.log(vuelo);
    if (vuelo) {
      const resVuelo = {
        Vuelo:vuelo,
        Links:{
          reservar: Links.CrearReserva
        }
      }
      res.json(resVuelo);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error){
    res.status(500).json({message: 'Error interno de servidor'});
  }
}
