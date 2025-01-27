import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.increament = this.increament.bind(this);
  }
  //   increament() {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   }
  increament = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  componentDidUpdate(prevprops, prevstate) {
    console.log(prevprops);
    console.log(prevstate);
  }
  componentWillUnmount() {
    console.log("Unmounting");
  }
  render() {
    return (
      <>
        <h1>Counter :{this.state.count} </h1>
        <button onClick={this.increament}>+</button>
      </>
    );
  }
}
export default Counter;
