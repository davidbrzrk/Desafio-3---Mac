import React from "react";

import * as S from "../style";

import bigmac from "../../assets/bigmac.png";
import mcfritas from "../../assets/mcfritas.png";
import casquinha from "../../assets/casquinha.png";

export default function Main() {
  return (
    <S.Main>
        <S.Banner>
          <img src={bigmac} alt="Big Mac" />
          <h1>BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI?</span></h1>
        </S.Banner>
        <S.imagensmain>
            <S.bigmac src={bigmac} alt="Big Mac" />
            <S.mcfritas src={mcfritas} alt="McFritas" />
            <S.casquinha src={casquinha} alt="Casquinha" />
        </S.imagensmain>
    </S.Main>
  );
}
