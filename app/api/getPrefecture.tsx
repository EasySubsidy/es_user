import { Collection } from "../entity";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

interface Prefecture {
  id: string;
  prefecture_name: string;
}

const getAllPrefectures = async (): Promise<Prefecture[]> => {
  try {
    const prefectureCollectionRef = collection(db, Collection.PREFECTURE);
    const snapshot = await getDocs(prefectureCollectionRef);
    console.log("snapshots: ", snapshot.docs);
    const prefectures: Prefecture[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      prefecture_name: doc.data().prefecture_name,
    }));
    console.log("tenants: ", prefectures);
    return prefectures;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw new Error("Error getting documents");
  }
};

export { getAllPrefectures };
export type { Prefecture };
