import styled from "styled-components";
import { Link } from "react-router-dom";
import useTypingGameLogic from "../hooks/useTypingGameLogic";
import Container from "./layouts/Container";
import MainBox from "./layouts/MainBox";


const Finish = () => {
  const { restartGame } = useTypingGameLogic();
  return (
    <Container>
      <MainBox>
        <div className="flex flex-col items-center justify-around h-32">
          <span className="text-3xl font-bold">終了</span>
          <div className="flex w-60 justify-between">
            <Link to="/">
              <Button>ホームへ</Button>
            </Link>
            <Button onClick={restartGame}>もう一度</Button>
          </div>
        </div>
      </MainBox>
    </Container>
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
