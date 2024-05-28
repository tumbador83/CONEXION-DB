        
  // module.exports = (sequelize, DataTypes) => {
  //   let alias = 'Producto';
  //   let cols = {
  //     producto_id: {
  //       type: DataTypes.INTEGER,
  //       primaryKey: true,
  //       allowNull: false,
  //       autoIncrement: true
  //     },
  //     nombre: {
  //       type: DataTypes.STRING(255),
  //       allowNull: false
  //     },
  //     descripcion: {
  //       type: DataTypes.STRING(255), // Puedes cambiar a TEXT si lo prefieres
  //       allowNull: false
  //     },
  //     precio: {
  //       type: DataTypes.DECIMAL(10, 2),
  //       allowNull: false
  //     },
  //     stock: {
  //       type: DataTypes.INTEGER,
  //       allowNull: false
  //     },
  //     categoria_id: {
  //       type: DataTypes.INTEGER,
  //       references: {
  //         model: 'categorias',
  //         key: 'categoria_id'
  //       }
  //     }
  //   };
  //   let config = {
  //     tableName: 'productos',
  //     timestamps: false
  //   };
    
  //   const Producto = sequelize.define(alias, cols, config);
    
  //   Producto.associate = function(models) {
  //     Producto.belongsTo(models.Categoria, {
  //       as: 'categoria',
  //       foreignKey: 'categoria_id'
  //     });
  //   };
    
  //   return Producto;
  // };
  
  module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('Producto', {
      producto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      descripcion: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'productos',
      timestamps: false
    });
  
    return Producto;
  };
  

