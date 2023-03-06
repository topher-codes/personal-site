import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import BlogPost from "@/components/BlogPost";
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));
  return files.map((filename) => {
    return {
      slug: filename.replace(".mdx", ""),
    };
  });
}

export default async function Page({ params }) {
  const { slug } = params;
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", `${slug}.mdx`),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const source = await serialize(content);

  return (
    <>
      <BlogPost source={source} />
    </>
  );
}
