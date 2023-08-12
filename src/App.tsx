import { Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import StartScreen from "./components/StartScreen";
import FinishScreen from "./components/FinishScreen";
import { RecoilRoot } from 'recoil'
import Header from "./components/layouts/Header";
import Container from "./components/layouts/Container";
import MainBox from "./components/layouts/MainBox";

function App() {

  return (
    <RecoilRoot>
      <Container>
        <Header />
        <MainBox>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/game" element={<MainScreen />} />
          <Route path="/finish" element={<FinishScreen />} />
        </Routes>
        </MainBox>
      </Container>
    </RecoilRoot>
  )
}

export default App
