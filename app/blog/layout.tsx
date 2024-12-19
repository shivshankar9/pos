// app/blog/layout.tsx
import "../blog/styles/globals.css"; // Import global styles

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="blog-layout">{children}</div>;
};

export default BlogLayout;
