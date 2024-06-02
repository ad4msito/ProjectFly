
const Users = require('../../database/userdb');
// Method to read all users
exports.getAll = async (req, res) => {
  try {
    res.json(Users);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};


// Method to read one user by id
exports.getOne = async (req,res) => {
  try {
    var userId = parseInt(req.params.id); // O puedes obtenerlo de req.params o req.query si es dinámico
    console.log(userId);
    const user = Users.find(u => u.id === userId);
    
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error){
    res.status(500).json({message: 'Error de servidor'});
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
  res.status(201).json({message:'Creado correctamente'});
  }catch(error){
    res.status(500).json({error: 'Error al crear un usuario'});
  }
};

exports.delete = async (req, res) => {
  
    try {
      const userId = req.params.id;
  
      const userIndex = Users.findIndex(u => u.id == userId);
  
      if (userIndex !== -1) {
        // Eliminar el usuario del array
        Users.splice(userIndex, 1);

        res.status(200).json({ mensaje: 'Usuario eliminado correctamente del archivo' });
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error('Error al eliminar usuario del archivo:', error);
      res.status(500).json({ error: 'Error al eliminar usuario del archivo' });
    }
  };
