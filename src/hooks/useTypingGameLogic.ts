import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const useTypingGameLogic = () => {
  const initialTime = 30;
  const [time, setTime] = useState(initialTime);
  const [count, setCount] = useState(0);
  const [type, setType] = useState([]);
  const [isFinish, setIsFinish] = useState(false);
  const [inCorrect, setInCorrect] = useState(false);
  const [key, setKey] = useState("");

  const typeSound = new Audio("./audio/typing-sound.m4a");
  const wrongSound = new Audio("./audio/wrong.mp3");
  const correctSound = new Audio("./audio/correct.mp3");
  const finishSound = new Audio("./audio/finish.mp3");
  const navigate = useNavigate();


  const finishNav = () => {
    if (isFinish) {
      navigate('/finish');
    }
  };

  const getRandomSentence = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      return data.content.split("");
    } catch (error) {
      console.error("An error occurred:", error);
      return [];
    }
  };

  const nextSentence = async () => {
    const sentence = await getRandomSentence();
    setType(sentence);
    setCount(0);
  };

  const correct = () => {
    setCount((prevCount) => prevCount + 1);
    setInCorrect(false);
  };

  const typeIncorrect = () => {
    setInCorrect(true);
    wrongSound.volume = 0.3;
    wrongSound.play();
    wrongSound.currentTime = 0;
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key == "Shift") {
      return;
    }
    typeSound.play();
    typeSound.currentTime = 0;
    if (event.key === type[count]) {
      correct();
    } else {
      typeIncorrect();
    }

    if (type.length - 1 === count) {
      correctSound.play();
      correctSound.currentTime = 0;
      nextSentence();
    }

    setKey(event.key);
  };

  useEffect(() => {
    if (!isFinish) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, count, isFinish]);

  const restartGame = () => {
    setIsFinish(false);
    setInCorrect(false);
    nextSentence();
    startTimer();
    setTime(initialTime);
    navigate("/game");
  };

  const startTimer = () => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
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
  }
  
  useEffect(() => {
    const start = async () => {
      startTimer();
      const sentence = await getRandomSentence();
      setType(sentence);
      setCount(0);
    };
    start();
  }, []);

  return {
    time,
    count,
    type,
    isFinish,
    inCorrect,
    key,
    finishNav,
    restartGame,
  };
};

export default useTypingGameLogic;
