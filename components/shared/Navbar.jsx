"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

import {
  AlignJustify,
  ArrowRightFromLine,
  BookA,
  BookUp2,
  Home,
  LogOut,
  PenLine,
} from "lucide-react";
import Drawer from "./Drawer";
import Link from "next/link";
import { useStore } from "@/context/StoreProvider";

import UserDropdown from "../user/UserDropdown";
import UserCard from "../user/UserCard";
import { navOptions } from "@/common/helpers/KeyChain";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { user } = useStore();

  const newNavOptions = [
    ...navOptions,
    {
      icon: LogOut,
      name: "Logout",
      href: "/logout",
    },
  ];

  return (
    <>
      <div className="grid md:grid-cols-6 justify-center items-center p-5 shadow-lg h-[5.5rem]">
        <Link href="/" className="md:col-span-1 w-fit mr-auto">
          <h2 className="font-black text-2xl">E Lib</h2>
        </Link>

        <div className="md:hidden">
          <AlignJustify onClick={() => setDrawerOpen(true)} />
        </div>
        <div className="md:col-span-4 justify-center">
          <div className="md:flex gap-5 font-semibold text-muted-foreground hidden ">
            <p>Home</p>
            <p>About</p>
            <p>All Books</p>
            <p>Authors</p>
          </div>
        </div>
        {user ? (
          <div className="hidden md:block ml-auto w-fit">
            <UserDropdown />
          </div>
        ) : (
          <Link href="/login" className="w-fit ml-auto">
            <Button>Login</Button>
          </Link>
        )}
      </div>

      <Drawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
        title={<UserCard />}
        side="right"
        className="md:col-span-1 justify-end"
      >
        {user &&
          newNavOptions.map((route, index) => (
            <Link
              key={index + 1}
              href={route.href}
              className={`flex w-full items-center gap-2 bg-white p-4 text-center text-sm font-medium text-gray-700 duration-300 first:rounded-t-sm last:rounded-b-sm ${
                route.href === "/logout" ? "hidden" : "hover:bg-secondary/80"
              }`}
            >
              <route.icon className="h-5 w-5" />
              {route.name}
            </Link>
          ))}
        <div className="list-none flex-col space-y-1 text-sm font-medium text-gray-700 border-t pt-3 ">
          <div className="flex items-center gap-2 hover:bg-secondary/80 p-3">
            <Home />
            Home
          </div>
          <div className="flex items-center gap-2 hover:bg-secondary/80 p-3">
            <BookA />
            About
          </div>
          <div className="flex items-center gap-2 hover:bg-secondary/80 p-3">
            <BookUp2 />
            All Books
          </div>
          <div className="flex items-center gap-2 hover:bg-secondary/80 p-3">
            <PenLine />
            Authors
          </div>
        </div>
        <Link
          href="/logout"
          className="absolute bottom-5 right-5 mx-auto w-fit "
        >
          <Button variant="destructive" className="w-full gap-2">
            <ArrowRightFromLine /> Logout
          </Button>
        </Link>
      </Drawer>
    </>
  );
};

export default Navbar;
