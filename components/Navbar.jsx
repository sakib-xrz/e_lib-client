import React from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center py-5 shadow-lg">
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger>
            <AlignJustify />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <h2 className="font-black text-2xl">E Lib</h2>
      <div className="list-none md:flex gap-5 font-semibold text-muted-foreground xs:hidden ">
        <li>Home</li>
        <li>About</li>
        <li>All Books</li>
        <li>Authors</li>
      </div>
      <Button>Login</Button>
    </div>
  );
};

export default Navbar;
