"use client";

import Container from "@/components/shared/Container";
import CreatableSelectField from "@/components/shared/CreatableSelectField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/context/StoreProvider";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostBlog = () => {
  const { user } = useStore();

  console.log(
    JSON.stringify({
      name: user?.name,
      email: user?.email,
      profile_picture: user?.profile_picture,
    })
  );

  const [value, setValue] = useState("");
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <Container>
      <h1 className="text-2xl font-semibold">
        Author can upload Book from here!
      </h1>

      <form className="my-6 border-2 border-border shadow-lg p-6 rounded-xl space-y-5">
        <div>
          <label className="font-semibold" htmlFor="blogTitle">
            Blog Title
          </label>
          <Input
            id="title"
            name="title"
            placeholder="write your blog title here..."
            className="mt-1"
          />
        </div>

        <div className="grid w-full items-center ">
          <label className="font-semibold" htmlFor="image">
            Blog Image
          </label>
          <Input
            id="picture"
            type="file"
            className="w-full cursor-pointer mt-1"
          />
        </div>

        <div>
          <label className="font-semibold" htmlFor="content">
            Content
          </label>
          <ReactQuill
            className="mt-1"
            theme="snow"
            placeholder="Write your blog content here..."
            value={value}
            onChange={setValue}
          />
        </div>

        <div>
          <label className="font-semibold" htmlFor="blog-tags">
            Blog Tags
          </label>
          <CreatableSelectField
            id="blog_tags"
            name="blog_tags"
            placeholder="e.g. Popular, Trending"
            isClearable
            isMulti
            isSearchable
            options={options}
            className="mt-1"
            onChange={(selectedField) =>
              console.log(JSON.stringify(selectedField))
            }
          />
        </div>

        <div className="flex justify-end">
          <div className="space-x-3">
            <Button type="button" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="default">
              Upload
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default PostBlog;
