let invertedProducts;

class Product {

  get active() {
    return '1';
  }

  get inactive() {
    return '2';
  }

  get deleted() {
    return '3';
  }
}

module.exports = new Product();