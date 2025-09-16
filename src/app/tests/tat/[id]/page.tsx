import Link from "next/link";

interface TestPageProps {
  params: { id: string };
}

export default function TatTestPage({ params }: TestPageProps) {
  const { id } = params;

  return (
    <div className="mx-auto max-w-3xl p-6 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">TAT Test #{id}</h1>
        <p className="text-sm text-muted-foreground">Timed storytelling practice — placeholder runner</p>
      </div>

      <div className="rounded-lg border bg-card p-5 space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <p>Images</p>
            <p className="text-foreground font-medium">~12</p>
          </div>
          <div>
            <p>Duration</p>
            <p className="text-foreground font-medium">30 minutes</p>
          </div>
        </div>

        <div className="h-px bg-border" />

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start Session
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
          >
            Resume
          </Link>
          <div className="ml-auto" />
          <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4">
            ← Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
        This is a placeholder page. The full runner will show image prompts with a countdown and text area for your story.
      </div>
    </div>
  );
}