import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
ul{
  list-style: none;
}
  body {
    margin: 0;
    font-family: system-ui;
  }
`;
