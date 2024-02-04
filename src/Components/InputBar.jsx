import { IoClose } from "react-icons/io5";
import { FaArrowRightArrowLeft, FaPercent } from "react-icons/fa6";
const InputBar = ({onInputChange, rollClicked, handleRollClick, inputs}) => {
  
  return (
    <div className="w-full flex items-center justify-between gap-4 mt-5">
      <div className="w-full invisible">
        <label className="font-medium text-gray-800 " htmlFor="">Muliplier</label>
        <div className="long-input flex mt-2 items-center border-2 shadow-md border-gray-800 py-1 px-2">
          <input
            className=" w-full font-semibold outline-none px-1 border-none  remove-arrow"
            type="number"
            onChange={(e)=>onInputChange('multiplierInput', e.target.value)}
            name=""
            id=""
            defaultValue={1.98}
            min={1.98}
            
            max={99}
          />
          <span className="">
            <IoClose className="cursor-pointer" />
          </span>
        </div>
      </div>
      <div className="w-full">
        <label  className="font-medium text-gray-800 "  htmlFor="">{rollClicked ? "Roll Under" :"Roll Over"}</label>
        <div className="long-input flex justify-between items-center border-2 mt-2 shadow-lg border-gray-800  ">
          <input
            className="w-full font-semibold outline-none px-1 border-none  remove-arrow"
            type="number"
            name=""
            id=""
            onChange={(e)=>onInputChange('rolloverInput', e.target.value)}
            min='5'
             value={inputs.rolloverInput}
            // defaultValue={50}
            max='99'
          />
          <button type="button" onClick={handleRollClick} className="bg-gray-800 py-2 px-3 shadow-lg items-center flex justify-center">
            <FaArrowRightArrowLeft className="cursor-pointer bg-gray-800" />
          </button>
        </div>
      </div>
      <div className="w-full invisible">
        <label  className="font-medium text-gray-800 "  htmlFor="">Win Chance</label>
        <div className="long-input flex mt-2 items-center border-2 shadow-md border-gray-800 py-1 px-2">
          <input
            className="w-full font-semibold outline-none px-1 border-none  remove-arrow"
            type="number"
            min={50}
            defaultValue={50}
            onChange={(e)=>onInputChange('chanceInput', e.target.value)}
            name=""
            id=""
            
            max={99}
          />
          <span className="">
            <FaPercent className="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputBar;
