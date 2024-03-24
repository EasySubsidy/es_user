"use client";

import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { Tenant, getAllTenants } from "../api/searchTenant";
import { Prefecture, getAllPrefectures } from "../api/getPrefecture";
import { City, getAllCities } from "../api/getCity";
import { set } from "firebase/database";

type CitiesContextType = {
  cities: City[];
};

const CitiesContext = createContext<CitiesContextType>({
  cities: [],
});

export const useCities = () => useContext(CitiesContext);

export const CitiesProvider = ({ children }: { children: ReactNode }) => {
  // const [prefectures, setPrefectures] = useState<City[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const fetchedCities = await getAllCities();
        if (fetchedCities !== cities) {
          setCities(fetchedCities);
        }
      } catch (error) {
        console.error("Failed to fetch tenants:", error);
      }
    };

    fetchCities();
  }, []);

  const value = { cities };

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};
