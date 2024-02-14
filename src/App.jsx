import { useState } from "react";

import "./App.css";
import ColoredBox from "./Components/ColoredBox";
import InputBar from "./Components/InputBar";
import Dice from "./Components/Dice";

function App() {
  const [rollClicked, setRollClicked] = useState(false);
  const [number, setNumber] = useState(50);
  const animationName = number > 50 ? "dotmoveRight" : "dotmoveLeft";
 
  const [inputs, setInputs] = useState({
    multiplierInput: 1.98,
    rolloverInput: 50,
    chanceInput: 50,
  });
  const GenerateRandomNumber = () => {
    const randomNumber = parseFloat((Math.random() * 99 + 1).toFixed(2));
    setNumber(randomNumber);
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
  const stayUpPosition = {
    backgroundColor: number > 50 ? "lime" : "red",
    fontSize: "14px",
    padding: "2px 4px",
    position: "absolute",
    width:'40px',
    top: "10px",
    right: `-calc(${number}% + 5%)`,
    left: `calc(${number}% - 4%)`,
  };
  const GoUpPosition = {
    color: number > 50 ? "lime" : "red",
    fontSize: "14px",
    padding: "2px 4px",
    position: "absolute",
    right: `-calc(${number}% + 5%)`,
    left: `calc(${number}% - 4%)`,
    display:'none',
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
      animation: `${animationName} 2s infinite forwards`,
    },
  };
  return (
    <>
      {/* right:${200}px; */}
      <style>
        {` @keyframes dotmoveRight {
          0% {
              top: 50%;
              bottom: 50%;
              right: 50%;
              left: ${50}%;
            }
            20% {
              right: -calc(${number}% + 5%);
              left: calc(${number}% - 4%);
              top: 50%;
              bottom: 50%;
            }
            40% {
              top: 80%;
            }
            
          }
          @keyframes dotmoveLeft {
            0% {
                top: 50%;
                bottom: 50%;
                right: 50%;
                left: ${50}%;
              }
              20% {

                left: calc(${number}% + 2%);
                top: 50%;
                bottom: 50%;
              }
              40% {
                top: 80%;
              }
              
            }
          `}
      </style>
      <div className="min-h-screen w-screen overflow-x-hidden bg-black text-white flex items-center justify-center">
        <div className="w-2/3 relative h-full flex flex-col gap-14">
          <div className="outer-container ">
            {/* <div className="dot-popping"></div> */}
            <div style={dotMoveAnimation.popping}></div>
            <div style={GoUpPosition} className="go-up">{number}</div>
            <h3 style={stayUpPosition} className="transition">
              {number}
            </h3>
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
