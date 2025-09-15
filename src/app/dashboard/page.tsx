import { DashboardClient } from "./_components/dashboard-client";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <DashboardClient />
    </main>
  );
}