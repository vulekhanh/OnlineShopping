const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const attributes = {
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  };
  const options = {
    tableName: "Order",
    comment: "",
    indexes: [],
  };
  const Order = sequelize.define("Order", attributes, options);
  Order.associate = function (models) {
    Order.belongsTo(models.User, {
      foreignKey: "userId",
      as: "Users",
    });

    Order.belongsToMany(models.Product, {
      through: "OrderDetail",
      as: "Products",
      foreignKey: "orderId",
      otherKey: "productId",
      onDelete: "cascade",
    });
  };
  return Order;
};
