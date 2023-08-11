import { Link } from "react-router-dom";
import styled from "styled-components";

const StartScreen = () => {

  return (
    <Container>
      <Header className="drop-shadow-md">
        <h1 className="text-2xl font-bold">タイピングゲーム</h1>
      </Header>
      <MainBox className="drop-shadow-md">
        <Link className="font-bold text-xl" to="/game">スタート</Link>
      </MainBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to left top, #cbe9f4, #efefef);
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  padding: 10px;
  position: fixed;
  top: 0;
  color: #fff;
  text-shadow: 0px 0px 5px #aaa;
  background-color: #72b8ff;
  margin-bottom: 20px;
`;

const MainBox = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 550px;
  height: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
`;

export default StartScreen;
