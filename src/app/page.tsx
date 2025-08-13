import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js App with TypeScript",
  description: "A simple Next.js application using TypeScript and React.",
};

export default function Page() {
  return (
    <div>
      <h1>Welcome to the Next.js App with TypeScript!</h1>
      <p>This is a simple page demonstrating the use of TypeScript in a Next.js application.</p>
    </div>
  );
}
