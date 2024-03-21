import { Collection } from "../entity";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

interface UserData {
  uid: string;
  favorites: string[];
}

const getUserFavorites = async (uid: string): Promise<string[]> => {
  try {
    const userDocRef = doc(db, Collection.USER, uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data() as UserData;
      console.log("User data found: ", userData);
      return userData.favorites;
    } else {
      console.log("No user data found for the specified uid.");
      return [];
    }
  } catch (error) {
    console.error("Error getting user favorites: ", error);
    throw new Error("Error getting user favorites");
  }
};

export { getUserFavorites };
