import { AppUser } from "../entity";
import { Collection } from "../entity";
import { PostDoc } from "./postDoc";
import { SignupFormData } from "../pages/signup/signupForm";

export const registerUser = async (uid: string, data: SignupFormData) => {
  try {
    const appUser: AppUser = {
      email: data.email,
    };

    PostDoc<AppUser>(Collection.USER, uid, appUser);
  } catch (error) {
    console.error("upload file was failed", error);
    return;
  }
};
