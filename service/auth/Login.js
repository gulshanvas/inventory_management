const JWTTokenLib = require('../../lib/auth/JWTToken');
const UserModel = require('../../model/User');
const globalConstant = require('../../constant/globalConstant');

/**
 * Login service
 */
class Login {

  /**
   * Constructor
   * @param {*} params 
   * @param {string} params.userName 
   * @param {string} params.password 
   */
  constructor(params) {
    this.userName = params.userName;
    this.password = params.password;
  }

  /**
   * Main performed of class
   */
  async perform() {
    await this._validate();
    this._getLoginToken();
    
    return this._prepareResponse();
  }

  /**
   * Validates the user name
   */
  async _validate() {
    const userObj = await UserModel.getUser({ userName: this.userName });
    if (!userObj) {
      return Promise.reject({
        message: 'Invalid user'
      });
    }
  }

  /**
   * Retrieves the login token.
   */
  _getLoginToken() {
    this.loginToken = JWTTokenLib.generateUserLoginToken({ userName: this.userName });
  }

  /**
   * Prepares response.
   */
  _prepareResponse() {
    return {
      set: {
        [globalConstant.loginCookieName]: this.loginToken
      }
    }
  }
}

module.exports = Login;
