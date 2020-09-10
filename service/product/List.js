const ProductModel = require('../../model/Product');

/**
 * List service
 */
class List {

  /**
   * Main performes of class.
   */
  async perform() {
    await this._fetchFromProduct();
    return this._prepareResponse();
  }

  /**
   * Fetches from product model.
   */
  async _fetchFromProduct() {
    this.response = await ProductModel.list();
  }

  /**
   * Prepares response.
   */
  _prepareResponse() {
    return { response: this.response };
  }
}

module.exports = List;