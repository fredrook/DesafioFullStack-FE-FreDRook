import styled from "styled-components";

export const ContainerRA = styled.form`
  display: flex;
  flex-direction: column;

  width: 90%;
  max-width: 85%;

  position: relative;
  top: 18%;

  .Error1 {
    position: relative;
    left: 17%;
    top: 2.5%;
    font-size: 12px;
    color: red;
    font-weight: 500;
  }
  .Error2 {
    position: relative;
    left: 71%;
    top: -14%;
    font-size: 12px;
    color: red;
    font-weight: 500;
  }

  .labelEmail {
    position: relative;
    top: -60%;
    left: 0%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #email {
    position: relative;
    top: -50%;
    left: 0%;

    max-width: 812px;
    height: 44px;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }

  .labelPassword {
    position: relative;
    top: -25%;
    left: 0%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #password {
    position: relative;
    top: -13%;
    left: 0%;

    width: 390px;
    height: 44px;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }

  .ContainerButtons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    position: relative;
    top: 62%;
    left: -41%;

    .btn1 {
      width: 226px;
      height: 54px;

      margin-right: 24px;

      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      background: var(--color-grey400);
      color: white;

      border: none;
      border-radius: 4px;
    }

    .btn2 {
      width: 226px;
      height: 54px;

      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      background: var(--color-primary);
      color: white;

      border: none;
      border-radius: 4px;
    }
  }
`;
