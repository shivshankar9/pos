import { useEffect, useState } from "react";

const BlogPost = ({ post }) => {
  if (!post) return <div>Loading...</div>;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div>
        <p>{post.content}</p>
      </div>
    </main>
  );
};

// Fetching data on server-side using `getServerSideProps`
export async function getServerSideProps({ params }) {
  const { slug } = params; // 'slug' corresponds to the dynamic part of the URL

  // Simulating an API request or data fetch based on the slug
  const post = await fetchPostBySlug(slug);

  return {
    props: {
      post: post || null, // If no post is found, return null
    },
  };
}

// Simulated function to fetch post data (replace with actual API or database query)
async function fetchPostBySlug(slug) {
  const posts = [
    { slug: "post-1", title: "First Post", content: "This is the content of the first post." },
    { slug: "post-2", title: "Second Post", content: "This is the content of the second post." },
  ];

  return posts.find(post => post.slug === slug);
}

export default BlogPost;
