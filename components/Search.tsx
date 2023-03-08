"use client";
import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import { XSquare } from "react-feather";
import { useState, useEffect } from "react";
import { searchBlogPosts } from "@/lib/Search";

const Search = ({ handleClick }) => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (input.length > 0) {
      const results = searchBlogPosts(input);
      setResults(results);
    } else {
      setResults([]);
    }
  }, [input]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <div className="flex flex-row justify-between items-between">
        <h1 className="text-4xl font-bold">Search</h1>
        <div className="hover:scale-105 hover:cursor-pointer">
          <XSquare onClick={handleClick} />
        </div>
      </div>
      <Input
        className=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {results.length > 0 && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          {results?.map((result) => (
            <Card
              key={result.slug}
            >
              <h1 className="text-2xl font-bold">{result.title}</h1>
              <p className="text-lg">{result.description}</p>
            </Card>
          ))}

    </div>
  );
};

export default Search;
