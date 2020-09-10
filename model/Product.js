const { connectionPool } = require('../database/mysql');
const Util = require('../lib/Util');
const productConstant = require('../constant/product');

/**
 * It contains method to interact with product db.
 */
class Product {

  /**
   * Creates a new record in the database.
   * @param {*} params 
   */
  static async create(params) {
    const poolPromise = connectionPool.promise();
    const currentTimestamp = Util.getTimestamp();
    await poolPromise.execute('insert into products (name, price, company_name, count, status, created_at, updated_at) values(?,?,?,?,?,?,?)',
      [params.productName, params.price, params.companyName, params.productCount, productConstant.active, currentTimestamp, currentTimestamp]);
  }

  /**
   * It provides list of all the active products.
   */
  static async list() {
    const poolPromise = connectionPool.promise();

    const response = await poolPromise.query('select * from products where status = ?', [productConstant.active]);

    return response[0];

  }

  /**
   * It returns a product details.
   */
  static async view(params) {
    const poolPromise = connectionPool.promise();

    const response = await poolPromise.query('select * from products where status = ? and name = ?', [productConstant.active, params.productName]);
    return response[0];

  }

  /**
   * It deletes the products based on id.
   * @param {*} params 
   */
  static async delete(params) {
    const poolPromise = connectionPool.promise();

    const response = await poolPromise.execute('update products set status = ? where name = ?',
      [productConstant.deleted, params.productName]);

    return response[0];
  }

  /**
   * Unique key index name in Products model.
   */
  static uniqueKeyIndexName() {
    return 'products.uk_1';
  }

  /**
   * Returns true if `err`is due to unique key constraint. 
   * @param {object} err Error object
   * @param {string} uniqueIndexName unique key index name
   */
  static isUniqueConstraintViolation(err) {
    return (err.message.indexOf(SymbolCount.uniqueKeyIndexName()) === -1 ? 0 : 1);
  }
}

module.exports = Product;