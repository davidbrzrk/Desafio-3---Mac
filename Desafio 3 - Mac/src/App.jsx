import React from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

import * as S from "./components/style"

export default function App() {
  return (
    <div>
      <S.GlobalStyle />
      <Header />
    </div>
  )
}
