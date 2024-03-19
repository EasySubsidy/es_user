"use client";

import { Header } from "./ui/Header";
import { TagBar } from "./ui/TagBar.tsx";
import { Banner } from "./ui/Banner";
import { MainContent } from "./ui/MainContent";
import { TenantsProvider } from "@/app/context";

const Home = () => {
  return (
    <TenantsProvider>
      <main
        // className="flex min-h-screen flex-col items-center justify-between p-24"
        className="flex min-h-screen flex-col items-center"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <Header />
        <TagBar />
        <Banner />
        <MainContent />
      </main>
    </TenantsProvider>
  );
};

export default Home;
