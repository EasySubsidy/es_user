import { Tenant } from "@/app/api/SearchTenant";
import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { getAllTenants } from "@/app/api/SearchTenant";

type TenantContextType = {
  tenants: Tenant[];
  loading: boolean;
};

const TenantsContext = createContext<TenantContextType>({
  tenants: [],
  loading: true,
});

export const useTenants = () => useContext(TenantsContext);

export const TenantsProvider = ({ children }: { children: ReactNode }) => {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [loading, setLoading] = useState(true);

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

  const value = { tenants, loading };

  return (
    <TenantsContext.Provider value={value}>{children}</TenantsContext.Provider>
  );
};
