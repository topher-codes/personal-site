"use client";
import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import { XSquare } from "react-feather";
import { useState, useEffect } from "react";
import { searchBlogPosts } from "@/lib/SearchHelper";

const Search = ({ handleClick }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <div className="flex flex-row justify-between items-between">
        <h1 className="text-4xl font-bold">Search</h1>
        <div className="hover:scale-105 hover:cursor-pointer">
          <XSquare onClick={handleClick} />
        </div>
      </div>
      <Input className="" value={input} onChange={handleChange} />
    </div>
  );
};

export default Search;
