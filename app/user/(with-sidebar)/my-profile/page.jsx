"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Password } from "@/components/ui/password";
import { useStore } from "@/context/StoreProvider";
import { Camera } from "lucide-react";
import API from "@/common/kit/API";
import { toast } from "sonner";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";

const MyProfile = () => {
  const { user, refetchMe } = useStore();
  const [showActionButtons, setShowActionButtons] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleProfileImageUpload = (event) => {
    // const formData = new FormData();
    // formData.append("profile_picture", event.target.files[0]);
    setLoading(true);
    const payload = { profile_picture: event.target.files[0] };
    const promise = API.me
      .updateProfilePicture(payload)
      .then(() => {
        refetchMe();
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });

    return toast.promise(promise, {
      loading: "Updating profile picture...",
      success: "Profile picture updated successfully!",
      error: "Something went wrong!",
    });
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
    },

    onSubmit: (values) => {
      setLoading(true);

      const payload = {
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      };

      const promise = API.me
        .changePassword(payload)
        .then((_data) => formik.resetForm())
        .catch((error) => {
          throw error;
        })
        .finally(() => {
          setLoading(false);
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: "Password change successfully!",
        error: (error) => error.message,
      });
    },
  });

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

          <label
            htmlFor="profile_picture"
            className="absolute bottom-4 right-4 cursor-pointer"
          >
            <input
              id="profile_picture"
              type="file"
              accept="image/*"
              onChange={handleProfileImageUpload} // Move onChange to the input element
              className="hidden"
              disabled={loading}
            />
            <Button
              variant="secondary"
              size="icon"
              onClick={() => document.getElementById("profile_picture").click()}
              className={"rounded-full disabled:cursor-not-allowed"}
              disabled={loading}
            >
              <Camera className="text-muted-foreground" />{" "}
            </Button>
          </label>
        </div>
      </div>
      <div className="space-y-5 pt-4 md:pt-8">
        <div className="flex flex-col md:space-x-10 gap-2 md:flex-row md:items-center md:gap-3">
          <Label className="md:w-3/12">Name :</Label>
          <h1>{user?.name}</h1>
        </div>
        <div className="flex flex-col md:space-x-10 gap-2 md:flex-row md:items-center md:gap-3">
          <Label className="md:w-3/12">Email :</Label>
          <h1>{user?.email}</h1>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-5 ">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            <Label className="md:w-2/5">Current Password :</Label>
            <div className="w-full">
              <Password
                id="currentPassword"
                name="currentPassword"
                onChange={(e) => {
                  formik.handleChange(e);
                  setShowActionButtons(true);
                }}
                value={formik.values.currentPassword}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            <Label className="md:w-2/5">New Password :</Label>
            <div className="w-full">
              <Password
                id="newPassword"
                name="newPassword"
                onChange={(e) => {
                  formik.handleChange(e);
                  setShowActionButtons(true);
                }}
                value={formik.values.newPassword}
              />
            </div>
          </div>
          <div
            className={`${
              showActionButtons ? "flex" : "hidden"
            }  items-center justify-end gap-2 pt-2`}
          >
            <div className="space-x-3">
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  formik.resetForm(), setShowActionButtons(false);
                }}
              >
                Cancel
              </Button>
              <Button isLoading={loading} type="submit" variant="default">
                {loading ? "Saving" : "Save"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
