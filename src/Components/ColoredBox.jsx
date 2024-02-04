// import Draggable from "react-draggable";
const ColoredBox = ({ inputs, rollClicked, onInputChange }) => {
    
  const customStyles = {
    width: `${inputs.rolloverInput}%`,
  };
  const inputStyles ={
    width: `100%`,
    cursor:`grab`
}

  return (
    <div className="h-2/3 mb-4">
      <h3 className="font-bold mb-3 text-2xl text-center">
        {inputs.rolloverInput}
      </h3>
      <div className="relative">
      <input type="range" className="absolute opacity-0" name=""  onChange={(e)=>onInputChange('rolloverInput', e.target.value)} style={inputStyles} id="" />
        <div
          className={`w-full h-5 ${
            rollClicked ? "bg-red-500" : "bg-green-500"
          } `}
        >
          <div
            style={customStyles}
            className={`h-full ${
              rollClicked ? "bg-green-600" : "bg-red-500"
            } transition-all`}
          >
           
          </div>
        </div>

        <div className="flex items-center justify-between mt-1">
          <h3 className="ml-3 font-semibold">{rollClicked?5:0.1}</h3>
          <h3 className="mr-3 font-semibold">{rollClicked?99:95}</h3>
        </div>
      </div>
    </div>
  );
};

export default ColoredBox;
