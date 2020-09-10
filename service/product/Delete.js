const ProductModel = require('../../model/Product');

/**
 * Delete service
 */
class Delete {

  /**
   * Constructor
   * @param {*} params 
   */
  constructor(params) {
    this.productName = params.productName;
  }

  /**
   * Main performer
   */
  async perform() {
    await this._fetchFromProduct();
    return this._prepareResponse();
  }

  /**
   * 
   */
  async _fetchFromProduct() {
    this.response = await ProductModel.delete({ productName: this.productName });

    if (!this.response.affectedRows) {
      return Promise.reject({ msg: 'Product not found.' });
    }

    if (!this.response.changedRows) {
      return Promise.reject({ msg: 'Product already deleted.' });
    }
  }

  /**
   * Response 
   */
  _prepareResponse() {
    return { response: { msg: 'Product deleted successfully' } };
  }
}

module.exports = Delete;