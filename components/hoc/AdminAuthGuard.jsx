/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { AUTH_TOKEN_KEY } from "@/common/helpers/KeyChain";
import HTTP from "@/common/kit/HTTP";
import { useStore } from "@/context/StoreProvider";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
export default function AdminAuthGuard({ children }) {
  const { fetchMe, user } = useStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    if (token) {
      HTTP.setTokenAndRedirect(token)
        .then(() => fetchMe("admin"))
        .catch((_error) => {
          router.push("/logout");
        });
    } else {
      const nextURL = { next: pathname };
      const queryParams = new URLSearchParams(nextURL).toString();
      router.push(`/login?${queryParams}`);
    }
  }, []);

  return user?.email && user?.role === "admin" ? children : null;
}
