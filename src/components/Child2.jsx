const style = {
  height: "50px",
  backgroundColor: "lightgray",
};

const Child2 = () => {
  console.log("child2レンダリング");

  return (
    <div style={style}>
      <p>Child2</p>
    </div>
  );
};

export default Child2;
