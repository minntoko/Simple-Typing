import { Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import StartScreen from "./components/StartScreen";
import FinishScreen from "./components/FinishScreen";
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/game" element={<MainScreen />} />
        <Route path="/finish" element={<FinishScreen />} />
      </Routes>
    </RecoilRoot>
  )
}

export default App
