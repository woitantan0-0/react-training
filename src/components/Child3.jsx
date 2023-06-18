const style = {
  height: "50px",
  backgroundColor: "lightgray",
};

const Child3 = () => {
  console.log("child3レンダリング");

  return (
    <div style={style}>
      <p>Child3</p>
    </div>
  );
};

export default Child3;
