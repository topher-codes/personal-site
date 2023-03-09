import Card from "./Card";
import Link from "next/link";
import Button from "@/components/Button";
import { getBlogPosts } from "@/lib/api";

const SearchLookup = async ({ input }: { input: string }) => {
  const posts = await getBlogPosts();
  const filteredPosts = posts.filter((post) => {
    return post.frontmatter.title.toLowerCase().includes(input.toLowerCase());
  });
  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-auto">
      <h1 className="py-6 text-4xl font-bold">Results</h1>
      {filteredPosts.map((post) => (
        <Card key={post.slug} className="w-1/2 p-6 m-6">
          <p className="text-3xl font-bold text-slate-600">
            {post.frontmatter.title}
          </p>
          <p className="py-4">{post.frontmatter.description}</p>
          <p>{post.frontmatter.publishedAt}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="flex flex-col items-center w-full"
          >
            <Button size="small">Read More</Button>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default SearchLookup;
