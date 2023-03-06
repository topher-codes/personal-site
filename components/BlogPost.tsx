"use client";
import { MDXRemote } from "next-mdx-remote";

const BlogPost = ({ source }) => {
  return (
    <>
      <MDXRemote {...source} />
    </>
  );
};

export default BlogPost;
