import { useParams } from "react-router";

function ProductDetails() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <h2>Details {params.productId}</h2>
    </>
  );
}

export default ProductDetails;
