const LotteryHeader = () => {
  return (
    <div className="flex items-center md:block  justify-between">
      <h3 className="font-black text-white text-7xl md:text-5xl">LOTTERY</h3> 
      <button type="button" className="bg-white md:mt-6 font-bold text-sm text-black px-4 py-3 rounded-lg">Connect Wallet</button>
    </div>
  );
};

export default LotteryHeader;
