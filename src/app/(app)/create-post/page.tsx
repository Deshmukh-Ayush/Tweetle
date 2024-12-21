"use client";

import { useState } from "react";

export default function CreatePost() {
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
    setContent("");
  };
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Whats on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border border-gray-400 rounded text-black"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded ml-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
