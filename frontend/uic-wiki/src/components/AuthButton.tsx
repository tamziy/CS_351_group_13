"use client";

import { useEffect, useState } from "react";
import { auth, provider } from "@/firebase";
import { onAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth";

export default function AuthButton() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log("Login Error:", err);
    }
  };

  const logout = () => signOut(auth);

  if (!user) {
    return (
      <button
        onClick={googleSignIn}
        className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Sign In
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <img
        src={"/default_pfp.jpg"}
        alt="avatar"
        className="w-8 h-8 rounded-full border"
      />

      <button
        onClick={logout}
        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
}
