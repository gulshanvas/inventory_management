
/**
 * It contains various utility methods.
 */
class Util {

  /**
   * It returns current timestamp.
   */
  static getTimestamp() {
    return Math.floor((new Date()).getTime() / 1000);
  }

}

module.exports = Util;