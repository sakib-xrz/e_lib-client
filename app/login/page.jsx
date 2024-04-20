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
import { useState } from "react";
import API from "@/common/kit/API";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { setJWTokenAndRedirect } from "@/common/helpers/Utils";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const previousURL = searchParams.get("next");

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);

      const payload = {
        email: values.email,
        password: values.password,
      };

      const promise = API.auth
        .login(payload)
        .then((data) => {
          const token = data.data.access;
          // formik.resetForm();
          setJWTokenAndRedirect(token, () => {
            if (previousURL) {
              router.push(previousURL);
            } else {
              API.me.getMe().then(({ data }) => {
                if (data.role === "admin") {
                  router.push("/admin");
                } else if (data.role === "author") {
                  router.push("/author");
                }
                router.push(`/`);
              });
            }
          });
          return data;
        })
        .catch((error) => {
          throw error;
        })
        .finally(() => {
          setLoading(false);
        });

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => data.message,
        error: (error) => error.message,
      });
    },
  });

  return (
    <Container>
      <Card className="max-w-xs xs:max-w-sm md:max-w-2xl mx-auto mt-20 space-y-5">
        <h2 className="text-center font-black text-3xl">E Lib</h2>{" "}
        <CardHeader>
          <CardTitle>Login Info</CardTitle>
          <CardDescription>
            If you have an account, please login!
          </CardDescription>
        </CardHeader>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid w-full items-center gap-4">
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
                  placeholder="min 8 characters"
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
                    Forgot Password
                  </Button>
                </p>
              </div>
            </div>
            <div className="mt-2">
              <Button
                type="submit"
                className="w-full p-2 rounded-md"
                isLoading={loading}
              >
                {loading ? "Loading..." : "Login"}
              </Button>
            </div>
          </form>
          <p className="text-center text-sm font-medium leading-none mt-5">
            Don’t have an account?{" "}
            <Link href="/register">
              <Button variant="link" className="p-0 font-bold">
                Create Account
              </Button>
            </Link>
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
