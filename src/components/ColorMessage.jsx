const ColorMessage = ({ color, children }) => {
  console.log("再レンダリング:colorMessage");

  // cssオブジェクト
  const styleObject = {
    color: color,
    fontSize: "20px",
  };

  return <div style={styleObject}>{children}</div>;
};

export default ColorMessage;
