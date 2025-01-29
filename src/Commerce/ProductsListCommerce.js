import { useEffect, useState } from "react";
import Product from "./productComm";

function ProductListCommerce() {
  const url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <h1 className="mt-3 text-center">Our Products</h1>
      <div className="container">
        <div className="row">
          {product.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductListCommerce;
