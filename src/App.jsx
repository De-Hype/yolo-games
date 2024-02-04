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

  const handleInputChange = (inputName, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [inputName]: value,
    }));

    
  };
  const handleRollClick = () => {
    setRollClicked(!rollClicked);
  };
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-2/3 h-full flex flex-col gap-14">
        <div className="py-12 px-2 h-20 w-full bg-gray-600 shadow-show relative rounded-md">
          <ColoredBox
            rollClicked={rollClicked}
            inputs={inputs}
            onInputChange={handleInputChange}
          />
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
