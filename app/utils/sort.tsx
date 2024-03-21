import { Tenant } from "@/app/api/searchTenant";

export const sortByRent = (tenants: Tenant[]): Tenant[] => {
  // tenantsのrentを昇順に並び替える
  return tenants.sort((a, b) => a.rent - b.rent);
};

export const sortByArea = (tenants: Tenant[]): Tenant[] => {
  // tenantsのareaを降順に並び替える
  return tenants.sort((a, b) => b.area - a.area);
};

// export const sortByDistanceFromSta = (tenants: Tenant[]): Tenant[] => {
//   // tenantsのlatitudeを昇順に並び替える
//   return tenants.sort((a, b) => a.latitude_station - b.latitude_station);
// };
