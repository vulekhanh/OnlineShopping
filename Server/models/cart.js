const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const attributes = {
    pay: DataTypes.BOOLEAN,
  };
  const options = {
    tableName: "Cart",
    comment: "",
    indexes: [],
  };
  const Cart = sequelize.define("Cart", attributes, options);
  Cart.associate = function (models) {
    Cart.belongsTo(models.User, {
      foreignKey: "userId",
      as: "Users",
    });

    Cart.belongsToMany(models.Product, {
      through: "CartDetail",
      as: "Products",
      foreignKey: "cartId",
      otherKey: "productId",
      onDelete: "cascade",
    });
  };
  return Cart;
};
