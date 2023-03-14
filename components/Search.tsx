"use client";
import Card from "./Card";
import Input from "./Input";
import { XSquare } from "react-feather";
import { useState, } from "react";
import Link from "next/link";

const Search = ({ handleClick, posts }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <div className="flex flex-row justify-between items-between">
        <h1 className="text-sm lg:text-3xl font-bold">Search</h1>
        <div className="hover:scale-105 text-sm hover:cursor-pointer ">
          <XSquare size={10} onClick={handleClick} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full overflow-y-auto">
        <Input className="text-lg lg:text-2xl" value={input} onChange={handleChange} />
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
              <Link href={`/blog/${post.slug}`} onClick={() => setInput("")}>
                <Card className="flex flex-col border-2 border-bg-black">
                  <div>{post.frontmatter.title}</div>
                  <div>{post.frontmatter.description}</div>
                </Card>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Search;
