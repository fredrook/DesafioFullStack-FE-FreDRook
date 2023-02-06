import styled from "styled-components";

export const ContainerAY = styled.form`
  display: flex;
  flex-direction: column;

  .labelName {
    position: relative;
    top: 20%;
    left: -34%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  #name {
    position: relative;
    top: 25%;
    left: -35%;

    max-width: 810px;
    height: 48px;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }

  .Error1 {
    position: relative;
    left: 43%;
    top: 3.5%;
    font-size: 12px;
    color: red;
    font-weight: 500;
  }
  .Error4 {
    position: relative;
    left: 2%;
    top: 18%;
    font-size: 12px;
    color: red;
    font-weight: 500;
  }
  .Error5 {
    position: relative;
    left: 67.5%;
    top: -32%;
    font-size: 12px;
    color: red;
    font-weight: 500;
  }

  .ContainerButtons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    position: relative;
    top: 73%;
    left: -35%;

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

export const AnotherDivInputs = styled.div`
  display: flex;
  flex-direction: column;

  .labelEmail {
    display: flex;
    flex-direction: column;

    position: relative;
    top: 145%;
    left: -34%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #email {
    max-width: 810px;
    height: 48px;

    position: relative;
    top: 155%;
    left: -35%;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }

  .labelPhoneNumber {
    display: flex;
    flex-direction: column;

    width: 21%;

    position: relative;
    top: 15%;
    left: -34%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #phoneNumber {
    max-width: 252px;
    height: 48px;

    position: relative;
    top: 25%;
    left: -35%;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }
  .Error4 {
    position: relative;
    left: 12.5%;
    top: -12%;
    font-size: 12px;
    color: red;
    font-weight: 500;
  }
  .Error5 {
    position: relative;
    left: 64.5%;
    top: -62%;
    font-size: 12px;
    color: red;
    font-weight: 500;
  }
`;
