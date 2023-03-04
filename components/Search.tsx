import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import { XSquare } from "react-feather";

const Search = ({ handleClick }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <div className="flex flex-row justify-between items-between">
        <h1 className="text-4xl font-bold">Search</h1>
        <div className="hover:scale-105 hover:cursor-pointer">
          <XSquare onClick={handleClick} />
        </div>
      </div>
      <Input className="" />
    </div>
  );
};

export default Search;
