import { useEffect, useState } from "react";
import styled from "styled-components";

const KeyboardInputDetector = () => {
  const [key, setKey] = useState("");
  const [inCorrect, setInCorrect] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const initialTime = 30;
  const [time, setTime] = useState<number>(initialTime);
  const [count, setCount] = useState(0);
  const [type, setType] = useState<string[]>([]);
  const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";

  const typeSound = new Audio("./audio/typing-sound.m4a");
  const wrongSound = new Audio("./audio/wrong.mp3");
  const correctSound = new Audio("./audio/correct.mp3");
  const finishSound = new Audio("./audio/finish.mp3");

  const GetRandomSentence = async () => {
    try {
      const response = await fetch(RANDOM_SENTENCE_URL_API);
      const data = await response.json();
      return data.content;
    } catch (error) {
      console.error("エラーが発生しました:", error);
    }
  };

  const NextSentence = async () => {
    const sentence: string = await GetRandomSentence();
    const oneText = sentence.split("");
    setType(oneText);
    setCount(0);
  };

  useEffect(() => {
    const start = async () => {
      const sentence: string = await GetRandomSentence();
      const oneText = sentence.split("");
      setType(oneText);
      setCount(0);
    };
    start();
  }, []);

  const correct = () => {
    setCount(() => count + 1);
    setInCorrect(false);
  }

  const typeInCorrect = () => {
    setInCorrect(true);
    wrongSound.volume = 0.3;
    wrongSound.play();
    wrongSound.currentTime = 0;
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      typeSound.play();
      typeSound.currentTime = 0;
      event.key == type[count] ? correct() : typeInCorrect();
      if (type.length - 1 == count) {
        correctSound.play();
        correctSound.currentTime = 0;
        NextSentence();
      }
      setKey(event.key);
    };

    !isFinish && document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, count, isFinish]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          finishSound.play();
          finishSound.volume = 0.5;
          setIsFinish(true);
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <Container>
      <Header className="drop-shadow-md">
        <h1 className="text-2xl font-bold">タイピングゲーム</h1>
      </Header>
      <MainBox className="drop-shadow-md">
        <BoxItem>
          <Timer>{time}秒</Timer>
          <p>
            入力されたキーは{key}、正答数は{count}です。
          </p>
        </BoxItem>
        <div>
          {!isFinish ? (
            type.map((character, index) => {
              return index < count ? (
                <span className="text-green-500 text-xl" key={index}>
                  {character}
                </span>
              ) : (
                <span className={`${inCorrect && index == count && "text-red-500 underline"} text-xl`} key={index}>{character}</span>
              );
            })) : ( <span className="text-3xl">終了</span> )}
        </div>
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
