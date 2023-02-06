import styled from "styled-components";

export const TagLi = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  top: 0%;
  left: -88%;

  width: 545px;
  height: 741px;

  background: #ffffff;

  border: 2px solid var(--color-grey100);
  box-shadow: 0px 4px 31px #eef1f5;
  border-radius: 8px;
`;

export const TagDiv = styled.div`
  display: flex;
  align-items: center;
justify-content: space-evenly;
  flex-direction: column;

  height: 100%;

  h2 {
    position: fixed;
    top: 16%;

    font-weight: 500;
    font-size: 36px;
  }

  p {
    font-weight: 500;
    font-size: 16px;

    color: var(--color-grey400);
  }

  .p1 {
    position: relative;
    top: 13%;
    left: -41%;
  }

  .p2 {
    position: relative;
    top: 8%;
    left: -41%;
  }

  .p3 {
    position: relative;
    top: 4%;
    left: -43%;
  }

  .p4 {
    position: relative;
    top: -12%;
    left: 29%;
  }

  .p5 {
    position: relative;
    top: -16%;
    left: -43%;
  }

  span {
    font-weight: 400;
    font-size: 24px;
  }

  .span1 {
    position: relative;
    top: 9%;
    left: -16.5%;
  }

  .span2 {
    position: relative;
    top: 4%;
    left: -9.2%;
  }

  .span3 {
    position: relative;
    top: 0%;
    left: -6%;
    width: 370px;
  }

  .span4 {
    position: relative;
    top: -16%;
    left: 26.5%;
  }

  .span5 {
    position: relative;
    top: -20%;
    left: -32.5%;
  }

  .separacao {
    position: relative;
    top: 4%;
    left: 0%;

    width: 442px;
    height: 1px;

    background: #f0f2f6;
  }

  button {
    /* position: relative;
    top: 45%; */
    width: 455px;
    height: 54px;

    background: var(--color-primary);
    color: white;

    border: none;
    border-radius: 4px;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;
