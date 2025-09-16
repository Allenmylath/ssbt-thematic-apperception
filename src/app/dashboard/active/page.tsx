import Link from "next/link";
import { Play, Clock, Image, Languages } from "lucide-react";

export default function ActiveTestsPage() {
  const testSets = [
    { id: 1, name: "TAT Set 1", images: 12, duration: 30, languages: "English/Hindi" },
    { id: 2, name: "TAT Set 2", images: 15, duration: 35, languages: "English" },
    { id: 3, name: "TAT Set 3", images: 10, duration: 25, languages: "Hindi" }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Active Tests</h1>
        <p className="text-sm text-muted-foreground">Tests available on your current plan.</p>
      </div>

      <div className="grid gap-4">
        {testSets.map((test) => (
          <div
            key={test.id}
            className="group relative overflow-hidden rounded-lg border bg-card p-4 transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">{test.name}</h3>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Image className="h-3.5 w-3.5" />
                    {test.images} images
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {test.duration} min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Languages className="h-3.5 w-3.5" />
                    {test.languages}
                  </span>
                </div>
              </div>

              <Link
                href={`/tests/tat/${test.id}`}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Play className="h-4 w-4" />
                Start
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}