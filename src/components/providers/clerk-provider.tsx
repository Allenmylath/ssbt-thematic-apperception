"use client";

import { ClerkProvider } from "@clerk/nextjs";

export const ClerkAppProvider = ({ children }: { children: React.ReactNode }) => {
  // Prefer environment variables for URLs and redirect behavior
  const signInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "/login";
  const signUpUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "/sign-up";

  // Fallback redirect URLs (used when no redirect_url is present)
  const fallbackRedirectUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL || process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL || "/";
  const signInFallbackRedirectUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL;
  const signUpFallbackRedirectUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL;

  // Force redirect URLs (override any redirect_url)
  const forceRedirectUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL || process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL;
  const signInForceRedirectUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL;
  const signUpForceRedirectUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL;

  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "var(--color-primary)",
          fontFamily: "var(--font-sans)",
        },
      }}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      // New recommended redirect props
      fallbackRedirectUrl={fallbackRedirectUrl}
      signInFallbackRedirectUrl={signInFallbackRedirectUrl}
      signUpFallbackRedirectUrl={signUpFallbackRedirectUrl}
      forceRedirectUrl={forceRedirectUrl}
      signInForceRedirectUrl={signInForceRedirectUrl}
      signUpForceRedirectUrl={signUpForceRedirectUrl}
    >
      {children}
    </ClerkProvider>
  );
};