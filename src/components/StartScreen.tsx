import { Link } from "react-router-dom";
import Header from "./layouts/Header";
import Container from "./layouts/Container";
import MainBox from "./layouts/MainBox";

const StartScreen = () => {

  return (
    <Container>
      <Header />
      <MainBox>
        <Link className="font-bold text-xl" to="/game">スタート</Link>
      </MainBox>
    </Container>
  );
};

export default StartScreen;
