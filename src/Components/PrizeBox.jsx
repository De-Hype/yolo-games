const PrizeBox = () => {
  return (
    <>
      <div className="flex py-2 yellow-radial-bg mb-1 items-center border border-slate-700 rounded-md justify-center pb-1">
        <div className="flex flex-col items-center ">
          <div
            className="bg-yellow-200 h-14 w-14 px-1 py-2   flex items-center justify-center"
            id="hexa-shape"
          >
            <h3 className="text-yellow-200 bg-black flex items-center justify-center h-10 w-10 rounded-full font-semibold text-3xl">
              1
            </h3>
          </div>
          <h3 className="text-yellow-200  font-semibold text-5xl">1.18524</h3>
          <p className="text-slate-400 text-sm">$4,346.11</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex w-full green-radial-bg items-center pl-5 gap-7 border border-slate-700 rounded-md px-2 py-1">
          <div
            className="bg-green-300 h-10 w-10 px-1 py-2 flex items-center justify-center"
            id="hexa-shape"
          >
            <h3 className="text-green-300 bg-black flex items-center justify-center h-8 w-8 rounded-full font-semibold text-3xl">
              2
            </h3>
          </div>
          <div className="flex items-center flex-col">
            <h3 className="text-green-300 font-bold text-lg ">78,589</h3>
            <p className="text-slate-400 text-sm">$1,448.75</p>
          </div>
        </div>
        <div className="flex w-full orange-radial-bg items-center pl-5 gap-7 border border-slate-700 rounded-md px-2 py-1 ">
          <div
            className="bg-orange-400 h-11 w-11 px-1 py-2 flex items-center justify-center"
            id="hexa-shape"
          >
            <h3 className="text-orange-400 bg-black flex items-center justify-center h-8 w-8 rounded-full font-semibold text-3xl">
              3
            </h3>
          </div>
          <div className="flex items-center flex-col">
            <h3 className="text-orange-400 font-bold text-lg ">78,589</h3>
            <p className="text-slate-400 text-sm">$1,448.75</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrizeBox;
