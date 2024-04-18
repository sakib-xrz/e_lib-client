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

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
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
      console.log(values);
    },
  });

  return (
    <Card className="max-w-2xl mx-auto mt-20">
      <CardTitle className="text-center mt-6">E-Lib</CardTitle>
      <CardHeader>
        <CardTitle>Login Info</CardTitle>
        <CardDescription>If you have an account, please login!</CardDescription>
      </CardHeader>

      <div className="px-6 pb-4">
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
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
        <p className="text-center text-sm font-medium leading-none">
          Don’t have an account?{" "}
          <Link href="/register">
            <Button variant="link" className="p-0 font-bold">
              Create Account
            </Button>
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default Login;
