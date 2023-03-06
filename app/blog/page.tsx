import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Card from "@/components/Card";
import BlogModal from "@/components/BlogModal";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Image from "next/image";

const BlogPage = async () => {
  const posts = fs.readdirSync(path.join("posts")).map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    const content = markdownWithMeta;
    return {
      slug,
      frontmatter,
      content,
    };
  });

  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-auto">
      <h1 className="py-6 text-4xl font-bold">Blog</h1>
      {posts
        .filter((post) => post.slug === "2-coverletter")
        .map((post) => (
          <Card key={post.slug} className="w-1/2 p-6 m-6">
            <p className="text-3xl font-bold text-slate-600">
              {post.frontmatter.title}
            </p>
            <p className="py-4">{post.frontmatter.description}</p>
            <p>{post.frontmatter.publishedAt}</p>
            <BlogModal>
              <Image
                src="/images/coverletter-1.png"
                height={1000}
                width={800}
                alt="cover letter"
              />
            </BlogModal>
          </Card>
        ))}
      {posts.map((post) => (
        <Card key={post.slug} className="w-1/2 p-6 m-6">
          <p className="text-3xl font-bold text-slate-600">
            {post.frontmatter.title}
          </p>
          <p className="py-4">{post.frontmatter.description}</p>
          <p>{post.frontmatter.publishedAt}</p>
          <BlogModal>{post.content}</BlogModal>
        </Card>
      ))}
      <div id="modal" />
    </div>
  );
};

export default BlogPage;
