import { Collection } from "../entity";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export interface UserData {
  uid: string;
  favorites: string[];
}

const getUserInfo = async (uid: string): Promise<UserData> => {
  try {
    const userDocRef = doc(db, Collection.USER, uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data() as UserData;
      console.log("User data found: ", userData);
      return userData;
    } else {
      console.log("No user data found for the specified uid.");
      return { uid: uid, favorites: [] };
    }
  } catch (error) {
    console.error("Error getting user favorites: ", error);
    throw new Error("Error getting user favorites");
  }
};

export { getUserInfo };
