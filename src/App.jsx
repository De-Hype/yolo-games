import  Search  from "./Components/Search";
import  Statistics  from "./Components/Statistics";
import  UserInfo  from "./Components/UserInfo";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen px-2 pt-2">
      <Search />
      <UserInfo />
      <Statistics />
    </div>
  );
};

export default App;
