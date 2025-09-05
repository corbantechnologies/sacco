"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { Session, User } from "next-auth";
import { Eye, EyeOff } from "lucide-react";

// Define the shape of the user object, extending the default User type
interface CustomUser extends User {
  is_system_admin?: boolean;
  is_member?: boolean;
  is_staff?: boolean;
  is_superuser?: boolean;
}

// Define the shape of the session, extending the default Session type
interface CustomSession extends Session {
  user?: CustomUser;
}

interface LoginFormProps extends React.ComponentProps<"div"> {
  className?: string;
}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [member_no, setMemberNo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await signIn("credentials", {
      redirect: false,
      member_no,
      password,
    });
    const session = (await getSession()) as CustomSession | null;

    setLoading(false);
    if (response?.error) {
      toast?.error("Invalid member number or password");
    } else {
      toast?.success("Login successful! Redirecting...");
      if (session?.user?.is_system_admin === true) {
        router.push("/sacco-admin/dashboard");
      } else if (session?.user?.is_member === true) {
        router.push("/member/dashboard");
      } else if (session?.user?.is_staff === true)
        router.push("/superuser/dashboard");
      else {
        router.push("/");
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Image src="/sacco.png" alt="logo" width={50} height={50} />
            <h1 className="text-xl font-bold">Welcome to Wekeza</h1>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/register" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="member_no">Member Number</Label>
              <Input
                id="member_no"
                type="text"
                placeholder="SACCO001"
                value={member_no}
                onChange={(e) => setMemberNo(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
