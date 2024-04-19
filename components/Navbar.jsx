"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

import { AlignJustify } from "lucide-react";
import Drawer from "./shared/Drawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <div className="flex justify-around items-center py-5 shadow-lg">
        <AlignJustify onClick={() => setDrawerOpen(true)} />

        <h2 className="font-black text-2xl">E Lib</h2>
        <div className="list-none md:flex gap-5 font-semibold text-muted-foreground xs:hidden ">
          <li>Home</li>
          <li>About</li>
          <li>All Books</li>
          <li>Authors</li>
        </div>
        <Button>Login</Button>
      </div>

      <Drawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
        title={"Test Right Side Drawer"}
        side="left"
      >
        This is test drawer
      </Drawer>
    </>
  );
};

export default Navbar;
