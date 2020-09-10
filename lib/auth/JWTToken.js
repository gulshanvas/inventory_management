const jwtToken = require('jsonwebtoken');

/**
 * Class which provides helper methods to generate and verify secure jwt tokens
 */
class JWTToken {

  /**
   * It generates secret jwt token using payload with expiration.
   * 
   * @param {string} payload 
   */
  static generateToken(payload) {
    const secretToken = jwtToken.sign(payload, process.env.JWT_SECRET_KEY, {
      algorithm: 'HS256',
      expiresIn: 300 * 30
    });
    return secretToken;
  }

  /**
   * It verifies login cookie.
   * 
   * @param {string} loginCookie 
   */
  static verifyLoginCookie(loginCookie) {
    let decodedObject;
    const object = jwtToken.decode(loginCookie);
    decodedObject = jwtToken.verify(loginCookie, process.env.JWT_SECRET_KEY);

    return decodedObject;
  }

  /**
   * It generates login cookie from user object.
   * @param {object} userObj Object representing user in the model.
   */
  static generateUserLoginToken({ userName }) {
    const payload = {
      userName
    };
    return JWTToken.generateToken(payload);

  }

}

module.exports = JWTToken;