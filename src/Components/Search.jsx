
const Search = ({handleInputChange, handleSubmitForm}) => {

  return (
    <div className="bg-yellow-950 px-5 py-4 min-w-full rounded">
      <form onSubmit={handleSubmitForm} className="">
        <input className="px-3 py-2 text-white bg-black outline-none border-none w-full" onChange={handleInputChange} type="text" name="" placeholder="Search Players..." id="" />
      </form>
    </div>
  );
};

export default Search;