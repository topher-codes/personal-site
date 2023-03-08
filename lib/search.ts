import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function searchBlogPosts(searchTerm: string) {
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
    return searchTarget.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return [...results];
}
