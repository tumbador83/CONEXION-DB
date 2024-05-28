// const path = require('path');
// const db = require('../database/models');

// const Productos = db.Producto;
// const Categorias = db.Categoria;

// db.sequelize.authenticate()
//   .then(() => {
//     console.log('La conexión a la base de datos se ha establecido correctamente.');
//   })
//   .catch(err => {
//     console.error('No se puede conectar a la base de datos:', err);
//   });

// const productoController = {
//   list: (req, res) => {
//     db.Producto.findAll({
//       include: ['categoria'],
//       order: [['nombre', 'ASC']]
//     })
//     .then((productos) => {
//       res.render('productosList', { productos });
//     })
//     .catch((error) => {
//       res.send(error.message);
//     });
//   },

//   detail: (req, res) => {
//     db.Producto.findByPk(req.params.producto_id, {
//       include: ['categoria']
//     })
//     .then((producto) => {
//       if (producto) {
//         res.render('productosDetail', { producto });
//       } else {
//         res.status(404).send('Producto no encontrado');
//       }
//     })
//     .catch((error) => {
//       res.send(error.message);
//     });
//   },

//   add: (req, res) => {
//     Categorias.findAll()
//     .then((categorias) => {
//       res.render(path.resolve(__dirname, '..', 'views', 'productosAdd'), { categorias });
//     })
//     .catch(err => console.log(err));
//   },

//   create: (req, res) => {
//     Productos.create({
//       nombre: req.body.nombre,
//       descripcion: req.body.descripcion,
//       precio: req.body.precio,
//       stock: req.body.stock,
//       categoria_id: req.body.categoria_id
//     })
//     .then(() => {
//       return res.redirect('/productos');
//     })
//     .catch(err => console.log(err));
//   },

//   edit: (req, res) => {
//     let id = req.params.id;
//     let promProductos = Productos.findByPk(id, { include: ['categoria'] });
//     let promCategorias = Categorias.findAll();
//     Promise.all([promProductos, promCategorias])
//     .then(([Producto, categorias]) => {
//       res.render(path.resolve(__dirname, '..', 'views', 'productosEdit'), { Producto, categorias });
//     })
//     .catch(err => res.send(err));
//   },

//   update: (req, res) => {
//     let id = req.params.id;
//     Productos.update(
//       {
//         nombre: req.body.nombre,
//         descripcion: req.body.descripcion,
//         precio: req.body.precio,
//         stock: req.body.stock,
//         categoria_id: req.body.categoria_id
//       },
//       { where: { producto_id: id } }
//     )
//     .then(() => {
//       return res.redirect('/productos');
//     })
//     .catch(err => console.log(err));
//   },

//   delete: (req, res) => {
//     let id = req.params.id;
//     Productos.findByPk(id)
//     .then((producto) => {
//       if (producto) {
//         res.render(path.resolve(__dirname, '..', 'views', 'productosDelete'), { producto });
//       } else {
//         res.status(404).send('Producto no encontrado');
//       }
//     })
//     .catch(err => res.send(err));
//   },

//   destroy: (req, res) => {
//     let id = req.params.id;
//     Productos.destroy({ where: { producto_id: id } })
//     .then(() => {
//       return res.redirect('/productos');
//     })
//     .catch(err => console.log(err));
//   }
// };

// module.exports = productoController;



//ANDA
const path = require('path');
const db = require('../database/models');

const Productos = db.Producto;

db.sequelize.authenticate()
  .then(() => {
    console.log('La conexión a la base de datos se ha establecido correctamente.');
  })
  .catch(err => {
    console.error('No se puede conectar a la base de datos:', err);
  });

const productoController = {
  list: (req, res) => {
    Productos.findAll()
      .then((productos) => {
        res.render('productosList', { productos });
      })
      .catch((error) => {
        res.send(error.message);
      });
  },

  detail: (req, res) => {
    Productos.findByPk(req.params.id)
      .then((producto) => {
        res.render('productosDetail', { producto });
      })
      .catch((error) => {
        res.send(error.message);
      });
  },

  add: (req, res) => {
    res.render(path.resolve(__dirname, '..', 'views', 'productosAdd'));
  },

  create: (req, res) => {
    Productos.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio,
      stock: req.body.stock
    })
    .then(() => {
      return res.redirect('/productos');
    })
    .catch(err => console.log(err));
  },

  edit: (req, res) => {
    Productos.findByPk(req.params.id)
      .then((producto) => {
        res.render(path.resolve(__dirname, '..', 'views', 'productosEdit'), { producto });
      })
      .catch(err => res.send(err));
  },

  update: (req, res) => {
    Productos.update(
      {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock
      },
      { where: { producto_id: req.params.id } }
    )
    .then(() => {
      return res.redirect('/productos');
    })
    .catch(err => console.log(err));
  },

  delete: (req, res) => {
    Productos.findByPk(req.params.id)
      .then((producto) => {
        res.render(path.resolve(__dirname, '..', 'views', 'productosDelete'), { producto });
      })
      .catch(err => res.send(err));
  },

  destroy: (req, res) => {
    Productos.destroy({ where: { producto_id: req.params.id } })
    .then(() => {
      return res.redirect('/productos');
    })
    .catch(err => console.log(err));
  }
};

module.exports = productoController;

