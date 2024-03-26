import React from "react";

import * as S from "../style";

import maclogo from "../../assets/maclogo.png";
import celularflat from "../../assets/celularflat.png";
import celularbag from "../../assets/celularbag.png";

export default function Header() {

  return (
    <S.Header>
        <S.Logomac src={maclogo} alt="Logo do Mac" >
        </S.Logomac>
        <S.flatcelular>
          <img src={celularflat} alt="Celular flat" />
          <h2>Baixe o App</h2>
        </S.flatcelular>
        <S.bagcelular>
            <h2>Peça seu Méqui</h2>
            <img src={celularbag} alt="Celular Bag" />
        </S.bagcelular>
    </S.Header>
  );
}
