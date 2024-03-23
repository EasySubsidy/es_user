import { Collection } from "../entity";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

interface Subsidy {
  id: string;
  city_id: string;
  info_url: string;
  prefecture_id: string;
  requirement_employee_new: number;
  subsidy_employment_fulltime: number;
  subsidy_employment_parttime: number;    
  subsidy_employment_title: string;
  subsidy_office_limit_large_amount: number;
  subsidy_office_limit_large_description: number;
  subsidy_office_limit_small_amount: number;
  subsidy_office_limit_small_description: number;
  subsidy_office_rate: number;
  subsidy_office_title: string;
  subsidy_rent_limit_large_amount: number;
  subsidy_rent_limit_large_description: string;
  subsidy_rent_limit_small_amount: number;
  subsidy_rent_limit_small_description: string;
  subsidy_rent_rate: number;
  subsidy_rent_title: string;
  subsidy_rent_time: number;
}

const getAllSubsidies = async (): Promise<Subsidy[]> => {
  try {
    const cityCollectionRef = collection(db, Collection.SUBSIDY);
    const snapshot = await getDocs(cityCollectionRef);
    console.log("snapshots: ", snapshot.docs);
    const subsidys: Subsidy[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        city_id: doc.data().city_id || '',
        info_url: doc.data().info_url || '',
        prefecture_id: doc.data().prefecture_id || '',
        requirement_employee_new: doc.data().requirement?.employee_new || 0,
        subsidy_employment_fulltime: doc.data().subsidy?.employment?.fulltime || 0,
        subsidy_employment_parttime: doc.data().subsidy?.employment?.parttime || 0,
        subsidy_employment_title: doc.data().subsidy?.employment?.title || '',
        subsidy_office_limit_large_amount: doc.data().subsidy?.office?.limit?.large?.amount || 0,
        subsidy_office_limit_small_amount: doc.data().subsidy?.office?.limit?.small?.amount || 0,
        subsidy_office_limit_large_description: doc.data().subsidy?.office?.limit?.large?.description || '',
        subsidy_office_limit_small_description: doc.data().subsidy?.office?.limit?.small?.description || '',
        subsidy_office_rate: doc.data().subsidy?.office?.rate || 0,
        subsidy_office_title: doc.data().subsidy?.office?.title || '',
        subsidy_rent_limit_large_amount: doc.data().subsidy?.rent?.limit?.large?.amount || 0,
        subsidy_rent_limit_large_description: doc.data().subsidy?.rent?.limit?.large?.description || '',
        subsidy_rent_limit_small_amount: doc.data().subsidy?.rent?.limit?.small?.amount || 0,
        subsidy_rent_limit_small_description: doc.data().subsidy?.rent?.limit?.small?.description || '',
        subsidy_rent_rate: doc.data().subsidy?.rent?.rate || 0,
        subsidy_rent_title: doc.data().subsidy?.rent?.title || '',
        subsidy_rent_time: doc.data().subsidy?.rent?.time || 0, // タイプミスを修正しました
    }));           
      
    console.log("subsidies: ", subsidys);
    return subsidys;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw new Error("Error getting documents");
  }
};

export { getAllSubsidies };
export type { Subsidy };