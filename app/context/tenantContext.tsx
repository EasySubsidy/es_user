import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { Tenant } from "../api/searchTenant";

type TenantContextType = {
  tenants: Tenant[];
  tenantsLoading: boolean;
};

const TenantsContext = createContext<TenantContextType>({
  tenants: [],
  tenantsLoading: true,
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

  const value = { tenants, tenantsLoading };

  return (
    <TenantsContext.Provider value={value}>{children}</TenantsContext.Provider>
  );
};
