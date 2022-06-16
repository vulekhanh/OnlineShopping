const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");

router.get("/", orderController.getOrders);

router.post("/search", orderController.searchOrder);

router.post("/add", orderController.addOrder);

router.put("/update", orderController.updateOrder);

router.get("/:id", orderController.getAnOrder);

router.delete("/delete/:id", orderController.deleteOrder);

router.get("/:id/total", orderController.getTotal);

module.exports = router;
