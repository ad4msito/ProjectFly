
const Users = require('../../database/userdb.json');
const Reservas = require('../../database/reservasdb.json');
const links = require('../links');
// Method to read all users
exports.getAll = async (req, res) => {
  try {
    const resUsers = {
      Users,
      "Links": {
        "login":links.login
      }
  }
    res.json(resUsers);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
// Method to read one user by id
exports.getOne = async (req,res) => {
  try {
    var userId = parseInt(req.params.id); // O puedes obtenerlo de req.params o req.query si es dinámico
    const user = Users.find(u => u.id === userId);
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error){
    res.status(500).json({message: 'Error interno de servidor'});
  }
};

// Method to create an user
exports.create = async (req,res) =>{
  try {
    const newUser = req.body;
    const highestId = Users.reduce((maxId, user) => Math.max(maxId, user.id), 0);
    const newId = highestId + 1;
  
    const userToAdd = {
      id:newId,
      user:newUser.user,
      pass:newUser.pass
    };

  Users.push(userToAdd);
    const resCreate = {
      "message": `Usuario creado: ${userToAdd}`,
      "Links": {
        "login":links.login
      }
    }
  res.status(201).json(resCreate);
  }catch(error){
    res.status(500).json({error: 'Error interno del servidor'});
  }
};
// method to delete an user
exports.delete = async (req, res) => {
  
    try {
      const userId = req.params.id;
  
      const userIndex = Users.findIndex(u => u.id == userId);
  
      if (userIndex !== -1) {
        Users.splice(userIndex, 1);
        res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
//log in method
exports.login = async (req,res) => {
  try {  
    const {user, pass} = req.body;
    const foundUser = Users.find(u => u.user === user && u.pass === pass);
    if(!foundUser){
      res.status(401).json({message:"Credenciales invalidas."});
    }
    req.session.user = foundUser;
    const resLogin = {
      "message":"Se ha iniciado sesion de manera satisfactoria",
      "Links":{
        "Reservas":links.Reservas,
        "Vuelos":links.Vuelos,
        "Logout":links.Logout
      }
    }
    res.json(resLogin);
    // console.log("usuario:" + req.session.user.user); 
  } catch (err){
    res.status(500).json({error:"Error interno del servidor"})
  }
}
//log out method
exports.getReservas = async (req,res) =>{
  //primero verificar que haya anteriormente un inicio de sesion.
  if (!req.session || !req.session.user || !req.session.user.id) {
    const resMsg = {
      "message": "Sesion expirada",
      links: {
        "login":links.login
    }
  }
    res.status(419).json(resMsg);
  } else {
    const userID  = req.session.user.id;
    try {
      const reservasCli = []
      Reservas.forEach((reserva) =>{
        console.log(`id_cliente: ${reserva.cliente_id} cliente: ${userID}`);
        if(reserva.cliente_id===userID){
          reservasCli.push(reserva);
        }
      })
      res.json(reservasCli);
    } catch(err){
      res.status(500).json({error:"Error interno del servidor"})
    }
  }
}

