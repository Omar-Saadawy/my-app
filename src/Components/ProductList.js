import { useEffect, useState } from "react";
// import productData from "../products-data";
import Product from "./Product";

function ProductList() {
  const [product, setProduct] = useState([]);
  const products = product.map((product) => {
    return (
      product.price < 100 && <Product product={product} key={product.id} />
    );
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      {product.length === 0 ? <h1>Loading</h1> : null}
      <div className="product-list">{products}</div>;
    </>
  );
}

export default ProductList;
