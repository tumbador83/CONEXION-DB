const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');

const indexRoutes = require('./routes/index');
// const productoController = require('./controller/productoController');
const productoRouter = require('./routes/productoRoutes')



// motor de vistas
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', express.urlencoded({extended:false}));
app.use('/', express.json());
app.use(methodOverride('_method'));
app.use(express());



app.listen(3000,() =>{
  console.log('Servidor corriendo en el puerto 3000');
})
//rutas
app.use('/', indexRoutes);
app.use(productoRouter);

// Manejador de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

