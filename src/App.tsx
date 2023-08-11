import { Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import StartScreen from "./components/StartScreen";
import FinishScreen from "./components/FinishScreen";

function App() {

  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/game" element={<MainScreen />} />
      <Route path="/finish" element={<FinishScreen />} />
    </Routes>
  )
}

export default App
