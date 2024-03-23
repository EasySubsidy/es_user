"use client";

import Home from "@/app/page";
import { SignUpForm } from "./signupForm";

export const Page = () => {
  return (
    <Home>
      <div className="h-full flex flex-grow justify-center items-center">
        <SignUpForm />
      </div>
    </Home>
  );
};

export default Page;
