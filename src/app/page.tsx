"use client";

import * as React from "react";
import HomepageHero from "@/components/homepage-hero";
import { Toaster } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { X } from "lucide-react";

export default function Page() {
  const router = useRouter();
  const [showOffer, setShowOffer] = React.useState(true);
  
  // Use both environment variables directly for better reliability
  const signInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "/login";
  const signUpUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "/sign-up";

  // Ensure users return to the same page after auth when coming from links/buttons
  const currentUrl = typeof window !== "undefined" ? window.location.href : "/";
  const signInHref = `${signInUrl}?redirect_url=${encodeURIComponent(currentUrl)}`;
  const signUpHref = `${signUpUrl}?redirect_url=${encodeURIComponent(currentUrl)}`;

  const handleGetStarted = React.useCallback(() => {
    router.push("/dashboard");
  }, [router]);

  const handleLearnMore = React.useCallback(() => {
    // Changed to go to a more appropriate page for "learn more"
    // You can change this to whatever page contains more information about your platform
    router.push("#features"); // Scroll to features section, or change to "/about" if you have an about page
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Toaster richColors closeButton />

      {showOffer && (
        <div className="w-full bg-primary/10 text-foreground">
          <div className="container mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-sm">
            <p className="truncate">
              Limited-time offer: Get 20% off Pro TAT practice. Sign up today to unlock all tests!
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={signUpHref}
                className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-95"
              >
                Claim offer
              </Link>
              <button
                type="button"
                aria-label="Dismiss offer banner"
                onClick={() => setShowOffer(false)}
                className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="border-b">
        <div className="container mx-auto max-w-6xl px-4 py-3">
          <div className="flex items-center justify-end gap-3">
            <Link
              href={signInHref}
              className="rounded-md px-3 py-1.5 text-sm text-foreground hover:bg-accent"
            >
              Sign in
            </Link>
            <Link
              href={signUpHref}
              className="rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background hover:opacity-90"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <HomepageHero
        className="border-b"
        onGetStarted={handleGetStarted}
        onLearnMore={handleLearnMore}
      />

      <section id="features" aria-label="Key features" className="bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4 py-10 sm:py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-lg border bg-card p-5 shadow-sm">
              <h3 className="text-base font-semibold">Exam-oriented design</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Practice Thematic Apperception Test with structure aligned to SSB standards.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5 shadow-sm">
              <h3 className="text-base font-semibold">Clear progress tracking</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                See paid status, attendance, and completion at a glance to stay on track.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5 shadow-sm">
              <h3 className="text-base font-semibold">Time-bound practice</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Build story crafting discipline and time management with every attempt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="container mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted-foreground">
          Built for Indian Armed Forces SSB aspirants • Psychological testing platform
        </div>
      </footer>
    </main>
  );
}