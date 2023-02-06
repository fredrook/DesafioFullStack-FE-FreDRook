import styled from "styled-components";

export const ContainerUI = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  top: 14%;

  width: 85%;

  .labelName {
    position: relative;
    top: 2%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  #name {
    position: relative;
    top: 2%;

    max-width: 810px;
    height: 48px;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }

  .btnNext {
    margin-top: 10%;
    
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

  .Error1 {
    position: relative;
    left: 43%;
    top: 3.5%;
    font-size: 12px;
    color: red;
    font-weight: 500;
  }
  .Error2 {
    position: relative;
    left: 2%;
    top: 18%;
    font-size: 12px;
    color: red;
    font-weight: 500;
  }
  .Error3 {
    position: relative;
    left: 67.5%;
    top: -32%;
    font-size: 12px;
    color: red;
    font-weight: 500;
  }
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;

  .labelPassword {
    display: flex;
    flex-direction: column;

    position: relative;
    top: 56%;
    left: 0%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  #password {
    position: relative;
    top: 70%;
    left: 0%;

    max-width: 252px;
    height: 48px;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }
`;

export const AnotherDivInputs = styled.div`
  display: flex;
  flex-direction: column;

  .labelEmail {
    display: flex;
    flex-direction: column;

    position: relative;
    top: 58%;
    left: 0%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #email {
    max-width: 810px;
    height: 48px;

    position: relative;
    top: 70%;
    left: 0%;

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
    top: -72%;
    left: 54%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #phoneNumber {
    max-width: 252px;
    height: 48px;

    position: relative;
    top: -65%;
    left: 54%;

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
