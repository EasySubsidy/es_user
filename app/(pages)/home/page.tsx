"use client";

import { TenantsProvider } from "@/app/context";
import Home from "@/app/page";
import { MainContent } from "@/app/ui/MainContent";

const HomePage = () => {
  return (
    <Home>
      <TenantsProvider>
        {/* <TagBar /> */}
        {/* <Banner /> */}
        <MainContent />
      </TenantsProvider>
    </Home>
  );
};

export default HomePage;
