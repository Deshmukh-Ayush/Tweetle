import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <h1 className="text-5xl">Tweetle</h1>
      <h3>Folder Structure</h3>
      <p>Home Page</p>
      <p>Sign-up Page</p>
      <p>Sign-in Page</p>
      <p>Create Post</p>
      <p>Show Your Post</p>
      <p>Contact</p>
    </div>
  );
}
