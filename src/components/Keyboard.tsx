import styled from "styled-components";
import DisplayComponent from "./DisplayComponent";
import useTypingGameLogic from "../hooks/useTypingGameLogic";

const KeyboardInputDetector = () => {
  const {
    time,
    count,
    type,
    isFinish,
    inCorrect,
    key,
    restartGame
  } = useTypingGameLogic();

  return (
    <Container>
      <Header className="drop-shadow-md">
        <h1 className="text-2xl font-bold">タイピングゲーム</h1>
      </Header>
      <MainBox className="drop-shadow-md">
        <BoxItem>
          <Timer>{time} 秒</Timer>
          <p>
          入力されたキーは{key}、正答数は{count}です。
          </p>
        </BoxItem>
        <DisplayComponent isFinish={isFinish} inCorrect={inCorrect} type={type} count={count} restartGame={restartGame} />
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

const BoxItem = styled.div`
  position: absolute;
  top: 0;
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Timer = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  padding: 15px 30px;
  border-radius: 5px;
  color: #fff;
  background-color: #72b8ff;
`;



export default KeyboardInputDetector;
