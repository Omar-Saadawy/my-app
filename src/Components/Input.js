function Input(props) {
  return (
    <>
      <label>{props.label}</label>
      <input
        type={props.type}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </>
  );
}

export default Input;
