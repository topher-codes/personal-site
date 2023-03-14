"use client";

import Button from "./Button";
import Card from "./Card";
import SearchBar from "./Search";
import { Search } from "react-feather";
import { useState } from "react";
import Link from "next/link";

const Header = ({ posts }) => {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(!pressed);
  };
  return (
    <Card className="flex flex-row items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-1/2 h-full">
        <h1 className="max-md:text-xl text-4xl font-bold">Christopher Andrews</h1>
        <h2 className="max-md:text-sm text-2xl font-bold">Software Engineer</h2>
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
      <div className="flex flex-col items-center justify-center px-2 md:hidden">
        <Link href="/blog" className="text-sm">
          Blog
        </Link>
        <Link href="/projects" className="text-sm">
          Projects
          
        </Link>
        <Link href="/" className="text-sm">
          Home
        </Link>
      </div>
    </Card>
  );
};

export default Header;
