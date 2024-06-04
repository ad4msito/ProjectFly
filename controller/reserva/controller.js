const Reservas = require('../../database/reservasdb.json');
const links = require('../links')
exports.createReserva = async (req,res) =>{
    try {
        const highestId = Reservas.reduce((maxId, reserva) => Math.max(maxId, reserva.id), 0);
        const newId = highestId + 1;
      
        const reservToAdd = {
          id: newId,
          cliente_id: req.session.user.id,
          vuelo_id: req.params.vuelo_id,
        };
    
      Reservas.push(reservToAdd);
      const resCreateRes = {
        message: `Reserva creada ${reservToAdd}`,
        "Links":{
            "reservas":links.Reservas,
            "logout":links.Logout
        }
      }
      res.json(resCreateRes)
    } catch (err){
        res.status(500).json({message:"Error interno del servidor"})
    }
}
