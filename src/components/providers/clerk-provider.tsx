"use client";

import { ClerkProvider } from "@clerk/nextjs";

export const ClerkAppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "var(--color-primary)",
          fontFamily: "var(--font-sans)",
        },
      }}
      signInUrl="/login"
      signUpUrl="/sign-up"
      afterSignInUrl="/dashboard"    // Add this
      afterSignUpUrl="/dashboard"
    >
      {children}
    </ClerkProvider>
  );
};