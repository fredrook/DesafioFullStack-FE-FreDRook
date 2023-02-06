import styled from "styled-components";

export const ContainerDashb = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: var(--color-grey50);

  .divSubContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    width: 50%;
    height: 100vh;

    background-color: var(--color-grey100);
  }
`;
