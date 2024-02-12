import { useState } from "react";

const Dice = ({ GenerateRandomNumber }) => {
  const [rolling, setRolling] = useState(true);
  const [dots, setDots] = useState([]);
  const rollDice = () => {
    GenerateRandomNumber();
    // if (!rolling)return;
    // setRolling(true);
    // setDots([]);
    // const diceValue = Math.floor(Math.random()*6) +1;
    // const newDots=[];
    // for (let i = 0; i < diceValue; i++) {
    //     newDots.push(<div key={i} className={`dot dot-added`}></div>)

    // }
    // setDots(newDots);
    // setTimeout(() => {
    //     setRolling(false)
    // }, 1000000);
  };
  return (
    <>
      <div className="pb-10">
      
        <div className={`dice roll-animation`} onClick={rollDice}>
          {dots}
        </div>
      </div>
    </>
  );
};

export default Dice;
