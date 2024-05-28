

const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController');

router.get('/productos', productoController.list);
router.get('/productos/detail/:id', productoController.detail);
router.get('/productos/add', productoController.add);
router.post('/productos/create', productoController.create);
router.get('/productos/edit/:id', productoController.edit);
router.put('/productos/update/:id', productoController.update);
router.get('/productos/delete/:id', productoController.delete);
router.put('/productos/delete/:id', productoController.destroy);

module.exports = router;







