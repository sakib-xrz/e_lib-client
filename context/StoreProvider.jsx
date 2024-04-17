"use client";

import { createContext, useContext } from "react";

const StoreContext = createContext();

export default function StoreProvider({ children }) {
  // store business logic here

  const store = {};

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export const useStore = () => {
  return useContext(StoreContext);
};
