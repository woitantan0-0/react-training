import styled from "styled-components";

const StyledComponents = () => {
  const SContainer = styled.div`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const STitle = styled.p`
    margin: 0;
    color: #aaa;
  `;
  const SButton = styled.button`
    background-color: #ddd;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
      background-color: #aaa;
      color: #fff;
      cursor: pointer;
    }
  `;

  return (
    <SContainer>
      <STitle>StyledComponentsモジュールです</STitle>
      <SButton>StyledComponents</SButton>
    </SContainer>
  );
};

export default StyledComponents;
