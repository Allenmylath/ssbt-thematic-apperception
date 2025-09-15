import { redirect } from "next/navigation";

export default function LoginPage() {
  const signInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "https://adapted-yak-99.accounts.dev/sign-in";
  redirect(signInUrl);
}