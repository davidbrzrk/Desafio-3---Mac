import React from "react";

import maclogo from "../../assets/maclogo.png";
import celularflat from "../../assets/celularflat.png";
import celularbag from "../../assets/celularbag.png";

import * as S from "../style";

export default function Header() {

  return (
    <S.Header>
        <div>
          <img src={maclogo} alt="Logo do Mac" />
        </div>
        <div>
          <img src={celularflat} alt="Celular flat" />
          <h2>Baixe o App</h2>
        </div>
        <div>
            <h2>Peça seu Méqui</h2>
            <img src={celularbag} alt="Celular Bag" />
        </div>
    </S.Header>
  );
}
