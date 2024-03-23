"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { paths } from "./consts/paths";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push(paths.home);
  }, []);

  return <div className="bg-white h-screen"></div>;
}
