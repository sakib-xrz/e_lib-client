import React from "react";
import AuthorCard from "../components/AuthorCard";
import image from "../../../../public/images/6624b238ca6574c1cb575963_6624882b05a915f35be164ac-264991c0c1b6ff5efe610279090d8c88.jpeg";
import Image from "next/image";

const BlogDetailsPage = ({ params: { slug } }) => {
  console.log(slug);
  return (
    <div className="container my-12 ">
      <h1 className="text-5xl font-extrabold leading-snug">
        Give a shoutout to Joshua Hanson on social or copy the text below to
        attribute.
      </h1>
      <div className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-8">
          <div>
            <Image
              className="w-full object-cover rounded-xl"
              src={image}
              alt="photographer"
              height={500}
              width={500}
            />
          </div>
        </div>
        <div className="col-span-4">
          <AuthorCard />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
