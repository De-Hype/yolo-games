import { useState } from "react";

import "./App.css";
import ColoredBox from "./Components/ColoredBox";
import InputBar from "./Components/InputBar";

function App() {
  const [rollClicked, setRollClicked] = useState(false);
  
  const [inputs, setInputs] = useState({
    multiplierInput: 1.98,
    rolloverInput: 50,
    chanceInput: 50,
  });
  // const [position, setPosition] = useState(inputs.rolloverInput);
  // const handleDrag =(e, ui)=>{
  //   const newPosition = Math.max(0, Math.min(100, position +ui.deltaX));
  //   console.log(newPosition)
  //   setPosition(newPosition);
  //   setInputs((prevInputs) => ({
  //     ...prevInputs,
  //     multiplierInput: newPosition,
  //   }))
  // }
  const handleInputChange = (inputName, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [inputName]: value,
    }));
  };
  const handleRollClick= ()=>{
    setRollClicked(!rollClicked)
  }
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-2/3 h-full">
        <ColoredBox rollClicked={rollClicked} inputs={inputs} onInputChange={handleInputChange} />
        <InputBar rollClicked={rollClicked} inputs={inputs} handleRollClick={handleRollClick} onInputChange={handleInputChange} />
      </div>
    </div>
  );
}

export default App;
