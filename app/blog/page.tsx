// app/blog/page.tsx
import Link from "next/link";

// Sample Blog Data
const blogPosts = [
  {
    id: 1,
    title: "Exciting New Opportunities in Design",
    date: "December 19, 2024",
    description:
      "We are thrilled to announce several new job openings in our design team. Join us and make an impact.",
    slug: "exciting-new-opportunities-in-design",
  },
  {
    id: 2,
    title: "Hiring Updates: Join Our Growing Team",
    date: "December 10, 2024",
    description:
      "We're expanding our team! Check out the latest positions available in marketing, tech, and more.",
    slug: "hiring-updates-join-our-growing-team",
  },
  // Add more blog posts here as needed
];

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1 className="text-center text-3xl font-bold mt-10">
        Latest Blog Posts
      </h1>
      <div className="blog-posts mt-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="blog-post p-6 mb-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-purple-600">
              {post.title}
            </h2>
            <p className="text-gray-500 text-sm mt-2">{post.date}</p>
            <p className="text-gray-700 mt-4">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-purple-600 mt-4 inline-block"
            >
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
