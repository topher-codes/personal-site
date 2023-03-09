"use client";
import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import { XSquare } from "react-feather";
import { useState, useEffect } from "react";
import SearchLookup from "./SearchLookup";
import { getPostBySearch } from "@/lib/api";

const Search = ({ handleClick, posts }) => {
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
      <div className="flex flex-col items-center justify-center w-full h-full overflow-y-auto">
        <Input className="" value={input} onChange={handleChange} />
      </div>
      <div className="absolute top-20">
        {input !== "" &&
          posts
            .filter(
              (post) =>
                post.frontmatter.title.toLowerCase().includes(input) ||
                post.frontmatter.description.toLowerCase().includes(input)
            )
            .map((post) => (
              <Card
                key={post.slug}
                className="flex flex-col border-2 border-bg-black"
              >
                <div>{post.frontmatter.title}</div>
                <div>{post.frontmatter.description}</div>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default Search;
