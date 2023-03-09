"use client";

import Button from "./Button";
import Card from "./Card";
import SearchBar from "./Search";
import { Search } from "react-feather";
import { useState } from "react";

const Header = ({ posts }) => {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(!pressed);
  };
  return (
    <Card className="flex flex-row items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-1/2 h-full">
        <h1 className="text-4xl font-bold">Christopher Andrews</h1>
        <h2 className="text-2xl font-bold">Software Engineer</h2>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 h-full">
        {!pressed ? (
          <Button className="" onClick={handleClick}>
            {" "}
            <Search />{" "}
          </Button>
        ) : (
          <SearchBar handleClick={handleClick} posts={posts} />
        )}
      </div>
    </Card>
  );
};

export default Header;
