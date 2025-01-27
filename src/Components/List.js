function List() {
  const arr = ["html", "css", "js", "React"];
  const li = arr.map((el, ind) => <li key={ind}>{el}</li>);
  return <ul>{li}</ul>;
}

export default List;
