"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <h1 className="text-2xl">Tweetle</h1>
      <h3 className="text-xl">Folder Structure</h3>
      <p>Home Page</p>
      <p>Sign-up Page</p>
      <p>Sign-in Page</p>
      <p>Create Post</p>
      <p>Show Your Post</p>
      <p>Contact</p>
    </div>
  );
}
