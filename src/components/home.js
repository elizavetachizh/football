import { Link } from "react-router-dom";
import {
  Container,
  Home,
  Image,
  Logo,
  ContainerLogo,
  Text,
  MingasLogo, Arka,
} from "./styles";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";

export const HomePage = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  // const [isMobile, setIsMobile] = useState(false);
  // const changeWindow = () => {
  //   if (matches) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // };
  return (
    <>
      {matches ? (
        <Container>
          <Home>
            <Logo alt={""} src={require("../assets/logo.png")} />
            <Link to="/api/groups">Просмотр турнирных таблиц</Link>
            <Image>
              <img alt={""} src={require("../assets/image.png")} />
            </Image>
          </Home>
        </Container>
      ) : (
        <Container>
          <Home>
            <ContainerLogo>
              <MingasLogo alt={""} src={require("../assets/mingas.png")} />
              <Logo alt={""} src={require("../assets/logo.png")} />
              <MingasLogo alt={""} src={require("../assets/tbzpng.png")} />
            </ContainerLogo>
            <Text src={require("../assets/text.png")} />
            <Link to="/api/groups">Просмотр турнирных таблиц</Link>
            <Image>
              <Arka alt={""} src={require("../assets/arka.png")} />
              <img alt={""} src={require("../assets/image.png")} />
            </Image>
          </Home>
        </Container>
      )}
    </>
  );
};
