import { useState } from "react";
import { FaEthereum } from "react-icons/fa";

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
            className={`border-r cursor-pointer py-1 px-3 font-semibold  ${
              historyClickedAll ? "glass text-lime-500" : ""
            }`}
          >
            All
          </span>
          <span
            onClick={handleHistorySectionDaily}
            className={`border-r cursor-pointer py-1 px-2 font-semibold  ${
              historyClickedDaily ? "glass  text-lime-500" : ""
            }`}
          >
            Daily
          </span>
          <span
          onClick={handleHistorySectionWeekly}
            className={` cursor-pointer py-1 px-2  font-semibold ${
              historyClickedWeekly ? "glass text-lime-500" : ""
            }`}
          >
            Weekly
          </span>
        </div>
      </div>
      <div
        id=""
        className=" border glass rounded-md py-2 px-1  border-slate-400"
      >
        <div
          id="bottom-border"
          className="flex  items-center justify-between  py-2 px-2"
        >
          <p className="text-slate-400 text-sm">#</p>
          <p className="text-slate-400 text-sm">Prize Pool</p>

          <p className="text-slate-400 text-sm">Your winnings</p>
          <p className="text-slate-400 text-sm">Your Entries</p>
          <p className="text-slate-400 text-sm">Players</p>
          <p className="text-slate-400 text-sm">Entries</p>
        </div>
      </div>
    </div>
  );
};

export default LotterHistory;
