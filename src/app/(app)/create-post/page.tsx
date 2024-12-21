"use client";

import axios from "axios";
import { useState } from "react";

export default function CreatePost() {
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("/api/create-post", {
      method: "POST",
      headers: { "Content-Type": "application/jsonj" },
      body: JSON.stringify({ content }),
      status: 201,
    });

    if (res.status === 201) {
      alert("Post created successfully");
      setContent("");
    } else {
      alert("Failed to create post");
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      <input
        type="text"
        placeholder="Write your content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border border-gray-400 rounded p-2 text-black"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white p-2 rounded ml-2"
      >
        Submit
      </button>
    </div>
  );
}
