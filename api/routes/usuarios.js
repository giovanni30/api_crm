const express = require('express');
const routes = express.Router();
const usuarioController = require('../controllers/usuarioController');

routes.get('/',
usuarioController.listarUsuario
);
routes.get('/:id',
usuarioController.listarunUsuario
);
routes.post('/',
usuarioController.crearUsuario
);

routes.delete('/:id', 
usuarioController.eliminarUsuario
);

routes.put('/:id',
usuarioController.actualizarUsuario
);



module.exports = routes