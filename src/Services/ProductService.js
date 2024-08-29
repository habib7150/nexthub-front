import axios from "axios";

class ProductService {
  static fetchProducts() {
    return axios.get("https://127.0.0.1:3001/products");
  }

  static fetchProductById(id) {
    return axios.get(`https://127.0.0.1:3001/products/${id}`);
  }
  static addProduct(product) {
    return axios.post("https://127.0.0.1:3001/products", product);
  }
  static updateProduct(id, product) {
    return axios.put(`https://127.0.0.1:3001/products/${id}`, product);
  }
}

export default ProductService;
