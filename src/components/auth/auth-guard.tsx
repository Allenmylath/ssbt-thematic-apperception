"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isPending && !session?.user) {
      const redirect = encodeURIComponent(pathname || "/dashboard");
      router.push(`/sign-in?redirect=${redirect}`);
    }
  }, [session, isPending, router, pathname, mounted]);

  if (!mounted || isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-full max-w-md p-8 space-y-4">
          <div className="h-8 w-48 bg-muted rounded-lg mb-4 animate-pulse" />
          <div className="h-4 w-64 bg-muted rounded mb-2 animate-pulse" />
          <div className="h-4 w-56 bg-muted rounded mb-2 animate-pulse" />
          <div className="h-32 w-full bg-muted rounded-lg animate-pulse" />
        </div>
      </div>
    );
  }

  if (!session?.user) return null;

  return <>{children}</>;
}

export default AuthGuard;