"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("OrderDetail", {
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Order",
          key: "id",
          allowNull: true,
          as: "orderId",
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
    return queryInterface.dropTable("OrderDetail");
  },
};
