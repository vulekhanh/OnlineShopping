const db = require("../models");
const sequelize = require("sequelize");
const { body } = require("express-validator");
const User = db.User;
const Order = db.Order;
const Cart = db.Cart;
const Op = sequelize.Op;

// Total
module.exports.getAllUsers = function (req, res, next) {
  User.findAll()
    .then((users) => res.status(200).json(users))
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};

module.exports.getCartOfUser = function (req, res, next) {
  const userId = req.params.id;

  Cart.findOne({
    where: {
      userId: userId,
    },
  })
    .then((cart) => {
      res.redirect(`/cart/${cart.dataValues.id}/detail`);
    })
    .catch((err) => {
      if (!err.status) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.getUserIdByName = function (req, res, next) {
  User.findOne({
    where: {
      username: req.query.username,
    },
  })
    .then((user) => {
      res.redirect(`/user/${user.id}/getCart`);
    })
    .catch((err) => {
      if (!err.status) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.getAllOrders = function (req, res, next) {
  const userId = req.params.id;
  Order.findAll({
    where: {
      userId: userId,
    },
  })
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((err) => {
      if (!err.status) {
        err.statusCode = 500;
      }
    });
};

// module.exports.addCart = function (req, res, next) {
//   User.create({
//     userId: 2,
//     pay: false,
//   })
//     .then((cart) => {
//       req.body.products.forEach((item) => {
//         Product.findOne({
//           where: { id: parseInt(item.id) },
//         }).then((product) => {
//           if (!product) {
//             return res.status(400);
//           }
//           Cart.create({
//             cartId: cart.id,
//             productId: item.id,
//             quantity: item.quantity,
//             price: product.price,
//           });
//         });
//       });
//       return res.status(200).json(cart);
//     })
//     .catch((err) => {
//       if (!err.status) err.statusCode = 500;
//       next(err);
//     });
// };

// module.exports.updateCart = function (req, res) {};

// module.exports.deleteCart = function (req, res, next) {
//   User.findOne({
//     where: { id: parseInt(req.params.id) },
//   })
//     .then((cart) => {
//       if (!cart) {
//         res.status(400).json("User does not exists");
//       }
//       return cart.destroy();
//     })
//     .then((deletedCart) => {
//       res.status(200).json({
//         message: "Delete successful!",
//         deletedCart: deletedCart,
//       });
//     })
//     .catch((err) => {
//       if (!err.status) {
//         err.statusCode = 500;
//       }
//       next(err);
//     });
// };

// module.exports.getACart = function (req, res, next) {
//   User.findOne({
//     where: { id: req.params.id },
//   })
//     .then((cart) => {
//       if (cart) {
//         res.status(200).json(cart);
//       }
//       next();
//     })
//     .catch((err) => {
//       if (!err.status) statusCode = 500;
//       next(err);
//     });
// };
