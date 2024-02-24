import Search from "./Components/Search";
import Statistics from "./Components/Statistics";
import UserInfo from "./Components/UserInfo";
import "./App.css";
import { useEffect, useState } from "react";
import PlayersDetails from "./lib/Data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const FilterFunction = (searchTerm) => {
    return PlayersDetails.filter(
      (value) => value.playersAddress === searchTerm
    );
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();

    setData(FilterFunction(searchTerm)[0]);
    
  };

  return (
    <div className="bg-stone-800 min-h-screen px-2 pt-2">
      <Search
        handleInputChange={handleInputChange}
        handleSubmitForm={handleSubmitForm}
      />
      <UserInfo data={data} />
      <Statistics data={data} />
    </div>
  );
};

export default App;
