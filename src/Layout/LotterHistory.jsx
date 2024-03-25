import { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import { HistoryData } from "../lib/HistoryData";

const LotterHistory = () => {
  const [historyClickedAll, setHistoryClickedAll] = useState(true);
  const [historyClickedWeekly, setHistoryClickedWeekly] = useState(false);
  const [historyClickedDaily, setHistoryClickedDaily] = useState(false);
  const handleHistorySectionAll = () => {
    setHistoryClickedDaily(false);
    setHistoryClickedWeekly(false);
    setHistoryClickedAll(true);
  };
  const handleHistorySectionWeekly = () => {
    setHistoryClickedAll(false);
    setHistoryClickedDaily(false);
    setHistoryClickedWeekly(true);
  };
  const handleHistorySectionDaily = () => {
    setHistoryClickedAll(false);
    setHistoryClickedWeekly(false);
    setHistoryClickedDaily(true);
  };
  return (
    <div className="py-5 mt-3">
      <div className="flex items-center md:flex-col md:items-start gap-3 text-white mb-3">
        <h3 className=" text-2xl font-bold leading-9">Lottery History</h3>
        <div className="flex items-center border   rounded-md text-sm ">
          <span
            onClick={handleHistorySectionAll}
            className={`border-r cursor-pointer py-2 px-4 font-semibold  ${
              historyClickedAll ? "glass text-lime-500" : ""
            }`}
          >
            All
          </span>
          <span
            onClick={handleHistorySectionDaily}
            className={`border-r cursor-pointer py-2 px-4 font-semibold  ${
              historyClickedDaily ? "glass  text-lime-500" : ""
            }`}
          >
            Daily
          </span>
          <span
            onClick={handleHistorySectionWeekly}
            className={` cursor-pointer py-2 px-4  font-semibold ${
              historyClickedWeekly ? "glass text-lime-500" : ""
            }`}
          >
            Weekly
          </span>
        </div>
      </div>
      <div
        id=""
        className=" border md:overflow-x-auto  glass rounded-md py-2 px-1  border-slate-400"
      >
        <div
          id="bottom-border"
          className="flex  md:w-[150vw] items-center justify-between gap-5 w-full  py-2 px-2"
          >
          <p className="text-slate-400 text-sm">#</p>
          <div className="flex w-full pl-6 gap-4 items-center justify-between">

          <p className="text-slate-400 text-sm">Prize Pool</p>

          <p className="text-slate-400 text-sm">Your winnings</p>
          <p className="text-slate-400  text-sm">Your Entries</p>
          <p className="text-slate-400 text-sm">Players</p>
          <p className="text-slate-400 text-sm">Entries</p>
          <p className="text-slate-400 text-sm">Date</p>
          </div>
          <p className="text-slate-400 text-sm">Verify</p>
        </div>
        {HistoryData?.map((value, index) => (
          <div
            className="flex  md:w-[150vw] items-center justify-between gap-5 w-full  py-2 px-2"
            key={index}
          >
            <p className="text-slate-400  text-sm">{value.id}</p>

           
            <div className="flex w-full pl-6  items-center justify-between">
            <p className="text-white text-right flex items-center   text-sm">

              {value.prize}
              <span className="bg-white px-1 py-1 rounded-full">
                <FaEthereum className="text-right text-slate-800" />
              </span>
            </p>

            <p className="text-white  pl-4 md:ml-12 text-sm">-</p>
            <p className="text-white  pl-12 md:ml-7 text-sm">-</p>
            <p className="text-white  pl-12 md:ml-7 text-sm">{value.players}</p>
            <p className="text-white  pl-4 text-sm">{value.entries}</p>
            
            <div className="text-slate-400 flex md:pl-2 flex-col items-end text-sm">
              <p>{value.time}</p>
              <p>{value.date}</p>
            </div>
            </div>
            <p className="text-lime-400 text-lg"><FaEllipsis  /> </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default LotterHistory;
