import styled from "styled-components";

export const DivProtected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  .accessDenied {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 500px;
    height: 40%;
    margin-bottom: 10%;

    pointer-events: none;
    animation: accessDenied infinite 8s linear;
  }

  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;

    color: #211f20;
  }

  @keyframes accessDenied {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;
