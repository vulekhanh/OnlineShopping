const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const attributes = {
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
  };
  const options = {
    tableName: "CartDetail",
    comment: "",
    indexes: [],
  };
  const CartDetail = sequelize.define("CartDetail", attributes, options);
  return CartDetail;
};
