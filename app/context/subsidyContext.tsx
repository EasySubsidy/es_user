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
  subsidiesLoading: boolean;
};

const SubsidiesContext = createContext<SubsidyContextType>({
  subsidies: [],
  subsidiesLoading: true,
});

export const useSubsidies = () => useContext(SubsidiesContext);

export const SubsidiesProvider = ({ children }: { children: ReactNode }) => {
  const [subsidies, setSubsidies] = useState<Subsidy[]>([]);
  const [subsidiesLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubsidies = async () => {
      setLoading(true);
      try {
        const fetchedSubsidies = await getAllSubsidies();
        setSubsidies(fetchedSubsidies);
      } catch (error) {
        console.error("Failed to fetch subsidies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubsidies();
  }, []);

  const value = { subsidies, subsidiesLoading };

  return (
    <SubsidiesContext.Provider value={value}>{children}</SubsidiesContext.Provider>
  );
};
