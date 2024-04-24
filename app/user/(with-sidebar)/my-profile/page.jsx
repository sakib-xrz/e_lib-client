"use client";

import { useStore } from "@/context/StoreProvider";
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
        <Image
          className="h-64 w-64 rounded-full"
          src={user?.profile_picture}
          height={500}
          width={500}
          alt="profile-image"
        />
      </div>
      <div className="">
        <h1 className="text-lg">Name : {user?.name}</h1>
        <h1 className="text-lg">Email : {user?.email}</h1>
        <h1 className="text-lg">Password : {user?.password}</h1>
        <h1 className="text-lg">Change Password : {user?.password}</h1>
      </div>
    </div>
  );
};

export default MyProfile;
