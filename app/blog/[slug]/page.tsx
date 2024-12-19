// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";

// Sample Data (replace with database or CMS calls)
const blogPosts = [
  {
    id: 1,
    slug: "exciting-new-opportunities-in-design",
    title: "Exciting New Opportunities in Design",
    date: "December 19, 2024",
    content:
      "We are excited to offer several new opportunities for designers to join our growing team. Explore the role and make an impact.",
  },
  {
    id: 2,
    slug: "hiring-updates-join-our-growing-team",
    title: "Hiring Updates: Join Our Growing Team",
    date: "December 10, 2024",
    content:
      "Join our expanding team! We are looking for passionate individuals in various fields. Check out the open positions.",
  },
];

// Dynamic post rendering
const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound(); // Handle 404 page
  }

  return (
    <div className="post-container px-6 py-10">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500 mt-2">{post.date}</p>
      <div className="content mt-6">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default PostPage;
