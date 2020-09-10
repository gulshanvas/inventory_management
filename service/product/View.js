const ProductModel = require('../../model/Product');

/**
 * View service
 */
class View {

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
   * Fetches from product.
   */
  async _fetchFromProduct() {
    this.response = await ProductModel.view({ productName: this.productName });
  }

  /**
   * Response 
   */
  _prepareResponse() {
    return { response: this.response };
  }
}

module.exports = View;