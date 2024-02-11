import { useState } from "react";

import "./App.css";
import ColoredBox from "./Components/ColoredBox";
import InputBar from "./Components/InputBar";
import Dice from "./Components/Dice";

function App() {
  const [rollClicked, setRollClicked] = useState(false);

  const [inputs, setInputs] = useState({
    multiplierInput: 1.98,
    rolloverInput: 50,
    chanceInput: 50,
  });

  const handleInputChange = (inputName, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [inputName]: value,
    }));

    
  };
  const handleRollClick = () => {
    setRollClicked(!rollClicked);
    
      setInputs((prevInputs) => ({
        ...prevInputs,
        rolloverInput: 100 - inputs.rolloverInput,
      }));
    
  };
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-black text-white flex items-center justify-center">
      <div className="w-2/3 h-full flex flex-col gap-14">
        <div className="outer-container">
          <Dice/>
        
        <div className="py-12 px-2 h-20 w-full    shadow-show relative rounded-md">
          <ColoredBox
            rollClicked={rollClicked}
            inputs={inputs}
            onInputChange={handleInputChange}
          />
        </div>
        </div>
        <InputBar
          rollClicked={rollClicked}
          inputs={inputs}
          handleRollClick={handleRollClick}
          onInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default App;
