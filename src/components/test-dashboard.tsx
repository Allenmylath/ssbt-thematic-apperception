"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  CreditCard,
  Check,
  BadgeX,
  CircleDot,
  ShieldCheck,
  PanelTop,
  TestTube,
  Grid2x2Check,
  InspectionPanel,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

type TestItem = {
  id: string;
  name: string;
  description: string;
  durationMinutes: number;
  paid: boolean;
  attended: boolean;
  progress: number; // 0-100
};

type ViewMode = "grid" | "list";

export interface TestDashboardProps {
  tests?: TestItem[];
  defaultView?: ViewMode;
  className?: string;
  onStartTest?: (testId: string) => void;
}

const defaultTests: TestItem[] = [
  {
    id: "tat-01",
    name: "Thematic Apperception Test",
    description:
      "Assess narrative thinking through picture interpretation to evaluate personality and situational judgment.",
    durationMinutes: 30,
    paid: true,
    attended: false,
    progress: 10,
  },
  {
    id: "wats-01",
    name: "Word Association Test",
    description:
      "Respond to word prompts to reveal subconscious attitudes and behavioral tendencies.",
    durationMinutes: 20,
    paid: true,
    attended: true,
    progress: 100,
  },
  {
    id: "srt-01",
    name: "Situation Reaction Test",
    description:
      "Evaluate decision-making by responding to realistic scenarios under time constraints.",
    durationMinutes: 25,
    paid: false,
    attended: false,
    progress: 0,
  },
  {
    id: "sd-01",
    name: "Self-Description Test",
    description:
      "Reflect on personal traits and experiences to showcase self-awareness and values.",
    durationMinutes: 15,
    paid: false,
    attended: false,
    progress: 0,
  },
  {
    id: "tat-02",
    name: "TAT Advanced",
    description:
      "Extended TAT with deeper scenario analysis for nuanced personality insights.",
    durationMinutes: 40,
    paid: true,
    attended: false,
    progress: 55,
  },
];

function StatusBadges({
  paid,
  attended,
  progress,
}: {
  paid: boolean;
  attended: boolean;
  progress: number;
}) {
  const paymentBadge = paid ? (
    <Badge
      variant="default"
      className="bg-primary text-primary-foreground hover:bg-primary/90"
      aria-label="Payment status: Paid"
    >
      <CreditCard className="mr-1.5 h-3.5 w-3.5" />
      Paid
    </Badge>
  ) : (
    <Badge
      variant="secondary"
      className="bg-accent text-foreground hover:bg-accent"
      aria-label="Payment status: Unpaid"
    >
      <CreditCard className="mr-1.5 h-3.5 w-3.5 opacity-70" />
      Unpaid
    </Badge>
  );

  const attendanceBadge = attended ? (
    <Badge
      variant="secondary"
      className="bg-secondary text-foreground"
      aria-label="Attendance: Attended"
    >
      <Check className="mr-1.5 h-3.5 w-3.5" />
      Attended
    </Badge>
  ) : (
    <Badge
      variant="secondary"
      className="bg-muted text-foreground"
      aria-label="Attendance: Not attended"
    >
      <BadgeX className="mr-1.5 h-3.5 w-3.5" />
      Not attended
    </Badge>
  );

  const progressBadge =
    progress >= 100 ? (
      <Badge
        variant="secondary"
        className="bg-secondary text-foreground"
        aria-label="Status: Completed"
      >
        <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
        Completed
      </Badge>
    ) : progress > 0 ? (
      <Badge
        variant="secondary"
        className="bg-secondary text-foreground"
        aria-label="Status: In progress"
      >
        <CircleDot className="mr-1.5 h-3.5 w-3.5" />
        In progress
      </Badge>
    ) : (
      <Badge
        variant="secondary"
        className="bg-muted text-foreground"
        aria-label="Status: Not started"
      >
        <PanelTop className="mr-1.5 h-3.5 w-3.5" />
        Not started
      </Badge>
    );

  return (
    <div className="flex flex-wrap gap-2">
      {paymentBadge}
      {attendanceBadge}
      {progressBadge}
    </div>
  );
}

function TestRow({
  item,
  onStart,
  disabled,
  view,
}: {
  item: TestItem;
  onStart: (id: string) => void;
  disabled: boolean;
  view: ViewMode;
}) {
  const isCompleted = item.progress >= 100;
  const canStart = item.paid && !isCompleted;
  const isDisabled = disabled || !item.paid;

  const StartIcon = item.name.toLowerCase().includes("tat") ? TestTube : Grid2x2Check;

  const actionLabel = isCompleted ? "Review" : item.progress > 0 ? "Resume" : "Start";

  return (
    <Card
      className={cn(
        "bg-card border shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-ring",
        !item.paid && "opacity-75"
      )}
      aria-labelledby={`test-title-${item.id}`}
    >
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle
            id={`test-title-${item.id}`}
            className="text-base sm:text-lg md:text-xl leading-tight"
          >
            <span className="inline-flex items-center gap-2">
              <StartIcon className="h-5 w-5 text-foreground/80" aria-hidden="true" />
              <span className="min-w-0 break-words">{item.name}</span>
            </span>
          </CardTitle>
          <span
            className={cn(
              "shrink-0 rounded-md px-2 py-1 text-xs font-medium",
              "bg-secondary text-foreground"
            )}
            aria-label={`${item.durationMinutes} minutes`}
            title={`${item.durationMinutes} minutes`}
          >
            {item.durationMinutes}m
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed break-words">
          {item.description}
        </p>
        <StatusBadges paid={item.paid} attended={item.attended} progress={item.progress} />
      </CardHeader>
      <CardContent className={cn(view === "list" ? "pt-0" : "pt-0")}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="w-full sm:w-2/3 min-w-0">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
              <span className="sr-only" aria-hidden={false}>
                Progress
              </span>
              <span>{item.progress >= 100 ? "Completed" : "Progress"}</span>
              <span>{item.progress}%</span>
            </div>
            <Progress value={item.progress} className="h-2" />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={canStart ? "default" : "secondary"}
              className={cn(
                "min-w-[96px]",
                !item.paid && "cursor-not-allowed",
                isCompleted && "bg-secondary text-foreground hover:bg-secondary/90"
              )}
              disabled={isDisabled}
              aria-disabled={isDisabled}
              onClick={() => {
                if (!item.paid) {
                  toast("Payment required", {
                    description:
                      "Please complete the payment to access this test.",
                  });
                  return;
                }
                onStart(item.id);
              }}
            >
              <StartIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              {actionLabel}
            </Button>
            {!item.paid && (
              <Button
                variant="outline"
                className="min-w-[96px] bg-secondary text-foreground hover:bg-secondary/80"
                onClick={() => {
                  toast("Redirecting to payment", {
                    description: "Proceed to complete the payment.",
                  });
                }}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Pay now
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestDashboard({
  tests = defaultTests,
  defaultView = "grid",
  className,
  onStartTest,
}: TestDashboardProps) {
  const [query, setQuery] = React.useState("");
  const [statusTab, setStatusTab] = React.useState<
    "all" | "paid" | "unpaid" | "attended" | "not-attended"
  >("all");
  const [sort, setSort] = React.useState<"recent" | "duration-asc" | "duration-desc">("recent");
  const [view, setView] = React.useState<ViewMode>(defaultView);
  const [isLoading, setIsLoading] = React.useState(true);

  // Simulate loading on mount for polish; in real app, control via props/data fetching
  React.useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 650);
    return () => clearTimeout(t);
  }, []);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = tests.filter((t) => {
      const matches =
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.id.toLowerCase().includes(q);
      if (!matches) return false;
      if (statusTab === "paid") return t.paid;
      if (statusTab === "unpaid") return !t.paid;
      if (statusTab === "attended") return t.attended;
      if (statusTab === "not-attended") return !t.attended;
      return true;
    });

    if (sort === "duration-asc") {
      list = [...list].sort((a, b) => a.durationMinutes - b.durationMinutes);
    } else if (sort === "duration-desc") {
      list = [...list].sort((a, b) => b.durationMinutes - a.durationMinutes);
    } else {
      // recent (fallback: sort by progress desc then name)
      list = [...list].sort((a, b) => b.progress - a.progress || a.name.localeCompare(b.name));
    }

    return list;
  }, [tests, query, statusTab, sort]);

  const handleStart = React.useCallback(
    (id: string) => {
      if (onStartTest) {
        onStartTest(id);
      } else {
        toast("Starting test", {
          description: `Loading test ${id}...`,
        });
      }
    },
    [onStartTest]
  );

  return (
    <section
      className={cn(
        "w-full max-w-full bg-background",
        "rounded-lg",
        className
      )}
      aria-label="Test management dashboard"
    >
      <div className="flex flex-col gap-4">
        <header className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              Your Tests
            </h2>
            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant={view === "grid" ? "default" : "secondary"}
                onClick={() => setView("grid")}
                aria-pressed={view === "grid"}
              >
                <Grid2x2Check className="mr-2 h-4 w-4" />
                Grid
              </Button>
              <Button
                variant={view === "list" ? "default" : "secondary"}
                onClick={() => setView("list")}
                aria-pressed={view === "list"}
              >
                <PanelTop className="mr-2 h-4 w-4" />
                List
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="relative w-full md:max-w-md">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tests by name or description"
                aria-label="Search tests"
                className="pr-10"
              />
              <TestTube
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                aria-hidden="true"
              />
            </div>

            <Tabs
              value={statusTab}
              onValueChange={(v: typeof statusTab) => setStatusTab(v)}
              className="w-full md:w-auto"
            >
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="all" className="w-full md:w-auto">
                  All
                </TabsTrigger>
                <TabsTrigger value="paid" className="w-full md:w-auto">
                  Paid
                </TabsTrigger>
                <TabsTrigger value="unpaid" className="w-full md:w-auto">
                  Unpaid
                </TabsTrigger>
                <TabsTrigger value="attended" className="w-full md:w-auto">
                  Attended
                </TabsTrigger>
                <TabsTrigger value="not-attended" className="w-full md:w-auto">
                  Not attended
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="hidden" />
              <TabsContent value="paid" className="hidden" />
              <TabsContent value="unpaid" className="hidden" />
              <TabsContent value="attended" className="hidden" />
              <TabsContent value="not-attended" className="hidden" />
            </Tabs>

            <div className="flex items-center gap-2 md:ml-auto">
              <Select
                value={sort}
                onValueChange={(v: typeof sort) => setSort(v)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Sort: Recent</SelectItem>
                  <SelectItem value="duration-asc">Duration: Short to Long</SelectItem>
                  <SelectItem value="duration-desc">Duration: Long to Short</SelectItem>
                </SelectContent>
              </Select>

              <div className="sm:hidden">
                <Button
                  variant={view === "grid" ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setView(view === "grid" ? "list" : "grid")}
                  aria-label={`Switch to ${view === "grid" ? "list" : "grid"} view`}
                >
                  {view === "grid" ? (
                    <>
                      <PanelTop className="mr-2 h-4 w-4" />
                      List
                    </>
                  ) : (
                    <>
                      <Grid2x2Check className="mr-2 h-4 w-4" />
                      Grid
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </header>

        {isLoading ? (
          <div
            className={cn(
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                : "flex flex-col gap-4"
            )}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="bg-card border">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-5 w-5 rounded-md" />
                      <Skeleton className="h-5 w-40 rounded" />
                    </div>
                    <Skeleton className="h-6 w-10 rounded-md" />
                  </div>
                  <Skeleton className="h-4 w-full rounded" />
                  <Skeleton className="h-4 w-3/5 rounded" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20 rounded-md" />
                    <Skeleton className="h-6 w-24 rounded-md" />
                    <Skeleton className="h-6 w-24 rounded-md" />
                  </div>
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-2 w-full rounded" />
                  <div className="mt-3 flex gap-2">
                    <Skeleton className="h-9 w-24 rounded-md" />
                    <Skeleton className="h-9 w-24 rounded-md" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="w-full rounded-lg border bg-card p-8 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <InspectionPanel className="h-5 w-5 text-foreground" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold">No tests found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search or filters.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Button
                variant="secondary"
                onClick={() => {
                  setQuery("");
                  setStatusTab("all");
                  setSort("recent");
                }}
              >
                Reset filters
              </Button>
            </div>
          </div>
        ) : (
          <div
            className={cn(
              "min-w-0",
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                : "flex flex-col gap-4"
            )}
          >
            {filtered.map((item) => (
              <TestRow
                key={item.id}
                item={item}
                onStart={handleStart}
                disabled={false}
                view={view}
              />
            ))}
          </div>
        )}

        <footer className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
          <div className="min-w-0 truncate">
            Showing {isLoading ? 0 : filtered.length} of {tests.length} tests
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">Legend:</span>
            <span className="inline-flex items-center gap-1">
              <CreditCard className="h-3.5 w-3.5" /> Paid
            </span>
            <span className="inline-flex items-center gap-1">
              <BadgeX className="h-3.5 w-3.5" /> Not attended
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> Completed
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}