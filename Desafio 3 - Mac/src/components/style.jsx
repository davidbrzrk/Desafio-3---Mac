import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`;

export const Header = styled.header`
border: solid 2px red;
height: 8vh;
display: flexbox;
`;