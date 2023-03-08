import { searchBlogPosts } from "@/lib/SearchHelper";

export async function GET(req: Request) {
  const { searchTerm } = req.body;
  const results = searchBlogPosts(searchTerm.value);
  return new Response(JSON.stringify(results), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
