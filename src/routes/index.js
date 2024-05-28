// traer pagina a la vista
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('prueba', {nombre: 'home'});
});

module.exports = router;