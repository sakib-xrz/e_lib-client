"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

import {
  AlignJustify,
  ArrowRightFromLine,
  BookA,
  BookUp2,
  Home,
  PenLine,
} from "lucide-react";
import Drawer from "./Drawer";
import Link from "next/link";
import UserCard from "../user/UserCard";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center p-5 shadow-lg">
        <Link href="/">
          <h2 className="font-black text-2xl">E Lib</h2>
        </Link>

        <div className="md:hidden">
          <AlignJustify onClick={() => setDrawerOpen(true)} />
        </div>
        <div className="list-none md:flex gap-5 font-semibold text-muted-foreground hidden ">
          <li>Home</li>
          <li>About</li>
          <li>All Books</li>
          <li>Authors</li>
        </div>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>

      <Drawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
        title={<UserCard />}
        side="right"
      >
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
          className="absolute bottom-5 right-5 mx-auto w-fit"
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
