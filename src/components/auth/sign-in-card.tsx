"use client";
import { SignIn } from "@clerk/nextjs";

export const SignInCard = () => (
  <div className="min-h-[60vh] w-full flex items-center justify-center p-6">
    <SignIn appearance={{ elements: { formButtonPrimary: "bg-foreground text-background hover:opacity-90" } }} />
  </div>
);