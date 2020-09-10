const express = require('express');
const globalConstants = require('../../constant/globalConstant');
const RouteHelper = require('../../lib/RouteHelper');

const router = express.Router();

router.post('/login', async function (
  req,
  res,
  next
) {

  return RouteHelper.perform(req, res, '/auth/Login');

});

router.post('/logout', async function (
  req,
  res,
) {

  res.clearCookie(globalConstants.loginCookieName);

  return res.status(200).json({ message: 'Logged out successfully' })

});

module.exports = router;