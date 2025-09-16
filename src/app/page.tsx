import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <main className="container mx-auto max-w-5xl px-6 py-16 sm:py-24">
        {/* Hero */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Thematic Apperception Test (TAT) for SSC Preparation
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Practice timed storytelling with curated image sets, track your progress, and unlock the full test bank to accelerate your SSC preparation.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Link
              href="/dashboard"
              className="rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Start Practicing
            </Link>
            <Link
              href="/dashboard/pricing"
              className="rounded-md border border-input px-5 py-2.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="flex gap-3 justify-center">
            <Link
              href="/sign-in"
              className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
            >
              Sign in
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/sign-up"
              className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
            >
              Create account
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold">Timed TAT Sessions</h3>
            <p className="text-sm text-muted-foreground mt-1">Practice with 20–30 minute sessions and realistic exam pacing.</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold">Active vs Inactive Tests</h3>
            <p className="text-sm text-muted-foreground mt-1">See which sets are unlocked based on your current plan.</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold">Track Progress</h3>
            <p className="text-sm text-muted-foreground mt-1">Resume started tests and review completed results on your dashboard.</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto max-w-5xl px-6 flex items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SSC TAT Prep</p>
          <div className="flex gap-4">
            <Link href="/dashboard/pricing" className="hover:underline">Pricing</Link>
            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}