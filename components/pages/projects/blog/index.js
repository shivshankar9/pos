// pages/blog/index.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

// Example blog data (you could fetch this from a CMS or API)
const blogPosts = [
  { title: "Why CRM is Crucial for Business Growth", slug: "crm-business-growth" },
  { title: "How Employee Management Systems Boost Productivity", slug: "employee-management" },
  { title: "The Importance of Custom Billing Apps for Small Businesses", slug: "custom-billing-apps" },
  // Add more posts as needed
];

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog - CRM and Software Development Insights</title>
        <meta name="description" content="Stay updated with the latest trends and insights on CRM, employee management systems, and custom billing apps." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog - CRM and Software Development Insights" />
        <meta
          property="og:description"
          content="Stay updated with the latest trends and insights on CRM, employee management systems, and custom billing apps."
        />
        <meta property="og:url" content="https://yourwebsite.com/blog" />
      </Head>

      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
          <ul>
            {blogPosts.map((post) => (
              <li key={post.slug} className="mb-4">
                <Link href={`/blog/${post.slug}`}>
                  <a className="text-xl font-semibold text-blue-500 hover:underline">{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Blog;
