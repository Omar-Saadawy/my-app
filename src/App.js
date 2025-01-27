// import logo from './logo.svg';
// import Welcome from "./Components/Welcome";
// import Greeting from "./Components/Greeting";
// import Input from "./Components/Input";
// import { useState } from "react";
import "./App.css";
// import Welcome from "./Components/Welcome";
// import Greeting from "./Components/Greeting";
// import List from "./Components/List";
import ProductList from "./Components/ProductList";
import Counter from "./Components/Counter";
import CounterFc from "./Components/CounterFc";
// import Form from "./Components/Form";

// import Product from "./Components/Product";
// import Greeting from "./Components/Greeting";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // let element;

  // if (loggedIn) {
  //   element = <h1>Iam Logged In</h1>;
  // } else {
  //   element = <h1>Iam not Logged In</h1>;
  // }

  // loggedIn
  //   ? (element = <h1>Iam Logged In</h1>)
  //   : (element = <h1>Iam not Logged In</h1>);

  return (
    <>
      {/* <button onClick={() => setLoggedIn(true)}>Log In</button>
      {loggedIn ? <Welcome name="Omar" /> : <Greeting />} */}
      {/* <Welcome age="25" name="Omar" title="React Developer" /> */}
      {/* <Welcome title="BTN" /> */}
      {/* <Input label="name" type="text" />
      <Input label="password" type="password" /> */}
      {/* <Greeting /> */}
      {/* <Product title="product-1" price="100" description="chocolate" /> */}
      {/* <Greeting /> */}
      {/* <Product title="product-2" price="150" description="nuts" /> */}
      {/* <Greeting /> */}
      {/* <Product title="product-3" price="60" description="biscott" /> */}
      {/* <Form /> */}
      {/* <List /> */}
      <ProductList />

      {/* <Counter />
      <CounterFc /> */}
    </>
  );
}

export default App;
