"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Password } from "@/components/ui/password";
import { useStore } from "@/context/StoreProvider";
import { SquarePen } from "lucide-react";
import Image from "next/image";

const MyProfile = () => {
  const { user } = useStore();
  console.log(user);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Personal Profile Information</h1>
      <p className="py-3">
        Welcome to your personal profile information hub! This is the space
        where you can effortlessly check and refine your personal details.
      </p>
      <div className="flex justify-center">
        <div className="relative">
          <Image
            className="h-64 w-64 rounded-full border border-border object-cover object-center"
            src={user?.profile_picture}
            height={500}
            width={500}
            alt="profile-image"
          />

          <Button variant="secondary" className="absolute bottom-4 right-4">
            <SquarePen className="text-muted-foreground" />
          </Button>
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
