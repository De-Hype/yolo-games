import { useState } from "react";
import "./App.css";
import PrizeDropDown from "./Components/PrizeDropDown";
import Box from "./Layout/Box";
import LotteryHeader from "./Layout/LotteryHeader";
import { DailyDrawProp, WeeklyDrawProp } from "./lib/DrawPropData";
import EntriesDropDown from "./Components/EntriesDropDown";
import LotterHistory from "./Layout/LotterHistory";
import LotteryTickets from "./Layout/LotteryTickets";

const App = () => {
  const [showPrizeDropdown, setShowPrizeDropdown] = useState(false);
  const [showEntriesDropdown, setShowEntriesDropdown] = useState(false);
  const handlePrizeDropDown = () => {
    setShowPrizeDropdown(!showPrizeDropdown);
  };
  const handleEntriesDropDown = () => {
    setShowEntriesDropdown(!showEntriesDropdown);
  };
  return (
    <div
      className={`relative min-h-screen px-2 pt-2 w-full text-white bg-indigo-900 md:px-1 ${
        showPrizeDropdown || showEntriesDropdown
          ? "overflow-y-hidden h-screen"
          : ""
      } `}
    >
      <div
        className={`mx-auto w-3/4 lg:w-full md:px-3 pt-16 ${
          showPrizeDropdown || showEntriesDropdown
            ? "blur -z-50 overflow-hidden "
            : ""
        }`}
      >
        <LotteryHeader />
        <Box
          handlePrizeDropDown={handlePrizeDropDown}
          showPrizeDropdown={showPrizeDropdown}
          handleEntriesDropDown={handleEntriesDropDown}
          showEntriesDropdown={showEntriesDropdown}
          prop={DailyDrawProp}
        />
        <Box
          handlePrizeDropDown={handlePrizeDropDown}
          showPrizeDropdown={showPrizeDropdown}
          handleEntriesDropDown={handleEntriesDropDown}
          showEntriesDropdown={showEntriesDropdown}
          prop={WeeklyDrawProp}
        />
        <LotteryTickets />
        <LotterHistory />
      </div>
      {showPrizeDropdown && (
        <PrizeDropDown handlePrizeDropDown={handlePrizeDropDown} />
      )}
      {showEntriesDropdown && (
        <EntriesDropDown handleEntriesDropDown={handleEntriesDropDown} />
      )}
    </div>
  );
};

export default App;
