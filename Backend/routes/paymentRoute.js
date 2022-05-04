const express = require("express");
const { Payment, sendStripeApiKey } = require("../controller/paymentController");
const { AuthUser } = require("../Middleware/auth");
const router = express.Router();

router.route("/payment/process").post(AuthUser, Payment);

router.route("/stripeapikey").get(AuthUser, sendStripeApiKey);

module.exports = router;
