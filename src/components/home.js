import { Link } from "react-router-dom";
import {
  Home,
  ImageMobile,
  Image,
  Logo,
  ContainerLogo,
  Text,
  MingasLogo,
  Arka,
} from "./styles";
import useMediaQuery from "../hooks/useMediaQuery";
import React from "react";

export const HomePage = () => {
  const matches = useMediaQuery("(max-width: 564px)");
  return (
    <Home>
      {matches ? (
        <>
          <Logo alt={""} src={require("../assets/logo.png")} />
          <Link to="/api/groups">Просмотр турнирных таблиц</Link>
          {/*<Link to="/final">Финал</Link>*/}
          <ImageMobile>
            <img alt={""} src={require("../assets/image.png")} />
          </ImageMobile>
        </>
      ) : (
        <>
          <ContainerLogo>
            <MingasLogo alt={""} src={require("../assets/mingas.png")} />
            <Logo alt={""} src={require("../assets/logo.png")} />
            <MingasLogo alt={""} src={require("../assets/tbzpng.png")} />
          </ContainerLogo>
          <Text src={require("../assets/text.png")} />
          <Link to="/api/groups">Просмотр турнирных таблиц</Link>
          {/*<Link to="/final">Финал</Link>*/}
          <Image>
            <Arka alt={""} src={require("../assets/arka_all.png")} />
          </Image>
        </>
      )}
    </Home>
  );
};
