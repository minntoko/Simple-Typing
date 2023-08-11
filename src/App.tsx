import { Routes, Route } from "react-router-dom";
import KeyboardInputDetector from "./components/Keyboard";
import StartScreen from "./components/StartScreen";

function App() {

  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/game" element={<KeyboardInputDetector />} />
    </Routes>
  )
}

export default App
