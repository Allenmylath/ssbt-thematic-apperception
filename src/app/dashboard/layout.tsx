// Server Component layout for /dashboard with a persistent sidebar.
// Styling uses Tailwind classes aligned with the project's design tokens from globals.css.
// The layout renders a left sidebar containing navigation items and a main content area for nested pages.

import Link from "next/link";
import { ReactNode } from "react";
import { LogOut, Settings, CreditCard, BarChart3, FileCheck, Play, CheckCircle } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-[100dvh] grid grid-cols-1 md:grid-cols-[260px_1fr]">
      {/* Sidebar */}
      <aside className="border-r border-border bg-sidebar text-sidebar-foreground p-4 md:p-6 relative">
        <div className="mb-6">
          <h1 className="text-lg font-semibold">SSC TAT Dashboard</h1>
          <p className="text-sm text-muted-foreground">Prepare with structured practice</p>
        </div>

        <nav className="space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
            <BarChart3 className="w-4 h-4" />
            Overview
          </Link>
          <Link href="/dashboard/active" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
            <Play className="w-4 h-4" />
            Active Tests
          </Link>
          <Link href="/dashboard/started" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
            <FileCheck className="w-4 h-4" />
            Started
          </Link>
          <Link href="/dashboard/completed" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
            <CheckCircle className="w-4 h-4" />
            Completed
          </Link>
          <div className="h-px bg-border my-3" />
          <Link href="/dashboard/settings" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </Link>
          <Link href="/dashboard/pricing" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
            <CreditCard className="w-4 h-4" />
            Pricing
          </Link>
        </nav>

        {/* Optional sign-out link placeholder (integrate with auth later) */}
        <div className="absolute bottom-6 left-6 right-6">
          <Link href="/sign-in" className="flex items-center gap-3 w-full rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground">
            <LogOut className="w-4 h-4" />
            Sign In
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}