import { FaLock } from "react-icons/fa";
const Statistics = ({ data }) => {
  
  return (
    <div className="mt-2 green px-3 py-6 rounded">
      <h3 className="text-white font-semibold pb-5 text-lg">Statistics</h3>
      {data?.details.map((value, index) => (
        <div key={index} className="text-white px-5">
          <div className=" px-2 py-1 flex items-center justify-between bg-orange-950">
            <h3 className="">Wagered</h3>
            <p>
              $
              <span>
                {
                  ((Number(value.diceOutcomes.wager) +
                    Number(value.coinFlipOutcomes.wager) +
                    Number(value.rockPaperScissorsOutcomes.wager) +
                    Number(value.slotsOutcomes.wager)) /
                    1e18).toLocaleString()
                }
              </span>
            </p>
          </div>
          <div className="px-2 py-1  flex items-center justify-between">
            <h3 className="">Bets</h3>
            <p>4,480</p>
          </div>
          <div className="px-2 py-1  flex items-center justify-between bg-orange-950">
            <h3 className="">Bets Won</h3>
            <p>1,780</p>
          </div>
          <div className="px-2 py-1  flex items-center justify-between">
            <h3 className="">Bets Lost</h3>
            <p>2,780</p>
          </div>
          <div className=" px-2 py-1 flex items-center justify-between bg-orange-950">
            <h3 className="">Highest Win</h3>
            <p>
              $<span>2, 246</span>
            </p>
          </div>
          <div className="px-2 py-1  flex items-center justify-between">
            <h3 className="">Highest Multiplier</h3>
            <p>2x</p>
          </div>
          <div className=" px-2 py-1 flex items-center justify-between bg-orange-950">
            <h3 className="">Favourite Game</h3>
            <p className="flex items-center">
              <span>
                <FaLock className="text-red-500" />
              </span>
              <span>Plinko</span>
            </p>
          </div>
          <div className=" px-2 py-1 flex items-center justify-between">
            <h3 className="">Gross Profit</h3>
            <p className="text-green-400">
              $<span>1,690, 842</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
