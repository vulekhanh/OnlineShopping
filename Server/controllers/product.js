const db = require("../models");
const sequelize = require("sequelize");
const Product = db.Product;
const Cart = db.Cart;
const CartDetail = db.CartDetail;
const Op = sequelize.Op;

module.exports.getAllProducts = function (req, res, next) {
  Product.findAll()
    .then((order) => res.status(200).json(order))
    .catch((err) => {
      if (!err.status) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.addProduct = function (req, res, next) {
  Product.findOne({
    where: {
      title: req.body.title,
    },
  })
    .then((product) => {
      if (product) {
        return res.status(400).json("This product already exists!");
      }
      Product.create({
        title: req.body.title,
        available: req.body.available,
        price: req.body.price,
        description: req.body.description,
        type: req.body.type,
        imageUrl: req.body.imageUrl,
      })
        .then((product) => res.status(200).json(product))
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

module.exports.updateProduct = function (req, res, next) {
  Product.findOne({
    where: {
      id: {
        [Op.substring]: req.body.id,
      },
    },
  })
    .then(function (product) {
      product
        .update({
          available: req.body.available,
          type: req.body.type,
          price: req.body.price,
          description: req.body.description,
          imageUrl: req.body.imageUrl,
        })
        .then((product) => {
          if (!product) {
            return res.status(400).json("This product does not exist!");
          }
          res.status(200).json(product);
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

module.exports.deleteProductById = function (req, res, next) {
  const deletedProductId = req.params.id;
  Product.findOne({
    where: { id: deletedProductId },
  })
    .then((product) => {
      if (!product) {
        return res.status(400).json("This product does not exist!");
      }
      return product.destroy();
    })
    .then((deletedProduct) => {
      res.status(201).json(deletedProduct);
    })
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};

module.exports.getAProduct = function (req, res, next) {
  Product.findOne({
    where: { id: req.params.id },
  })
    .then((product) => {
      if (product) {
        res.status(200).json(product);
      }
    })
    .catch((err) => {
      if (!err.status) statusCode = 500;
      next(err);
    });
};

module.exports.addToCart = function (req, res, next) {
  const productId = req.params.id;
  const cartId = req.body.cartId;

  const addedProduct = Product.findOne({
    where: { id: productId },
  });

  const checkedCartDetail = addedProduct
    .then((product) => {
      return CartDetail.findOne({
        where: {
          cartId: cartId,
          productId: product.id,
        },
      });
    })
    .catch((err) => {
      if (!err.status) {
        err.statusCode = 500;
      }
    });

  return Promise.all([addedProduct, checkedCartDetail])
    .then(([product, cartDetail]) => {
      if (!cartDetail) {
        CartDetail.create({
          cartId: cartId,
          productId: product.id,
          quantity: 1,
          price: product.price,
        }).then((newCartDetail) => res.status(200).json(newCartDetail));
      } else {
        res.redirect(
          `/cart/${cartId}/updateQuantity/?productId=${productId}&choice=inc`
        );
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

///////////////////////////
module.exports.searchProducts = function (req, res, next) {
  const productInfo = req.query.v; // {p: 'The'}
  Product.findAll({
    where: {
      [Op.or]: [
        {
          title: {
            [Op.substring]: productInfo,
          },
        },
        {
          type: {
            [Op.substring]: productInfo,
          },
        },
      ],
    },
  })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};

module.exports.filterProductsByType = function (req, res, next) {
  const productInfo = req.query.v; // {p: 'The'}
  Product.findAll({
    where: {
      [Op.or]: [
        {
          type: {
            [Op.substring]: productInfo,
          },
        },
      ],
    },
  })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      if (!err.status) err.statusCode = 500;
      next(err);
    });
};

module.exports.getProductCount = function (req, res, next) {
  // count => trả về number => k cho phép trả về nên bad request nên phải chuyển từ number sang string
  Product.count()
    .then((count) => res.status(200).json(count))
    .catch((err) => {
      if (!err.status) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.getBestSeller = function (req, res) {
  //  sequelize.query("SELECT TOP 1 B.title, SUM(C.quantity)" +
  //  " FROM(OrderDetail C JOIN Product B ON C.id = B.id) JOIN Order O ON C.id = O.id" +
  //  " WHERE MONTH(O.date) = MONTH(GETDATE()) AND YEAR(DATE) = YEAR(GETDATE())" +
  //  " GROUP BY B.id, title ORDER BY SUM(C.quantity) DESC")
  //     .then((book) => res.status(200).send(book))
  //     .catch((err) => res.status(400).send(err.message))
};

module.exports.getAvailableProducts = (req, res, next) => {
  Product.findAll({
    where: {
      available: true,
    },
  })
    .then((products) => res.status(200).json(products))
    .catch((err) => {
      if (!err.status) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.filterByPrice = (req, res, next) => {
  const maxPrice = req.body.max || 0;
  const minPrice = req.body.min || 0;
  Product.findAll({
    where: {
      [Op.and]: [
        {
          price: {
            [Op.lt]: maxPrice,
          },
        },
        {
          price: {
            [Op.gt]: minPrice,
          },
        },
      ],
    },
  })
    .then((products) => res.status(200).json(products))
    .catch((err) => {
      if (!err.status) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.filterByType = (req, res, next) => {
  const productType = req.body.type;

  Product.findAll({
    where: {
      type: productType,
    },
  })
    .then((order) => res.status(200).json(order))
    .catch((err) => {
      if (!err.status) {
        err.statusCode = 500;
      }
      next(err);
    });
};
