import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="container mx-auto py-12 max-w-5xl px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Choose Your Plan</h1>
        <p className="text-muted-foreground">Unlock full TAT bank and analytics</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Free */}
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-semibold">Free</h3>
          <p className="text-sm text-muted-foreground mt-1">Good for getting started with TAT bank</p>
          <div className="mt-6">
            <div className="text-2xl font-bold">$0</div>
            <p className="text-xs text-muted-foreground">forever</p>
          </div>
          <ul className="mt-6 space-y-2 text-sm">
            <li>• Limited active test sets</li>
            <li>• Basic progress tracking</li>
          </ul>
          <Link href="/sign-up" className="mt-6 inline-flex rounded-md border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">Get started</Link>
        </div>

        {/* Pro */}
        <div className="rounded-lg border bg-card p-6">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">Most Popular</div>
          <h3 className="mt-2 text-xl font-semibold">Pro</h3>
          <p className="text-sm text-muted-foreground mt-1">Best for serious SSC prep</p>
          <div className="mt-6">
            <div className="text-2xl font-bold">$10</div>
            <p className="text-xs text-muted-foreground">billed monthly</p>
          </div>
          <ul className="mt-6 space-y-2 text-sm">
            <li>• All test sets unlocked</li>
            <li>• Detailed feedback and insights</li>
            <li>• Priority support</li>
          </ul>
          <Link href="/sign-in" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Upgrade</Link>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}