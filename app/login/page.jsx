import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Password } from "@/components/ui/password";
import Link from "next/link";

const Login = () => {
  return (
    <Card className="max-w-2xl mx-auto mt-20">
      <CardTitle className="text-center mt-6">Logo Text</CardTitle>
      <CardHeader>
        <CardTitle>Login Info</CardTitle>
        <CardDescription>
          If you have any account, please login!
        </CardDescription>
      </CardHeader>

      <div className="px-6 pb-4">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="name" placeholder="abc@gmail.com" />
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
            <Button className="w-full">Login</Button>
          </div>
          <p className="text-center text-sm font-medium leading-none">
            Don’t have an account?{" "}
            <Link href={"/register"}>
              <Button variant="link" className="p-0 font-bold">
                Create Account
              </Button>
            </Link>
          </p>
        </form>
      </div>
    </Card>
  );
};

export default Login;
