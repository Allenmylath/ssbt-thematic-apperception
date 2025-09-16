"use client";

import { useUser } from "@clerk/nextjs";

interface SessionUser {
  id: string;
  name: string | null;
  email: string | null;
}

interface UseSessionResult {
  data: { user: SessionUser } | null;
  isPending: boolean;
}

export function useSession(): UseSessionResult {
  const { user, isLoaded } = useUser();

  const mapped = user
    ? {
        user: {
          id: user.id,
          name: user.fullName ?? user.username ?? null,
          email: user.primaryEmailAddress?.emailAddress ?? null,
        },
      }
    : null;

  return {
    data: mapped,
    isPending: !isLoaded,
  };
}