import styled from 'styled-components';
import DisplayComponent from './layouts/DisplayComponent';
import useTypingGameLogic from '../hooks/useTypingGameLogic';
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
  }, [toFinish, isFinish]);
  return (
    <>
      <BoxItem>
        <Timer>{time} 秒</Timer>
        <p onClick={gameStart}>
        入力されたキーは{key}、正答数は{count}です。
        </p>
      </BoxItem>
      <DisplayComponent inCorrect={inCorrect} type={type} count={count} />
    </>
  );
};

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
