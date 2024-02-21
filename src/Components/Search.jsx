import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-yellow-950 px-5 py-4 min-w-full">
      <form onSubmit={handleSearch} className="">
        <input className="px-3 py-2 bg-black outline-none border-none w-full" onChange={(e)=>setSearchTerm(e.target.value)} type="text" name="" placeholder="Search Players..." id="" />
      </form>
    </div>
  );
};

export default Search;