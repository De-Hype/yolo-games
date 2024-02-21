import  Search  from "./Components/Search";
import  Statistics  from "./Components/Statistics";
import  UserInfo  from "./Components/UserInfo";
import './App.css'

const App = () => {
  return (
    <div className="bg-stone-800 min-h-screen px-2 pt-2">
      <Search />
      <UserInfo />
      <Statistics />
    </div>
  );
};

export default App;
