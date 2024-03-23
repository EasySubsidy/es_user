"use client";

import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { Subsidy, getAllSubsidies } from "../api/getSubsidy";

type SubsidyContextType = {
  subsidies: Subsidy[];
};

const SubsidiesContext = createContext<SubsidyContextType>({
  subsidies: [],
});

export const useSubsidies = () => useContext(SubsidiesContext);

export const SubsidiesProvider = ({ children }: { children: ReactNode }) => {
  const [subsidies, setSubsidies] = useState<Subsidy[]>([]);

  useEffect(() => {
    const fetchSubsidies = async () => {
      try {
        const fetchedSubsidies = await getAllSubsidies();
        setSubsidies(fetchedSubsidies);
      } catch (error) {
        console.error("Failed to fetch subsidies:", error);
      }
    };

    fetchSubsidies();
  }, []);

  const value = { subsidies };

  return (
    <SubsidiesContext.Provider value={value}>
      {children}
    </SubsidiesContext.Provider>
  );
};
