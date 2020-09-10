const globalConstant = require('../constant/globalConstant');

/**
 * Helper class which contains methods to deal with cookies.
 */
class CookieHelper {

  /**
   * Set the cookies for the response.
   * @param {*} res response object.
   * @param {*} cookiesFromService Map of cookies from service.
   */
  static setCookiesFromServiceInResponse(res, cookiesFromService) {
    for (const key in cookiesFromService) {
      res.cookie(key, cookiesFromService[key]);
    }
  }

  /**
   * Removes the list of cookies from response.
   * @param {*} res response object.
   * @param {*} cookiesFromService Map of cookies from service.
   */
  static removeCookiesFromServiceInResponse(res, cookiesFromService) {
    
    cookiesFromService.forEach(function(element) {
      res.clearCookie(element);
    });
  }

  /**
   * Parses the login token and sets in request object.
   * @param {*} req request object
   * @param {*} res response object
   * @param {*} next function
   */
  static parseLoginCookie(req, res, next) {
    req.internalDecodedParams = {};

    req.internalDecodedParams.loginCookie = req.cookies[globalConstant.loginCookieName];

    next();
  }
}

module.exports = CookieHelper;