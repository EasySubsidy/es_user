import { Collection } from "../entity";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

interface City {
  id: string;
  city_name: string;
  prefecture_id: string;
}

const getAllCities = async (): Promise<City[]> => {
  try {
    const cityCollectionRef = collection(db, Collection.CITY);
    const snapshot = await getDocs(cityCollectionRef);
    console.log("snapshots: ", snapshot.docs);
    const tenants: City[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      city_name: doc.data().city_name,
      prefecture_id: doc.data().prefecture_id,
    }));
    console.log("tenants: ", tenants);
    return tenants;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw new Error("Error getting documents");
  }
};

export { getAllCities };
export type { City };
