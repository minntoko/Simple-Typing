import styled from "styled-components";

interface Props {
  isFinish: boolean;
  inCorrect: boolean;
  type: string[];
  count: number;
  restartGame: () => void;
}

const DisplayComponent = ({ isFinish, inCorrect, type, count, restartGame }: Props) => {
  return (
    <div>
      {!isFinish ? (
        type.map((character, index) => {
          return index < count ? (
            <span className="text-green-500 text-xl" key={index}>
              {character}
            </span>
          ) : (
            <span className={`${inCorrect && index == count && "text-red-500 underline"} text-xl`} key={index}>
              {character}
            </span>
          );
        })
      ) : (
        <div className="flex flex-col items-center justify-around h-32">
          <span className="text-3xl font-bold">終了</span>
          <RetryButton onClick={restartGame}>もう一度</RetryButton>
        </div>
      )}
    </div>
  );
};

const RetryButton = styled.button`
  color: #fff;
  background-color: #72b8ff;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 8px;
  transform: translateY(40px);
  cursor: pointer;
  user-select: none;
  text-shadow: 0px 0px 5px #aaa;
`

export default DisplayComponent;
