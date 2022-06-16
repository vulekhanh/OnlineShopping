"use strict";
module.exports = (sequelize, DataTypes) => {
  const options = {
    tableName: "Product",
    comment: "",
    indexes: [],
    timestamps: true,
    paranoid: true,
  };
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    options
  );
  Product.associate = function (models) {
    Product.belongsToMany(models.Order, {
      through: "OrderDetail",
      as: "Orders",
      foreignKey: "productId",
      otherKey: "orderId",
    });
  };
  return Product;
};
