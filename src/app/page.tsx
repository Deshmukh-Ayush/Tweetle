"use client";

interface Blog {
  id: string;
  content: string;
  author: { email: string };
}

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get("/api/blogs")
      .then((res) => res.data)
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <h1 className="text-2xl">Tweetle</h1>
      <h1>All Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>By: {blog.author.email}</h2>
          <p>Content: {blog.content}</p>
        </div>
      ))}
    </div>
  );
}
