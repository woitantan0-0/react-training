const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Style Jsx です</p>
        <button className="button">Styled Jsx</button>
      </div>

      <style jsx="true">{`
        .container {
          border: solid 1px #aaa;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #aaa;
        }
        .button {
          background-color: #ddd;
          border: none;
          padding: 8px;
          border-radius: 8px;
          &:hover {
            background-color: #aaa;
            color: #fff;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};

export default StyledJsx;
