"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "@/app/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
  sendEmailVerification,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { paths } from "../consts/paths";
import { UserData, getUserInfo } from "../api/getUserInfo";
import { set } from "firebase/database";

type AuthContextType = {
  currentUser: User | null;
  authloading: boolean;
  setAuthLoading: (loading: boolean) => void;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  getFavorites: (uid: string) => Promise<void>;
  favorites: string[];
};

const AuthContext = createContext<AuthContextType>(undefined as never);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authloading, setAuthLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  const [favorites, setFavorites] = useState<string[]>([]);

  const value = {
    currentUser,
    authloading,
    setAuthLoading,
    login: (email: string, password: string) => {
      setAuthLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    },
    logout: async () => {
      setAuthLoading(true);
      await signOut(auth)
        .then(() => {
          router.push(paths.home);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    signUp: async (email: string, password: string) => {
      setAuthLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      sendEmailVerification(userCredential.user);

      return userCredential;
    },
    getFavorites: async (uid: string) => {
      const favorites = await getUserInfo(uid);
      setFavorites(favorites.favorites);
    },
    favorites,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
