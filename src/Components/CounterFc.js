import { useEffect, useState } from "react";

function CounterFc() {
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState(0);
  useEffect(() => {
    console.log("here");
    // setCounter(counter + 1);
    return () => {
      console.log("Unmounting");
    };
  }, [counter]);
  return (
    <>
      <h1>Counter : {counter}</h1>
      <h1>Product : {product}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setProduct(product + 1);
        }}
      >
        +
      </button>
    </>   
  );
}

export default CounterFc;
