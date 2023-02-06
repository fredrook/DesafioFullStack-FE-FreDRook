import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-background);
  width: 100vw;
  height: 100vh;

  --bg: linear-gradient(
    to right,
    var(--grey5) 0%,
    var(--grey6) 20%,
    var(--grey7) 34%,
    var(--grey8) 49%,
    var(--grey7) 64%,
    var(--grey6) 79%,
    var(--grey5) 100%
  );

  background: var(--bg);

  img {
    width: 210px;
    height: 210px;
    border: none;
    border-radius: 20%;
    border: 5px solid var(--color-brown);
  }

  h1 {
    display: flex;
    justify-content: center;
    width: 44%;
    color: var(--color-background);
    font-size: 4.6em;
    font-weight: 600;
    white-space: nowrap;
  }

  p {
    color: var(--color-grey50);
    font-size: 4em;
    font-weight: 600;
    line-height: 115%;
    width: 55%;
    text-align: justify;
  }

  span{
    color: var(--color-grey100);
    font-size: 4em;
    font-weight: 600;
    line-height: 115%;
    white-space: pre-wrap;
  }

  .btnInit {
    border-radius: 50%;
    border: 5px solid var(--color-grey50);
    background: var(--grey7);
    color: var(--color-grey50);
    font-size: 4.2em;
    line-height: 30px;
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
