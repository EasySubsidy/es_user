"use client";

import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { Prefecture, getAllPrefectures } from "../api/getPrefecture";

type PrefectureContextType = {
  prefectures: Prefecture[];
};

const PrefecturesContext = createContext<PrefectureContextType>({
  prefectures: [],
});

export const usePrefectures = () => useContext(PrefecturesContext);

export const PrefecturesProvider = ({ children }: { children: ReactNode }) => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    const fetchTenants = async () => {
      try {
        const fetchedPrefectures = await getAllPrefectures();
        if (fetchedPrefectures !== prefectures) {
          setPrefectures(fetchedPrefectures);
        }
      } catch (error) {
        console.error("Failed to fetch tenants:", error);
      }
    };

    fetchTenants();
  }, []);

  const value = {
    prefectures,
  };

  return (
    <PrefecturesContext.Provider value={value}>
      {children}
    </PrefecturesContext.Provider>
  );
};
