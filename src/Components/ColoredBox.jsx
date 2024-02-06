// import Draggable from "react-draggable";
const ColoredBox = ({ inputs, rollClicked, onInputChange }) => {
    let value;
    let ShowedValue;
if(rollClicked == false){


    if (inputs.rolloverInput>99){
        value = 99
        ShowedValue = value
    } else if(inputs.rolloverInput<5){
        value=5;
        ShowedValue = value
        // onInputChange("rolloverInput", 5)
    } else{
        value = inputs.rolloverInput;
    }
    if ( value <= 99){ 
        ShowedValue = value
    }
} else{
    
        if (inputs.rolloverInput>95){
            value = 95
            ShowedValue = value
        } else if(inputs.rolloverInput<1){
            value=1;
            ShowedValue = value

        } else{
            value = inputs.rolloverInput;
        }
        if ( value <= 95 ){ 
            ShowedValue = value
        }
    
}
  const customStyles = {
    width: `${ShowedValue}%`,
  };
  const inputStyles = {
    width: `100%`,
    cursor: `grab`,
  };
  const movingStyles ={
    right:`-${ShowedValue}%`,
    left:`${ShowedValue}%`,
    top:`-36px`
  }

  return (
    <div className=" ">

      <div className="absolute right-0 left-0 px-2">
      
        <div className="relative ">
        <h3  style={movingStyles} className={` z font-bold  text-white overflow-x-hidden absolute  mb-3 text-2xl  ${value <= 0 || undefined || NaN ? 'invisible':'visible'  }`}>
        {ShowedValue}
      </h3>
          <input
            type="range"
            className="absolute opacity-0"
            name=""
            onChange={(e) => onInputChange("rolloverInput", e.target.value)}
            style={inputStyles}
            id=""
          />
          <div
            className={`w-full  h-5 ${
              rollClicked ? "bg-red-500" : "bg-green-500"
            } `}
          >
            <div
              style={customStyles}
              className={`h-full   ${
                rollClicked ? "bg-green-600" : "bg-red-500"
              } transition-all`}
            ></div>
          </div>

          <div className="flex items-center justify-between ">
            <h3 className="ml-3 bg-gray-950 font-semibold">
              {rollClicked ? 0.1 : 5}
            </h3>
            <h3 className="mr-3 bg-gray-950 font-semibold">
              {rollClicked ? 95 : 99.9}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColoredBox;
