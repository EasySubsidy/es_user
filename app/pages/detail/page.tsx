import Head from "next/head";
import Image from "next/image";
import { Header } from "../../ui/Header";
import { TagBar } from "../../ui/TagBar.tsx";
import { Banner } from "@/app/ui/Banner";

const Home = () => {
  return (
    <main
      // className="flex min-h-screen flex-col items-center justify-between p-24"
      className="flex min-h-screen flex-col items-center"
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <Header />
      <TagBar />
    </main>
  );
};

export default Home;
