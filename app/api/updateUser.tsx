import { AppUser } from "../entity";
import { Collection } from "../entity";
import { PostDoc } from "./postDoc";
import { SignupFormData } from "../(pages)/signup/signupForm";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

export const updateUserFavorites = async (
  uid: string,
  favorites: string[]
): Promise<boolean> => {
  try {
    const updatedUser: Partial<AppUser> = {
      favorites: favorites,
    };

    await UpdateDoc<AppUser>(Collection.USER, uid, updatedUser);
    console.log("Uid", uid);
    console.log("Favorites", favorites);
    console.log("User favorites updated successfully");
    return true;
  } catch (error) {
    console.error("Error updating user favorites", error);
    throw error;
  }
};

async function UpdateDoc<T>(
  collection: Collection,
  uid: string,
  updatedData: Partial<T>
): Promise<void> {
  try {
    const docRef = doc(db, collection, uid);
    await updateDoc(docRef, updatedData);
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
}
