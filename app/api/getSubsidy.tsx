import { Collection } from "../entity";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

interface Subsidy {
  id: string;
  city_id: string;
  info_url: string;
  prefecture_id: string;
  requirement_employee_new: number;
  subsidy_area: number;
  subsidy_employment_fulltime: number;
  subsidy_employment_parttime: number;
  subsidy_employment_title: string;
  subsidy_office_limit_large_amount: number;
  subsidy_office_limit_large_description: string;
  subsidy_office_limit_small_amount: number;
  subsidy_office_limit_small_description: string;
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
const getSubsidyByCityId = async (cityId: string): Promise<Subsidy | null> => {
  try {
    const subsidyCollectionRef = collection(db, Collection.SUBSIDY);
    const q = query(subsidyCollectionRef, where("city_id", "==", cityId));
    const snapshot = await getDocs(q);
    console.log("snapshots: ", snapshot.docs);

    if (snapshot.docs.length === 0) {
      return null;
    }

    const doc = snapshot.docs[0];
    const subsidy: Subsidy = {
      id: doc.id,
      city_id: doc.data().city_id || "",
      info_url: doc.data().info_url || "",
      prefecture_id: doc.data().prefecture_id || "",
      requirement_employee_new: doc.data().requirement?.employee_new || 0,
      subsidy_area: doc.data().requirement?.area || 0,
      subsidy_employment_fulltime:
        doc.data().subsidy?.employment?.fulltime || 0,
      subsidy_employment_parttime:
        doc.data().subsidy?.employment?.parttime || 0,
      subsidy_employment_title: doc.data().subsidy?.employment?.title || "",
      subsidy_office_limit_large_amount:
        doc.data().subsidy?.office?.limit?.large?.amount || 0,
      subsidy_office_limit_small_amount:
        doc.data().subsidy?.office?.limit?.small?.amount || 0,
      subsidy_office_limit_large_description:
        doc.data().subsidy?.office?.limit?.large?.description || "",
      subsidy_office_limit_small_description:
        doc.data().subsidy?.office?.limit?.small?.description || "",
      subsidy_office_rate: doc.data().subsidy?.office?.rate || 0,
      subsidy_office_title: doc.data().subsidy?.office?.title || "",
      subsidy_rent_limit_large_amount:
        doc.data().subsidy?.rent?.limit?.large?.amount || 0,
      subsidy_rent_limit_large_description:
        doc.data().subsidy?.rent?.limit?.large?.description || "",
      subsidy_rent_limit_small_amount:
        doc.data().subsidy?.rent?.limit?.small?.amount || 0,
      subsidy_rent_limit_small_description:
        doc.data().subsidy?.rent?.limit?.small?.description || "",
      subsidy_rent_rate: doc.data().subsidy?.rent?.rate || 0,
      subsidy_rent_title: doc.data().subsidy?.rent?.title || "",
      subsidy_rent_time: doc.data().subsidy?.rent?.time || 0,
    };

    console.log("subsidy: ", subsidy);
    return subsidy;
  } catch (error) {
    console.error("Error getting document: ", error);
    throw new Error("Error getting document");
  }
};

export { getSubsidyByCityId };
export type { Subsidy };
