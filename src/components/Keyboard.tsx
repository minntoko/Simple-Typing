import { useEffect, useState } from "react";
import styled from "styled-components";

const KeyboardInputDetector = () => {
  const [key, setKey] = useState("");
  const [count, setCount] = useState(0);
  const [type, setType] = useState<string[]>([]);
  const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";

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
    NextSentence();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.key == type[count] && setCount(() => count + 1);
      if (type.length - 1 == count) {
        NextSentence();
      }
      setKey(event.key);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, count]);

  return (
    <Container>
      <Header className="drop-shadow-md">
        <h1 className="text-2xl font-bold">タイピングゲーム</h1>
      </Header>
      <MainBox className="drop-shadow-md">
        <BoxItem>
          <Timer>0秒</Timer>
          <p>
            入力されたキーは{key}、正答数は{count}です。
          </p>
        </BoxItem>
        <div>
          {type.map((character, index) => {
            return index < count ? (
              <span className="text-green-500" key={index}>
                {character}
              </span>
            ) : (
              <span key={index}>{character}</span>
            );
          })}
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
