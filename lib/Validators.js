const Joi = require('joi');

/**
 * Contains various validator method to validate the input object to service.
 */
class Validators {

  /**
   * Validates input object to Create product service.
   * @param {object} params 
   */
  static validateCreateObject(params) {

    const schema = Joi.object({
      productName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

      price: Joi.number().min(10)
        .max(10000).required(),

      companyName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

      productCount: Joi.number().min(10)
        .max(10000).required()
    });

    let obj = schema.validate(params);

    return obj;

  }

}

module.exports = Validators;