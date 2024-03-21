"use client";

import { Header } from "./ui/Header";
import { AuthProvider } from "@/app/context";
import { ReactNode } from "react";
import { Footer } from "./ui/footer";

const Home = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <main
        // className="flex min-h-screen flex-col items-center justify-between p-24"
        className="flex min-h-screen flex-col items-center"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <Header />
        {/*  <TagBar />
          <Banner />
          <MainContent /> */}
        {children}
        <Footer />
      </main>
    </AuthProvider>
  );
};

export default Home;
