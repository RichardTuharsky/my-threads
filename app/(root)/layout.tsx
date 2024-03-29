import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { dark } from "@clerk/themes";

import "../globals.css";
import { Clerk } from "@clerk/nextjs/server";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>

    </ClerkProvider>
  )
}