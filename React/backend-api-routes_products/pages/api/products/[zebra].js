import { getProductById } from "../../../services/productServices";

export default function getAllProductsHandler(req, res) {
  const query = req.query;
  const zebra = req.query.zebra;
  console.log("zebra ", query);

  res.status(200).json(product);
}
