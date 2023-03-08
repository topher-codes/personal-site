import fs from "fs";
import path from "path";
import matter from "gray-matter";

function searchBlogPosts(input: string) {
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

  const results = posts.filter((post) => {
    const { title, description } = post.frontmatter;
    const { content } = post;
    const searchTarget = `${title} ${description} ${content}`;
    return searchTarget.toLowerCase().includes(input.toLowerCase());
  });
  return [...results];
}

export default async function handler(req, res) {
  const { searchTerm } = req.body;
  const results = searchBlogPosts(searchTerm.value);
  return res.status(200).json(results);
}
