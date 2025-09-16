import Link from "next/link";
import { CheckCircle, FileText, ExternalLink } from "lucide-react";

export default function CompletedTestsPage() {
  const completedTests = [
    { id: 90, date: "Aug 12", score: 85, duration: "25 min" },
    { id: 77, date: "Aug 03", score: 92, duration: "22 min" },
    { id: 65, date: "Jul 28", score: 78, duration: "28 min" },
    { id: 52, date: "Jul 15", score: 91, duration: "23 min" }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Completed Tests</h1>
        <p className="text-sm text-muted-foreground">Review your completed assessments and detailed feedback reports.</p>
      </div>

      <div className="space-y-3">
        {completedTests.map((test) => (
          <div 
            key={test.id} 
            className="group relative overflow-hidden rounded-lg border bg-card p-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-base">TAT Assessment #{test.id}</h3>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{test.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Score: <span className="font-medium text-foreground">{test.score}%</span></span>
                    <span>Duration: {test.duration}</span>
                  </div>
                </div>
              </div>

              <Link 
                href={`/assessments/${test.id}/report`}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <FileText className="h-4 w-4" />
                View Report
                <ExternalLink className="h-3 w-3 opacity-50" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {completedTests.length === 0 && (
        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8 text-center">
          <CheckCircle className="h-12 w-12 text-muted-foreground/50" />
          <div className="space-y-2">
            <p className="text-lg font-medium">No completed tests yet</p>
            <p className="text-sm text-muted-foreground">Complete your first assessment to see it here.</p>
          </div>
        </div>
      )}
    </div>
  );
}