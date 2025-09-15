import { redirect } from "next/navigation";

export default function SignUpPage(): React.ReactElement | never {
  const signUpUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "https://adapted-yak-99.accounts.dev/sign-up";
  redirect(signUpUrl);
}