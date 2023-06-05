import { Link } from "react-router-dom";
import {
  Home,
  Image,
  Logo,
  ContainerLogo,
  Text,
  MingasLogo,
  Arka,
  GeneralContainer,
} from "./styles";
import React from "react";

export const HomePage = () => {
  return (
    <Home>
      <GeneralContainer>
        <ContainerLogo>
          <MingasLogo alt={""} src={require("../assets/mingas.webp")} />
          <Logo alt={""} src={require("../assets/logo.webp")} />
          <MingasLogo alt={""} src={require("../assets/tbzpng.webp")} />
        </ContainerLogo>
        <Text src={require("../assets/text.webp")} />
        <Link to="/api/groups">Просмотр турнирных таблиц</Link>
        <Image>
          <Arka alt={""} src={require("../assets/arka_all.webp")} />
        </Image>
      </GeneralContainer>
    </Home>
  );
};
