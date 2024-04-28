import React from "react";
import AuthorCard from "../components/AuthorCard";
import Image from "next/image";
import Container from "@/components/shared/Container";
import blog from "@/public/images/blog-img.jpeg";

const BlogDetailsPage = ({ params: { slug } }) => {
  console.log(slug);
  return (
    <Container>
      <h1 className="text-5xl font-extrabold leading-snug">
        Give a shoutout to Joshua Hanson on social or copy the text below to
        attribute.
      </h1>
      <div className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-8">
          <div>
            <Image
              className="w-full object-cover rounded-xl aspect-video"
              src={blog}
              alt="photographer"
            />
          </div>
        </div>
        <div className="col-span-4">
          <AuthorCard />
        </div>
      </div>
    </Container>
  );
};

export default BlogDetailsPage;
