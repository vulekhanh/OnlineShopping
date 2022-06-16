"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("CartDetail", {
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Cart",
          key: "id",
          allowNull: true,
          as: "cartId",
        },
        onDelete: "cascade",
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Product",
          key: "id",
          allowNull: true,
          as: "productId",
        },
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("CartDetail");
  },
};
