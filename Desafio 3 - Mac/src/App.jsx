import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

import * as S from "./components/style"

export default function App() {
  return (
    <div>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
  </head>
      <S.GlobalStyle />
      <Header />
      <Main />
    </div>
  )
}
