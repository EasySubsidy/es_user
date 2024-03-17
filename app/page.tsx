"use client";

import Head from "next/head";
import Image from "next/image";
import { Header } from "./ui/Header";
import { TagBar } from "./ui/TagBar.tsx";
import { Banner } from "./ui/Banner";
import { Content } from "next/font/google";
import { MainContent } from "./ui/MainContent";
import { useEffect, useState } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./lib/firebase/firebase";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  // const toast = useToast();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);
  return (
    <main
      // className="flex min-h-screen flex-col items-center justify-between p-24"
      className="flex min-h-screen flex-col items-center"
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <Header user={user} />
      <TagBar />
      {/* <Banner /> */}
      <MainContent />
    </main>
  );
};

export default Home;
