import styled from "styled-components";
import useTypingGameLogic from "../hooks/useTypingGameLogic";


const Finish = () => {
  const { gameRestart, setIsFinish, toStart } = useTypingGameLogic();
  setIsFinish(true);
  return (
    <div className="flex flex-col items-center justify-around h-32">
      <span className="text-3xl font-bold">終了</span>
      <div className="flex w-60 justify-between">
        <Button onClick={toStart}>ホームへ</Button>
        <Button onClick={gameRestart}>もう一度</Button>
      </div>
    </div>
  );
};

const Button = styled.button`
  color: #fff;
  background-color: #72b8ff;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 8px;
  transform: translateY(40px);
  cursor: pointer;
  user-select: none;
  text-shadow: 0px 0px 5px #aaa;
`;

export default Finish;
