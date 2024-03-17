import react from "./../assets/react.svg";

const LotteryTickets = () => {
  return (
    <div className="my-6 flex md:flex-col gap-10 md:gap-5">
      <div className="flex  gap-5">

        <img src={react} className="w-12 h-12" alt="" />
        <div className="">
            <p className="text-slate-400 text-base">Your Tickets</p>
            <h3 className=" text-2xl font-bold leading-9 text-white">0</h3>
        </div>
      </div>
        <div className="">
        <p className="text-slate-400 text-base">Play games to earn Lottery Tickets!</p>
        <p className="text-slate-400 text-base md:flex md:flex-col">You can use your tickets in the Daily or Weekly Draw...<span className="text-lg text-lime-500 underline">Learn More</span></p>
        </div>
    </div>
  )
}

export default LotteryTickets