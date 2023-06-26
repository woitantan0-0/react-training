import EditButton from "./EditButton";

const style = {
  width: "300px",
  height: "200px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "lightblue",
  display: "flex",
  flexDirection: "colomn",
  justifyContext: "center",
  alignItems: "center",
};

const Card = () => {
  return (
    <div style={style}>
      <p>山田太郎</p>
      <EditButton></EditButton>
    </div>
  );
};

export default Card;
