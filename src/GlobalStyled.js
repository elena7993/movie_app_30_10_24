import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  pcPadding: "10%",
  moPadding: "20px",
};

export const GlobalStyled = createGlobalStyle`
${reset}

*{
  box-sizing: border-box;
}

body{
  font-family: "Noto Sans", sans-serif;
  letter-spacing: -1px;
  background-color: #000;
  color: #fff;
}

img{
  width: 100%;
  display: block;
}

a{
  text-decoration: none;
}

`;
