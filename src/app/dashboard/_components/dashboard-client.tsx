"use client";

import TestDashboard from "@/components/test-dashboard";
import { Toaster } from "sonner";

export const DashboardClient = ({ className }: { className?: string }) => {
  return (
    <>
      <section className={`container mx-auto max-w-6xl px-4 py-10 sm:py-12 ${className || ""}`}>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Your Tests</h1>
        <TestDashboard className="border bg-card p-4 sm:p-6" />
      </section>
      <Toaster richColors closeButton />
    </>
  );
};