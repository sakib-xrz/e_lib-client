import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import GlobalProvider from "@/components/provider/GlobalProvider";
import { Suspense } from "react";

const PlusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "E-Lib",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={PlusJakartaSans.className}>
        <GlobalProvider>
          <Suspense fallback={<>Loading...</>}>{children}</Suspense>
        </GlobalProvider>
      </body>
    </html>
  );
}
