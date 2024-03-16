import { FaEthereum } from "react-icons/fa";

const LotterHistory = () => {
  return (
    <div className="py-5">
      <div className="flex items-center gap-3 text-white">
        <h3 className=" text-2xl font-bold">Lottery History</h3>
        <div className="flex items-center border rounded-md ">
          <span className="border-r py-1 px-2">All</span>
          <span className="border-r py-1 px-2">Daily</span>
          <span className=" py-1 px-2">Weekly</span>
        </div>
      </div>
      <div id="" className=" border   border-slate-400">
        <div className="flex border-b items-center justify-between  py-2 px-2">
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
