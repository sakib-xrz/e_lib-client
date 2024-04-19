import {
  FacebookIcon,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="text-center bg-destructive-foreground">
      <h2 className="font-black text-2xl pt-8">E Lib</h2>
      <p className="w-1/3 mx-auto py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquam
        tenetur rem earum ab adipisci quidem accusamus doloremque eos natus odio
        officiis voluptatum possimus quasi necessitatibus, illum consequatur
        odit. Est!
      </p>
      <div className="flex gap-7 justify-center items-center pb-4">
        <p>
          <FacebookIcon />
        </p>
        <p>
          <Instagram />
        </p>
        <p>
          <Twitter />
        </p>
        <p>
          <Youtube />
        </p>

        <p>
          <Linkedin />
        </p>
      </div>
      <div className=" flex gap-6 pb-4 justify-center">
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Contacts</li>
      </div>
      <div className=" text-center px-4 bg-primary text-white">
        {" "}
        <p>© 2024 E Lib All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
