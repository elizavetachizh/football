import { Link } from "react-router-dom";
import { Container, Home } from "./styles";
import mingas from "../assets/mingaz_logo_blue.png";
export const HomePage = () => {
  return (
    <Container>
      <Home>
        <h1>Home</h1>
        <img alt={""} src={mingas} />
        <nav>
          <Link to="/api/groups">
            Перейдите для просмотра турнирных таблиц
          </Link>
        </nav>
      </Home>
    </Container>
  );
};
