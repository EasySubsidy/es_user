"use client";

import { City } from "@/app/api/getCity";
import { Tenant } from "@/app/api/searchTenant";
import { PrefecturesProvider, TenantsProvider } from "@/app/context";
import { CitiesProvider } from "@/app/context/cityContext";
import { prefectureEntity } from "@/app/entity/prefectureEntity";

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
  const [selectedPrefecture, setSelectedPrefecture] =
    useState<prefectureEntity>(prefectureEntity.TOKYO);
  // const [selectedCities, setSelectedCities] = useState<City[]>([]);
  const handleSelectedPrefecture = (prefecture: prefectureEntity) => {
    setSelectedPrefecture(prefecture);
  };

  const [city, setCity] = useState<City | null>(null);
  const handleCity = (city: City | null) => {
    setCity(city);
  };

  // const [favoriteTenants, setFavoriteTenants] = useState<Tenant[]>([]);

  // const handleSelectedCities = (cities: City[]) => {
  //   setSelectedCities(cities);
  // }
  return (
    <Home>
      <PrefecturesProvider>
        <CitiesProvider>
          <TenantsProvider>
            <TagBar
              orderType={orderType}
              setOrderType={handleOrderType}
              // selectedPrefecture={selectedPrefecture}
              setSelectedCity={handleCity}
            />

            {/* <Banner /> */}
            <MainContent
              orderType={orderType}
              selectedCity={city}
              // selectedTenants={favoriteTenants}
              // setSelectedTenants={setFavoriteTenants}
            />
          </TenantsProvider>
        </CitiesProvider>
      </PrefecturesProvider>
    </Home>
  );
};

export default HomePage;
