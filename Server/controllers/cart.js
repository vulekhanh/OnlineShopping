const db = require("../models");
const sequelize = require("sequelize");

const Cart = db.Cart;
const Order = db.Order;
const OrderDetail = db.OrderDetail;
const Product = db.Product;
const CartDetail = db.CartDetail;
const Op = sequelize.Op;

// Total
module.exports.getAllCarts = function (req, res, next) {
  Cart.findAll()
    .then((carts) => res.status(200).json(carts))
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};

module.exports.addCart = function (req, res, next) {
  Cart.create({
    userId: 2,
    pay: false,
  })
    .then((cart) => {
      req.body.products.forEach((item) => {
        Product.findOne({
          where: { id: parseInt(item.id) },
        }).then((product) => {
          if (!product) {
            return res.status(400);
          }
          CartDetail.create({
            cartId: cart.id,
            productId: item.id,
            quantity: item.quantity,
            price: product.price,
          });
        });
      });
      return res.status(200).json(cart);
    })
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};

module.exports.deleteCart = function (req, res, next) {
  Cart.findOne({
    where: { id: parseInt(req.params.id) },
  })
    .then((cart) => {
      if (!cart) {
        res.status(400).json("Cart does not exists");
      }
      return cart.destroy();
    })
    .then((deletedCart) => {
      res.status(200).json({
        message: "Delete successful!",
        deletedCart: deletedCart,
      });
    })
    .catch((err) => {
      if (!err.status) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.getACart = function (req, res, next) {
  Cart.findOne({
    where: { id: req.params.id },
  })
    .then((cart) => {
      if (!cart) {
        res.status(400).json("Cannot find any cart");
      }
      res.status(200).json(cart);
      next();
    })
    .catch((err) => {
      if (!err.status) statusCode = 500;
      next(err);
    });
};

module.exports.getAllCartDetails = function (req, res, next) {
  const cartId = req.params.id;

  db.sequelize
    .query(
      `SELECT * FROM CartDetail as cd, Product as p WHERE cd.cartId=${cartId} AND cd.productId=p.id`,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    )
    .then((result) => {
      res.json({ id: cartId, detail: result });
    });
};

module.exports.updateQuantityCartDetail = function (req, res, next) {
  const choice = req.query.choice;
  const cartId = req.params.cartId;
  const productId = req.query.productId;

  CartDetail.findOne({
    where: {
      [Op.and]: [
        {
          productId: productId,
        },
        {
          cartId: cartId,
        },
      ],
    },
  })
    .then((cd) => {
      let updatedQuantity = cd.dataValues.quantity;
      if (choice === "inc") {
        updatedQuantity += 1;
      } else if (choice === "desc") {
        updatedQuantity -= 1;
      } else if (!isNaN(choice)) {
        updatedQuantity = choice;
      } else if (choice === "rm") {
        cd.destroy();
      }
      return cd
        .update({
          quantity: updatedQuantity,
        })
        .then((cd) => {
          if (cd.dataValues.quantity < 1) {
            cd.destroy();
          }
        })
        .then((cd) => {
          res.status(200).json(cd);
        });
    })
    .catch((err) => {
      if (!err.status) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.pay = function (req, res, next) {
  CartDetail.findAll({
    where: {
      cartId: req.body.userId,
    },
  })
    .then((cartDetails) => {
      cartDetails.forEach((item) => {
        item.destroy();
      });
    })
    .then(() => {
      // res.redirect(307, "http://192.168.43.110:3001/order/add");
      Order.create({
        userId: req.body.userId,
        orderDate: new Date(),
      })
        .then((order) => {
          req.body.productsInCart.forEach((item) => {
            OrderDetail.create({
              orderId: order.id,
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
            });
          });
          return res.status(200).json(order);
        })
        .catch((err) => {
          if (!err.status) err.statusCode = 500;
          next(err);
        });
    })
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};
