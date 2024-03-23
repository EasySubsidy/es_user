import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { Tenant, getAllTenants } from "../api/SearchTenant";
import { Prefecture, getAllPrefectures } from "../api/getPrefecture";
import { City, getAllCities } from "../api/getCity";

type CitiesContextType = {
  cities: City[];
  citiesLoading: boolean;
};

const CitiesContext = createContext<CitiesContextType>({
  cities: [],
  citiesLoading: true,
});

export const useCities = () => useContext(CitiesContext);

export const CitiesProvider = ({ children }: { children: ReactNode }) => {
  // const [prefectures, setPrefectures] = useState<City[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [citiesLoading, setCitiesLoadingLoading] = useState(true);

  useEffect(() => {
    const fetchCities = async () => {
      setCitiesLoadingLoading(true);
      try {
        const fetchedCities = await getAllCities();
        setCities(fetchedCities);
      } catch (error) {
        console.error("Failed to fetch tenants:", error);
      } finally {
        setCitiesLoadingLoading(false);
      }
    };

    fetchCities();
  }, []);

  const value = { cities, citiesLoading };

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};
