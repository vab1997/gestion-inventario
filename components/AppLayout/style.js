import css from "styled-jsx/css";

import { breakpoints, fonts } from "../../styles/theme";

export const globalStyles = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: ${fonts.base};
  }

  * {
    box-sizing: border-box;
  }

  input {
    font-family: ${fonts.base};
  }
`;

export default css`
  div {
    display: grid;
    height: 100vh;
    width: 100vw;
    place-items: center;
  }

  main {
    background: #fff;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  /* @media screen and (min-width: 1024px) {
    main {
      height: 90vh;
      width: 90vw;
    }
  } */
`;
