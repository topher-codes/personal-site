"use client";
import { MDXRemote } from "next-mdx-remote";
import { MDXProvider } from "@mdx-js/react";

const components = {
  h1: (props) => (
    <h1
      className="w-full py-6 text-4xl text-center text-white bg-gradient-to-r from-blue-400 to-purple-500"
      {...props}
    />
  ),
  h2: (props) => <h2 className="text-2xl" {...props} />,
  h3: (props) => <h3 className="text-xl" {...props} />,
  p: (props) => <p className="p-4" {...props} />,
  a: (props) => <a className="text-blue-500" {...props} />,
  code: (props) => <code className="bg-gray-200" {...props} />,
  codeblock: (props) => <code className="bg-gray-200" {...props} />,
  pre: (props) => <pre className="bg-gray-200" {...props} />,
  ul: (props) => <ul className="list-disc" {...props} />,
  ol: (props) => <ol className="list-decimal" {...props} />,
  li: (props) => <li className="p-2" {...props} />,
  blockquote: (props) => <blockquote className="p-4" {...props} />,
  hr: (props) => <hr className="p-4" {...props} />,
  table: (props) => <table className="p-4" {...props} />,
  thead: (props) => <thead className="p-4" {...props} />,
  tbody: (props) => <tbody className="p-4" {...props} />,
  tr: (props) => <tr className="p-4" {...props} />,
  th: (props) => <th className="p-4" {...props} />,
  td: (props) => <td className="p-4" {...props} />,
  img: (props) => <img className="p-4" {...props} />,
  inlineCode: (props) => <code className="bg-gray-200" {...props} />,
};

const BlogPost = ({ source }) => {
  return (
    <>
      <MDXProvider components={components}>
        <MDXRemote {...source} components={components} />
      </MDXProvider>
    </>
  );
};

export default BlogPost;
