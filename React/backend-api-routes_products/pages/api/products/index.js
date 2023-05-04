import { getAllProducts } from "../../../services/productServices.js";

export default function getAllProductsHandler(req, res) {
  const products = getAllProducts();
  res.status(200).json(products);
}
