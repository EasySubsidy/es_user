"use client";

import { Footer } from "@/app/ui/footer";
import { Header } from "@/app/ui/Header";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      // className="flex min-h-screen flex-col items-center justify-between p-24"
      className="flex min-h-screen flex-col items-center"
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <Header />
      {children}
      <Footer />
    </main>
  );
}
