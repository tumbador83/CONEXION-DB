// 'use strict';
// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('Productos', {
//       productos_id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       nombre: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       descripcion: {
//         type: Sequelize.STRING
//       },
//       precio: {
//         type: Sequelize.DECIMAL,
//         allowNull: false
//       },
//       // stock: {
//       //   type: Sequelize.INTEGER,
//       //   allowNull: false
      
//       // createdAt: {
//       //   allowNull: false,
//       //   type: Sequelize.DATE
//       // },
//       // updatedAt: {
//       //   allowNull: false,
//       //   type: Sequelize.DATE
//       // },
//     })
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('Productos');
//   }
// };