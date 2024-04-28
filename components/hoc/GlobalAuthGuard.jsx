/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import HTTP from "@/common/kit/HTTP";
import { AUTH_TOKEN_KEY } from "@/common/helpers/KeyChain";
import { useStore } from "@/context/StoreProvider";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function GlobalAuthGuard({ children }) {
  const { fetchMe, isMeLoading } = useStore();
  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    if (token) {
      HTTP.setTokenAndRedirect(token).then(() => fetchMe());
    }
  }, []);

  if (isMeLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div>
          <Loader2 size="64" className="animate-spin" />
        </div>
      </div>
    );
  }

  return children;
}
