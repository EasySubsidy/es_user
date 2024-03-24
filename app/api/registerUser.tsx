import { AppUser } from "../entity";
import { Collection } from "../entity";
import { PostDoc } from "./postDoc";
import { SignupFormData } from "../(pages)/signup/signupForm";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

export const registerUser = async (uid: string, data: SignupFormData) => {
  try {
    const appUser: AppUser = {
      email: data.email,
      // favorites: [],
    };
    PostDoc<AppUser>(Collection.USER, uid, appUser);
  } catch (error) {
    console.error("upload file was failed", error);
    return;
  }
};

// export const updateUserFavorites = async (
//   uid: string,
//   favorites: string[]
// ): Promise<boolean> => {
//   try {
//     const updatedUser: Partial<AppUser> = {
//       favorites: favorites,
//     };

//     await UpdateDoc<Partial<AppUser>>(Collection.USER, uid, updatedUser);
//     console.log("User favorites updated successfully");
//     return true;
//   } catch (error) {
//     console.error("Error updating user favorites", error);
//     throw error;
//   }
// };

// async function UpdateDoc<T>(
//   collection: Collection,
//   uid: string,
//   updatedData: Partial<T>
// ): Promise<void> {
//   try {
//     const docRef = doc(db, collection, uid);
//     await updateDoc(docRef, updatedData);
//   } catch (error) {
//     console.error("Error updating document:", error);
//     throw error;
//   }
// }
