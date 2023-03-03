import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import { XSquare } from "react-feather";

const Search = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <Card className="flex flex-col items-center justify-center w-full h-full bg-slate-100">
      <div className="flex flex-row justify-between items-between">
        <h1 className="text-4xl font-bold">Search</h1>
        <Button className="" size="small" onClick={handleClick}>
          <XSquare />
        </Button>
      </div>
      <Input className="" />
    </Card>
  );
};

export default Search;
