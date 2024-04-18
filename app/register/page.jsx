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
import Link from "next/link";

const Register = () => {
  return (
    <Card className="max-w-2xl mx-auto mt-20">
      <CardTitle className="text-center mt-6">Logo Text</CardTitle>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          If you do not have any account, please register!
        </CardDescription>
      </CardHeader>

      <div className="px-6 pb-4">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="ex- John Dhoe" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="abc@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Password />
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
            <Button className="w-full">Register</Button>
          </div>
          <p className="text-center text-sm font-medium leading-none">
            Already have an account?{" "}
            <Link href={"/login"}>
              <Button variant="link" className="p-0 font-bold">
                Login
              </Button>
            </Link>
          </p>
        </form>
      </div>
    </Card>
  );
};

export default Register;
