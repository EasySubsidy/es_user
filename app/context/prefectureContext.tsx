"use client";

import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { Prefecture, getAllPrefectures } from "../api/getPrefecture";
import { City } from "../api/getCity";

type PrefectureContextType = {
  prefectures: Prefecture[];
  prefecturesLoading: boolean;
};

const PrefecturesContext = createContext<PrefectureContextType>({
  prefectures: [],
  prefecturesLoading: true,
});

export const usePrefectures = () => useContext(PrefecturesContext);

export const PrefecturesProvider = ({ children }: { children: ReactNode }) => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  const [prefecturesLoading, setPrefecturesLoading] = useState(true);

  useEffect(() => {
    const fetchTenants = async () => {
      setPrefecturesLoading(true);
      try {
        const fetchedPrefectures = await getAllPrefectures();
        setPrefectures(fetchedPrefectures);
      } catch (error) {
        console.error("Failed to fetch tenants:", error);
      } finally {
        setPrefecturesLoading(false);
      }
    };

    fetchTenants();
  }, []);

  const value = {
    prefectures,
    prefecturesLoading,
  };

  return (
    <PrefecturesContext.Provider value={value}>
      {children}
    </PrefecturesContext.Provider>
  );
};
