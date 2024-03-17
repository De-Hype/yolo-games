import react from "./../assets/react.svg";

const LotteryTickets = () => {
  return (
    <div className="my-6 flex  gap-10">
        <img src={react} alt="" />
        <div className="">
            <p className="text-slate-400 text-base">Your Tickets</p>
            <h3 className=" text-2xl font-bold leading-9 text-white">0</h3>
        </div>
        <div className="">
        <p className="text-slate-400 text-base">Play games to earn Lottery Tickets!</p>
        <p className="text-slate-400 text-base">You can use your tickets in the Daily or Weekly Draw...<span className="text-lg text-lime-500 underline">Learn More</span></p>
        </div>
    </div>
  )
}

export default LotteryTickets