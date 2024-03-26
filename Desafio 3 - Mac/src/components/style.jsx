import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`;

//HEADER

export const Header = styled.header`
height: 8vh;
display: flex;
align-items: center;
padding: 10px;
`;

export const Logomac = styled.img`
height: 80%;
margin-right: auto;
cursor: pointer;
`;

export const flatcelular = styled.div`
img{
    height: 45%;
}
display: flex;
font-size: 7px;
border-radius: 9px;
height: 75%;
align-items: center;
margin-right: 10px;
cursor: pointer;
transition-duration: 0.6s;
&:hover{
    color: #FFC72C;
}
`;

export const bagcelular = styled.div`
img{
    height: 45%;
}

display: flex;
font-size: 7px;
border-radius: 9px;
background-color:#FFC72C;
align-items: center;
height: 75%;
cursor: pointer;
transition-duration: 0.6s;

&:hover{
    background-color: white;
}
`;

//MAIN

export const Main = styled.main`
background-color: #FFC72C;
display: flex;
align-items: center;
flex-direction: column;

span{
    color:#DB0007;
}
`;

export const Banner = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font-family: "Inter", sans-serif;
`;

export const imagensmain = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`;

export const smallimage = styled.img`
height: 15%;
width: 15%;
cursor: pointer;
`;

//CARDS


//FOOTER