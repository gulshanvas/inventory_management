const express = require('express');
const RouteHelper = require('../../lib/RouteHelper');
const Util = require('../../lib/Util');

const router = express.Router();

router.post('/create', async function (
  req,
  res,
  next
) {

  return RouteHelper.perform(req, res, '/product/Create');

});

router.post('/delete', async function (
  req,
  res,
) {

  return RouteHelper.perform(req, res, '/product/Delete');

});

router.get('/list', async function (
  req,
  res,
) {

  return RouteHelper.perform(req, res, '/product/List');

});

router.get('/view', async function (
  req,
  res,
) {

  return RouteHelper.perform(req, res, '/product/View');

});

router.delete('/delete', async function (
  req,
  res,
) {

  return RouteHelper.perform(req, res, '/product/Delete');

});

module.exports = router;