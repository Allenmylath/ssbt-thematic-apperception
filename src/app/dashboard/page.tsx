import Link from "next/link";
import { Play, Lock, FileCheck, CheckCircle, ArrowRight } from "lucide-react";

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Welcome to your TAT Practice</h1>
        <p className="text-sm text-muted-foreground mt-1">Track your SSC Thematic Apperception Test progress, start new sets, and review results.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Active (unlocked) */}
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Play className="h-4 w-4" /> Active Tests
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Practice sets you can access based on your current plan.</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-2xl font-semibold">3</span>
            <Link href="/dashboard/active" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              Start a test <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Inactive (locked without payment) */}
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Lock className="h-4 w-4" /> Inactive Tests
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Locked sets. Upgrade to unlock full test bank.</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-2xl font-semibold">7</span>
            <Link href="/dashboard/pricing" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              View pricing <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Started */}
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <FileCheck className="h-4 w-4" /> Started
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Resume tests you have already begun.</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-2xl font-semibold">1</span>
            <Link href="/dashboard/started" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              Resume <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Completed */}
        <div className="rounded-lg border border-border bg-card p-4 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 text-sm font-medium">
            <CheckCircle className="h-4 w-4" /> Completed
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Review your finished tests and analyses.</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-2xl font-semibold">4</span>
            <Link href="/dashboard/completed" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              Review <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Tip */}
      <div className="rounded-lg border border-border bg-secondary p-4">
        <p className="text-sm text-secondary-foreground">
          Tip: TAT practice is most effective with timed storytelling. Start an active set to begin a 30-minute session.
        </p>
      </div>
    </div>
  );
}