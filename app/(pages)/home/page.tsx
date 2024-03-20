"use client";

import { TenantsProvider } from "@/app/context";
import Home from "@/app/page";
import { MainContent } from "@/app/ui/MainContent";
import { TagBar } from "@/app/ui/TagBar.tsx";
import { useState } from "react";

export type OrderType = "rent" | "area" | "distance";

const HomePage = () => {
  const [orderType, setOrderType] = useState<OrderType>("rent");
  const handleOrderType = (type: OrderType) => {
    setOrderType(type);
  };
  return (
    <Home>
      <TenantsProvider>
        <TagBar orderType={orderType} setOrderType={handleOrderType} />

        {/* <Banner /> */}
        <MainContent orderType={orderType} />
      </TenantsProvider>
    </Home>
  );
};

export default HomePage;
