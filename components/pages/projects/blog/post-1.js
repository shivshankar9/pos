// pages/blog.js
import Link from "next/link";

const Blog = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
      <div>
        <article className="mb-6">
          <h2 className="text-xl font-semibold">
            <Link href="/blog/post-1">
              How CRM Systems Improve Employee Productivity
            </Link>
          </h2>
          <p>
            In this article, we explore how implementing a CRM system can help improve your business employee productivity by streamlining processes...
          </p>
        </article>
        <article className="mb-6">
          <h2 className="text-xl font-semibold">
            <Link href="/blog/post-2">
              Simplifying Billing with Custom Billing Apps
            </Link>
          </h2>
          <p>
            Discover how our custom billing app can save businesses time and effort by automating invoicing, tracking, and payments...
          </p>
        </article>
      </div>
    </main>
  );
};

export default Blog;
