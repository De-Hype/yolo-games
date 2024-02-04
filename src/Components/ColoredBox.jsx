// import Draggable from "react-draggable";
const ColoredBox = ({ inputs, rollClicked, onInputChange }) => {
    let value;
    if (inputs.rolloverInput>99){
        value = 99
    } else{
        value= inputs.rolloverInput;
    }
  const customStyles = {
    width: `${value}%`,
  };
  const inputStyles = {
    width: `100%`,
    cursor: `grab`,
  };

  return (
    <div className="bg-gray-600  ">
      <h3 className="font-bold text-white bg-gray-600 mb-3 text-2xl text-center">
        {value}
      </h3>
      <div className="bg-gray-600 absolute right-0 left-0 px-2">
        <div className="relative ">
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

          <div className="flex items-center bg-gray-600 justify-between ">
            <h3 className="ml-3 bg-gray-600 font-semibold">
              {rollClicked ? 5 : 0.1}
            </h3>
            <h3 className="mr-3 bg-gray-600 font-semibold">
              {rollClicked ? 99.9 : 95}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColoredBox;
