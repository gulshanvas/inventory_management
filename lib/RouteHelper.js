const CookieHelper = require('./CookieHelper');

/**
 * Helper class which is the redirection point from route layer.
 * It calls the service, parse the response and returns it.
 */
class RouteHelper {

  /**
   * Main performer of the class.
   * @param {*} req request object
   * @param {*} res response object
   * @param {*} service Service name to be called.
   */
  static async perform(req, res, service) {

    const Service = require('../service' + service);

    const serviceParams = Object.assign(req.internalDecodedParams, req.params, req.body, req.query);

    const serviceObj = new Service(serviceParams);

    try {
      const response = await serviceObj.perform();

      if (typeof response.set === 'object' ) {
        const cookieFromService = response.set;
        CookieHelper.setCookiesFromServiceInResponse(res, cookieFromService);
      }

      if (response.remove && response.remove.length > 0 ) {
        const cookieFromService = response.remove;
        CookieHelper.setCookiesFromServiceInResponse(res, cookieFromService);
      }

      return res.status(200).json(response);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}

module.exports = RouteHelper;