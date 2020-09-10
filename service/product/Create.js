const ProductModel = require('../../model/Product');
const Validator = require('../../lib/Validators');

/**
 * Create service
 */
class Create {

  constructor(params) {
    this.productName = params.productName;
    this.price = params.price;
    this.companyName = params.companyName;
    this.productCount = params.productCount;
  }

  /**
   * Main performer of class.
   */
  async perform() {
    try {
      this._validate();
      await this._createNewProduct();
      return this._prepareResponse();

    } catch (err) {
      return Promise.reject(err.message);
    }

  }

  /**
   * Validates the input parameters
   */
  _validate() {

    const validateObj = Validator.validateCreateObject({
      productName: this.productName,
      price: this.price,
      companyName: this.companyName,
      productCount: this.productCount
    });


    if (validateObj.error) {

      throw new Error(JSON.stringify(validateObj.error));
    }
  }

  /**
   * Creates new product.
   */
  async _createNewProduct() {
    await ProductModel.create(
      {
        productName: this.productName,
        price: this.price,
        companyName: this.companyName,
        productCount: this.productCount
      }
    );
  }

  /**
   * Prepares response.
   */
  _prepareResponse() {
    return {
      message: 'Product added successfully'
    }
  }
}

module.exports = Create;