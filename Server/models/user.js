"use strict";
module.exports = (sequelize, DataTypes) => {
  const options = {
    tableName: "User",
    comment: "",
    indexes: [],
    timestamps: true,
    paranoid: true,
  };
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    options
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
