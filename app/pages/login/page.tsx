"use client";

import Home from "@/app/page";
import { LoginForm } from "@/app/pages/login/LoginForm";

export const Page = () => {
  return (
    <Home>
      <div className="h-full flex flex-grow justify-center items-center">
        <LoginForm />
      </div>
    </Home>
  );
};

export default Page;
