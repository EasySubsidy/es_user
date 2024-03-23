import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { Tenant, getAllTenants } from "../api/SearchTenant";

type TenantContextType = {
  tenants: Tenant[];
  tenantsLoading: boolean;
  fetchTenants: () => Promise<void>;
};

const TenantsContext = createContext<TenantContextType>({
  tenants: [],
  tenantsLoading: true,
  fetchTenants: async () => {},
});

export const useTenants = () => useContext(TenantsContext);

export const TenantsProvider = ({ children }: { children: ReactNode }) => {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [tenantsLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTenants = async () => {
      setLoading(true);
      try {
        const fetchedTenants = await getAllTenants();
        setTenants(fetchedTenants);
      } catch (error) {
        console.error("Failed to fetch tenants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTenants();
  }, []);

  const fetchTenants = async () => {
    setLoading(true);
    try {
      const fetchedTenants = await getAllTenants();
      setTenants(fetchedTenants);
    } catch (error) {
      console.error("Failed to fetch tenants:", error);
    } finally {
      setLoading(false);
    }
  };

  const value = { tenants, tenantsLoading, fetchTenants };

  return (
    <TenantsContext.Provider value={value}>{children}</TenantsContext.Provider>
  );
};
