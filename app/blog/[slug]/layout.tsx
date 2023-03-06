import Card from "@/components/Card";

const BlogRootLayout = ({ children }: { children: React.ReactNode }) => {
  return <Card className="w-full h-full p-6 overflow-y-auto">{children}</Card>;
};

export default BlogRootLayout;
