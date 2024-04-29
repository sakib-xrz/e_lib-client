import { FacebookIcon, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className=" ">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center bg-destructive-foreground py-10 px-5 space-y-6 md:space-y-0">
        <h2 className="font-black text-2xl text-center md:text-left col-span-12 md:col-span-2">
          E Lib
        </h2>

        <div className="text-muted-foreground font-semibold flex whitespace-nowrap gap-4 lg:gap-8 justify-center flex-wrap col-span-12 md:col-span-8">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Contacts</p>
          <p>FAQ</p>
        </div>
        <div className="flex gap-7 md:justify-end justify-center items-center col-span-12 md:col-span-2">
          <p>
            <FacebookIcon />
          </p>
          <p>
            <Instagram />
          </p>
          <p>
            <Twitter />
          </p>
        </div>
      </div>
      <div className=" text-center px-4 bg-primary text-white">
        {" "}
        <p>© 2024 E Lib All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
