import React from "react";
// import { useState } from "react";

// function Form() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [gender, setGender] = useState("");

//   const nameHandler = (value) => {
//     setName(value);
//   };
//   const passwordHandler = (value) => {
//     setPassword(value);
//   };
//   const genderHandler = (value) => {
//     setGender(value);
//   };
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         console.log("Form Submitted");
//         console.log({
//           name,
//           password,
//           gender,
//         });
//       }}
//     >
//       <label>Name</label>
//       <input
//         type="text"
//         placeholder="Your Name"
//         onChange={(e) => {
//           nameHandler(e.target.value);
//         }}
//       />
//       <br />
//       <label>password</label>
//       <input
//         type="password"
//         placeholder="Your Password"
//         onChange={(e) => {
//           passwordHandler(e.target.value);
//         }}
//       />
//       <br />
//       <label>Gender</label>
//       <select
//         onChange={(e) => {
//           genderHandler(e.target.value);
//         }}
//       >
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//       </select>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      gender: "",
    };
  }

  nameHandler = (value) => {
    this.setState({ name: value });
  };
  passwordHandler = (value) => {
    this.setState({ password: value });
  };
  genderHandler = (value) => {
    this.setState({ gender: value });
  };
  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form Submitted");
          console.log(this.state);
        }}
      >
        <label>Name</label>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => {
            this.nameHandler(e.target.value);
          }}
        />
        <br />
        <label>password</label>
        <input
          type="password"
          placeholder="Your Password"
          onChange={(e) => {
            this.passwordHandler(e.target.value);
          }}
        />
        <br />
        <label>Gender</label>
        <select
          onChange={(e) => {
            this.genderHandler(e.target.value);
          }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
