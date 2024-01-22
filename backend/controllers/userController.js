// controllers/userController.js
const User = require('../models/modeluser');

exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();
    res.json({ success: true, message: 'Registro exitoso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      // Usuario encontrado, credenciales correctas
      res.json({ success: true, message: 'Inicio de sesión exitoso' });
    } else {
      // Usuario o contraseña incorrectos
      res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
};
