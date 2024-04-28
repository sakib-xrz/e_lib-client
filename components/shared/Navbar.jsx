"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

import {
  ArrowRightFromLine,
  BookA,
  BookUp2,
  Home,
  LogOut,
  Menu,
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
      <div className="grid grid-cols-12 p-5 shadow-lg h-[5.5rem] w-full items-center">
        <Link href="/" className="w-fit mr-auto col-span-6 lg:col-span-3">
          <h2 className="font-black text-2xl">E Lib</h2>
        </Link>
        <div className="gap-5 font-semibold text-muted-foreground hidden lg:flex justify-center items-center col-span-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/blog"}>Blog</Link>
          <p>All Books</p>
          <p>Authors</p>
        </div>
        <div className="ml-auto col-span-3 hidden lg:block ">
          {user ? (
            <div className="w-fit">
              <UserDropdown />
            </div>
          ) : (
            <Link href="/login" className="w-fit">
              <Button>Login</Button>
            </Link>
          )}
        </div>

        <div
          className="w-fit col-span-6 block lg:hidden cursor-default ml-auto"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </div>
      </div>

      <Drawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
        title={<UserCard />}
        side="right"
        className="lg:col-span-1 justify-end"
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
          <Link
            href={"/"}
            className="flex items-center gap-2 hover:bg-secondary/80 p-3"
          >
            <Home />
            Home
          </Link>
          <Link
            href={"/blog"}
            className="flex items-center gap-2 hover:bg-secondary/80 p-3"
          >
            <BookA />
            Blog
          </Link>
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
