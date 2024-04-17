"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import StoreProvider from "@/context/StoreProvider";
import { Toaster } from "../ui/sonner";

export default function GlobalProvider({ children }) {
  const queryClient = new QueryClient();

  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster position="bottom-right" richColors />
        {children}
      </QueryClientProvider>
    </StoreProvider>
  );
}
