import Link from "next/link";
import { FileCheck, RotateCcw } from "lucide-react";

export default function StartedTestsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl md:text-2xl font-semibold">Started</h1>
      <p className="text-sm text-muted-foreground">Resume in-progress tests.</p>

      <ul className="mt-2 space-y-2">
        {[{id: 101, progress: "5/12"}].map((t) => (
          <li key={t.id} className="flex items-center justify-between rounded-md border p-3 hover:border-primary/50 transition-colors">
            <div>
              <p className="font-medium">TAT Set #{t.id}</p>
              <p className="text-xs text-muted-foreground">Progress: {t.progress}</p>
            </div>
            <Link href={`#`} className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200">
              <RotateCcw className="h-4 w-4" /> Resume
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}