"use client";

import { City } from "@/app/api/getCity";

import {
  PrefecturesProvider,
  // SubsidiesProvider,
  TenantsProvider,
} from "@/app/context";

import { CitiesProvider } from "@/app/context/cityContext";
import { prefectureEntity } from "@/app/entity/prefectureEntity";

import { MainContent } from "@/app/ui/MainContent";
import { TagBar } from "@/app/ui/TagBar.tsx";
import {
  UserInputForSubsidy,
  subsidyDataType,
} from "@/app/utils/subsidy_function";
import { use, useEffect, useState } from "react";

export type OrderType = "rent" | "area" | "distance";

export default function HomePage() {
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

  const [keyword, setKeyword] = useState<string>("");

  const [city, setCity] = useState<City | null>(null);
  const handleCity = async (city: City | null) => {
    setCity(city);

    await new Promise((resolve) => setTimeout(resolve, 300));
  };
  const handleSubsidy = async (subsidy: subsidyDataType) => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    setSubsidy(subsidy);
  };

  const handleUserInput = (userInput: UserInputForSubsidy) => {
    setUserInput(userInput);
  };

  const [userInput, setUserInput] = useState<UserInputForSubsidy>({
    employee_new: 0,
    full_time: 0,
    part_time: 0,
    renovation: 0,
    office_size: "null",
    rent: "null",
  });

  const [subsidy, setSubsidy] = useState<subsidyDataType>({
    subsidy_city_id: "",
    requirement: {
      employee_new: 0,
      area: undefined,
    },
    subsidyDataType: {
      employment: {
        full_time: 0,
        part_time: 0,
        title: "",
      },
      office: {
        large: {
          amount: 0,
          description: "",
        },
        small: {
          amount: 0,
          description: "",
        },
        rate: 0,
        title: "",
      },
      rent: {
        large: {
          amount: 0,
          description: "",
        },
        small: {
          amount: 0,
          description: "",
        },
        rate: 0,
        time: 0,
        title: "",
      },
    },
  });

  useEffect(() => {
    console.log("subsidydata:", subsidy);
  }, [subsidy]);

  // useEffect(() => {
  //   fetchSubsidyData();
  // }, [city, userInput, fetchSubsidyData]);

  // const [favoriteTenants, setFavoriteTenants] = useState<Tenant[]>([]);

  // const handleSelectedCities = (cities: City[]) => {
  //   setSelectedCities(cities);
  // }
  return (
    <PrefecturesProvider>
      <CitiesProvider>
        <TenantsProvider>
          {/* <SubsidiesProvider> */}
          <TagBar
            orderType={orderType}
            setOrderType={handleOrderType}
            // selectedPrefecture={selectedPrefecture}
            city={city}
            setSelectedCity={handleCity}
            subSidy={subsidy}
            setSubsidy={handleSubsidy}
            userInput={userInput}
            setUserInput={handleUserInput}
            setKeyword={setKeyword}
          />
          <MainContent
            orderType={orderType}
            selectedCity={city}
            subSidy={subsidy}
            userInput={userInput}
            keyword={keyword}
            setKeyword={setKeyword}
          />

          {/* </SubsidiesProvider> */}
        </TenantsProvider>
      </CitiesProvider>
    </PrefecturesProvider>
  );
}
