"use client";

import API from "@/common/kit/API";
import HTTP from "@/common/kit/HTTP";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AUTH_TOKEN_KEY } from "@/common/helpers/KeyChain";
import { toast } from "sonner";

const StoreContext = createContext();

export default function StoreProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isMeLoading, setIsMeLoading] = useState(false);

  const fetchMe = async (role) => {
    setIsMeLoading(true);
    try {
      const { data } = await API.me.getMe();
      if (role && data.role !== role) {
        toast.error("You Don't have permission to access this.");
        router.push("/logout");
      } else {
        setUser(data);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      router.push("/logout");
    } finally {
      setIsMeLoading(false);
    }
  };

  const refetchMe = (role) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      HTTP.setTokenAndRedirect(token)
        .then(() => fetchMe(role))
        .catch((error) => {
          console.log(error?.response);
        });
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_TOKEN_KEY);
    router.push("/login");
  };

  const store = { user, isMeLoading, setUser, fetchMe, refetchMe, logout };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export const useStore = () => {
  return useContext(StoreContext);
};
