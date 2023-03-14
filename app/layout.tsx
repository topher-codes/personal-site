import fs from "fs";
import path from "path";
import matter from "gray-matter";
import "@/styles/global.css";
import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = fs.readdirSync(path.join("posts")).map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return (
    <html lang="en">
      <head />
      <body className="w-screen h-screen lg:p-6 candy-mesh">
        <GlassPane className="flex items-center w-full h-full ">
          <Sidebar className="max-md:hidden" />
          <div className="flex flex-col items-center w-full h-full">
            <div className="flex flex-row items-center w-full ">
              <Header posts={posts} />
            </div>
            {children}
          </div>
        </GlassPane>
        <div id="modal" />
      </body>
    </html>
  );
}
