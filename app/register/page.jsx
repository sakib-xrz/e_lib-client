"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Password } from "@/components/ui/password";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { useStore } from "@/context/StoreProvider";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import API from "@/common/kit/API";
import HTTP from "@/common/kit/HTTP";
import { toast } from "sonner";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "Name must only contain letters and spaces"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const { setUser } = useStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const previousURL = searchParams.get("next");
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);

      const payload = {
        name: values.name,
        email: values.email,
        password: values.password,
      };

      const promise = API.auth
        .register(payload)
        .then((data) => {
          const token = data.data.access;
          formik.resetForm();
          HTTP.setTokenAndRedirect(token, () => {
            API.me.getMe().then(({ data }) => {
              setUser(data);
              if (previousURL) {
                router.push(previousURL);
              } else {
                if (data.role === "admin") {
                  router.push("/admin");
                } else if (data.role === "author") {
                  router.push("/author");
                } else {
                  router.push(`/`);
                }
              }
            });
          });
        })
        .catch((error) => {
          throw error;
        })
        .finally(() => {
          setLoading(false);
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: "Registered successfully!",
        error: (error) => error.message,
      });
    },
  });
  return (
    <Container>
      <Card className="max-w-xs xs:max-w-sm md:max-w-2xl mx-auto mt-20 space-y-5">
        <Link href={"/"}>
          <h2 className="text-center font-black text-3xl">E Lib</h2>
        </Link>{" "}
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            If you do not have any account, please register!
          </CardDescription>
        </CardHeader>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="your name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="border rounded-md p-2"
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.name}
                  </div>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="abc@gmail.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="border rounded-md p-2"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Password
                  id="password"
                  name="password"
                  placeholder="min 6 characters"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="border rounded-md p-2"
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.password}
                  </div>
                )}
                <p className="flex justify-end">
                  <Button
                    type="button"
                    variant="link"
                    className="p-0 font-semibold"
                  >
                    Forget Password
                  </Button>
                </p>
              </div>
            </div>
            <div className="mt-2">
              <Button type="submit" className="w-full" isLoading={loading}>
                {loading ? "Loading..." : "Register"}
              </Button>
            </div>
          </form>
          <p className="text-center text-sm font-medium leading-none mt-5">
            Already have an account?{" "}
            <Link href={"/login"}>
              <Button variant="link" className="p-0 font-bold">
                Login
              </Button>
            </Link>
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default Register;
