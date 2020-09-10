const express = require('express');
const authRoute = require('./auth/index');
const globalConstant = require('../constant/globalConstant');
const productRoute = require('./product/index');
const JWTHelper = require('../lib/auth/JWTToken');

const router = express.Router();

router.use('/auth', authRoute);

// Middleware which restricts to non-logged user to do operations on products.
router.use(function (req, res, next) {

  try {
    const loginCookie = req.cookies[globalConstant.loginCookieName];
    JWTHelper.verifyLoginCookie(loginCookie);
  }
  catch (err) {
    return res.json({ message: 'User verification failed' });
  }

  next();
});

router.use('/product', productRoute)

module.exports = router;