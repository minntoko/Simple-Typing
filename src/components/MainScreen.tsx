import styled from 'styled-components';
import DisplayComponent from './layouts/DisplayComponent';
import useTypingGameLogic from '../hooks/useTypingGameLogic';
import Header from './layouts/Header';
import Container from './layouts/Container';
import { useEffect } from 'react';


const MainScreen = () => {
  const {
    time,
    count,
    type,
    isFinish,
    inCorrect,
    key,
    gameStart,
    toFinish
  } = useTypingGameLogic();

  useEffect(() => {
    gameStart();
  }, []);
  
  useEffect(() => {
    toFinish();
  }, [isFinish]);
  return (
    <Container>
      <Header />
      <MainBox className="drop-shadow-md">
        <BoxItem>
          <Timer>{time} 秒</Timer>
          <p onClick={gameStart}>
          入力されたキーは{key}、正答数は{count}です。
          </p>
        </BoxItem>
        <DisplayComponent isFinish={isFinish} inCorrect={inCorrect} type={type} count={count} />
      </MainBox>
    </Container>
  );
};

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



export default MainScreen;
