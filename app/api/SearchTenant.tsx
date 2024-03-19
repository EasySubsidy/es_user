import { Collection } from "../entity";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

interface Tenant {
  id: string;
  prefecture_id: string;
  city_id: string;
  subsidy_id: string;
  title: string;
  images: [string];
  area: number;
  description: string;
  rent: number;
  address: string;
  latitude: number;
  longitude: number;
  name_station: string;
  address_station: string;
  latitude_station: number;
  longitude_station: number;
}

const getAllTenants = async (): Promise<Tenant[]> => {
  try {
    const tenantCollectionRef = collection(db, Collection.TENANT);
    const snapshot = await getDocs(tenantCollectionRef);
    console.log("snapshots: ", snapshot.docs);
    const tenants: Tenant[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      prefecture_id: doc.data().prefecture_id,
      city_id: doc.data().city_id,
      subsidy_id: doc.data().subsidy_id,
      title: doc.data().title,
      images: doc.data().images,
      area: doc.data().area,
      description: doc.data().description,
      rent: doc.data().rent,
      address: doc.data().location.address,
      latitude: doc.data().location.latitude,
      longitude: doc.data().location.longitude,
      name_station: doc.data().station.name,
      address_station: doc.data().station.address,
      latitude_station: doc.data().station.latitude,
      longitude_station: doc.data().station.longitude,
    }));
    console.log("tenants: ", tenants);
    return tenants;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw new Error("Error getting documents");
  }
};

export { getAllTenants };
export type { Tenant };
