import { products } from "../../../lib/products";

export default function handler(request, response) {
  const { id } = request.query;
  console.log(id);
  const product = products.find(product.id);

  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(product);
}
