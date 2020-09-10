const { connectionPool } = require('../database/mysql');

/**
 * User model
 */
class User {

  /**
   * Retrieves user object.
   * @param {*} userName
   */
  static async getUser({ userName }) {
    const poolPromise = connectionPool.promise();
    const [rows] = await poolPromise.execute('select * from users where username = ?',
      [userName]);

    if (rows.length === 0) {
      return;
    }
    return rows[0];
  }
}

module.exports = User;