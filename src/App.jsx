import { useState } from "react";

import "./App.css";
import ColoredBox from "./Components/ColoredBox";
import InputBar from "./Components/InputBar";
import Dice from "./Components/Dice";

function App() {
  const [rollClicked, setRollClicked] = useState(false);
  const [number, setNumber]=useState(null);
  const [trajectoryPosition, setTrajectoryPosition] = useState({right:'50',})

  const [inputs, setInputs] = useState({
    multiplierInput: 1.98,
    rolloverInput: 50,
    chanceInput: 50,
  });
  const GenerateRandomNumber = () => {
    const randomNumber = parseFloat(((Math.random() * 99) + 1).toFixed(2));
alert(`The randomly generated number is ${randomNumber}`)
    const randomRight = randomNumber + 'px';
    setTrajectoryPosition({top:randomRight})
  };

  const handleInputChange = (inputName, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [inputName]: value,
    }));
  };
  const handleRollClick = () => {
    setRollClicked(!rollClicked);
    setNumber(GenerateRandomNumber());
    setInputs((prevInputs) => ({
      ...prevInputs,
      rolloverInput: 100 - inputs.rolloverInput,
    }));
  };
  
  const dotMoveAnimation = {
    popping: {
      width: "5px",
      height: "5px",
      backgroundColor: "lime",
      borderRadius: "50%",
      position: "absolute",
      top: "50%",
      bottom: "50%",
      zIndex: "999999999",
      animation: "dotmove 6s linear  infinite",
    },
  };
  return (
    <>
      <style>
        {` @keyframes dotmove {
          0% {
              top: 50%;
              bottom: 50%;
              right: 50%;
            }
            20% {
              right:200px;
              top: 50%;
              bottom: 50%;
            }
            40% {
              top: 80%;
            }
            100% {
              top: 80%;
            }
          }`}
      </style>
      <div className="min-h-screen w-screen overflow-x-hidden bg-black text-white flex items-center justify-center">
        <div className="w-2/3 h-full flex flex-col gap-14">
          <div className="outer-container relative">
            {/* <div className="dot-popping"></div> */}
            <div style={dotMoveAnimation.popping}></div>
            <Dice GenerateRandomNumber={GenerateRandomNumber} />
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
    </>
  );
}

export default App;
