// import { useState } from "react";

function Welcome(props) {
  // let [count, setCount] = useState(0);
  // const btnHandler = () => {
  //   console.log("Hello");
  // };
  return (
    <>
      {/* <h1>Hello {props.name}</h1>
      <p>age : {props.age}</p>
      <p>title : {props.title}</p>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count++);
        }}
      >
        + 
      </button> */}
      {/* <button
        className="React-btn"
        onClick={btnHandler}
        // onClick={console.log("Hello") }
      >
        {props.title}
      </button> */}
      <h1>Welcome {props.name}</h1>
    </>
  );
}
export default Welcome;
