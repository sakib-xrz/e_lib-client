"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Password } from "@/components/ui/password";
import { useStore } from "@/context/StoreProvider";
import { SquarePen } from "lucide-react";
import API from "@/common/kit/API";
import { toast } from "sonner";
import Image from "next/image";
import { useState } from "react";

const MyProfile = () => {
  const { user, refetchMe } = useStore();
  const [picture, setPicture] = useState(user?.profile_picture);

  const handleProfileImageUpload = (event) => {
    const formData = new FormData();
    formData.append("profile-picture", event.target.files[0]);
    const promise = API.me
      .updateProfilePicture(formData)
      .then(({ data }) => {
        refetchMe("user");
        setPicture(data?.profile_picture);
      })
      .catch((error) => {
        throw error;
      });

    return toast.promise(promise, {
      loading: "Updating profile picture...",
      success: "Profile picture updated successfully!",
      error: "Something went wrong!",
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Personal Profile Information</h1>
      <p className="py-3">
        Welcome to your personal profile information hub! This is the space
        where you can effortlessly check and refine your personal details.
      </p>
      <div className="flex justify-center">
        <div className="relative">
          {/* Display the user's profile picture */}
          <Image
            className="h-64 w-64 rounded-full border border-border object-cover object-center"
            src={user?.profile_picture}
            height={500}
            width={500}
            alt="profile-image"
          />

          {/* Button for uploading a new profile picture */}
          <label
            htmlFor="upload-profile-picture"
            className="absolute bottom-4 right-4 cursor-pointer"
          >
            <Button variant="secondary">
              <SquarePen className="text-muted-foreground" />
            </Button>
            {/* Hidden file input for profile picture upload */}
            <input
              id="upload-profile-picture"
              type="file"
              accept="image/*"
              onChange={handleProfileImageUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>
      <form className="space-y-5 pt-4 md:pt-8">
        <div className="flex flex-col md:space-x-10 gap-2 md:flex-row md:items-center md:gap-3">
          <Label className="md:w-3/12">Name :</Label>
          <h1>{user?.name}</h1>
        </div>
        <div className="flex flex-col md:space-x-10 gap-2 md:flex-row md:items-center md:gap-3">
          <Label className="md:w-3/12">Email :</Label>
          <h1>{user?.email}</h1>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
          <Label className="md:w-2/5">Current Password :</Label>
          <div className="w-full">
            <Password />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
          <Label className="md:w-2/5">New Password :</Label>
          <div className="w-full">
            <Password />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="space-x-3">
            <Button type="button" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="default">
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
