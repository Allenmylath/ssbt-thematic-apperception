"use client"

import * as React from "react"
import { GraduationCap, Check, MonitorPlay, PencilRuler, TestTubes } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface HomepageHeroProps {
  className?: string
  style?: React.CSSProperties
  showHeader?: boolean
  title?: string
  subtitle?: string
  onGetStarted?: () => void
  onLearnMore?: () => void
}

export default function HomepageHero({
  className,
  style,
  showHeader = true,
  title = "Thematic Apperception Test for SSB Interviews",
  subtitle = "Structured, exam-oriented TAT practice to build clarity of thought, story crafting, and time management for Indian Armed Forces SSB psychological assessment.",
  onGetStarted,
  onLearnMore,
}: HomepageHeroProps) {
  return (
    <section
      className={`relative w-full bg-background ${className ?? ""}`}
      style={style}
      aria-label="Homepage hero for Thematic Apperception Test preparation"
    >
      {/* Subtle decorative backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 h-72 w-[80rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(238,81,68,0.08),rgba(238,81,68,0)_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container relative w-full max-w-full py-8 sm:py-12 md:py-16">
        {showHeader && (
          <header className="mb-8 flex w-full items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-foreground ring-1 ring-border">
                <GraduationCap aria-hidden="true" className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-heading text-base font-semibold leading-none tracking-tight text-foreground">
                  TAT Preparation
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Psychological Testing Platform
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <div className="flex items-center gap-2 rounded-md bg-secondary px-3 py-1.5 text-sm text-foreground ring-1 ring-border">
                <TestTubes aria-hidden="true" className="h-4 w-4" />
                <span className="whitespace-nowrap">Practice Tests</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-secondary px-3 py-1.5 text-sm text-foreground ring-1 ring-border">
                <PencilRuler aria-hidden="true" className="h-4 w-4" />
                <span className="whitespace-nowrap">Structured Guidance</span>
              </div>
            </div>
          </header>
        )}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground ring-1 ring-border">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            For Indian Armed Forces SSB aspirants
          </div>

          <h1 className="mt-4 break-words font-heading text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              aria-label="Get started with TAT preparation"
              onClick={onGetStarted}
              className="bg-primary text-primary-foreground hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
            >
              Get started
            </Button>
            <Button
              aria-label="Learn more about TAT testing"
              variant="secondary"
              onClick={onLearnMore}
              className="group ring-1 ring-inset ring-border hover:ring-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
            >
              <MonitorPlay className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true" />
              Learn more
            </Button>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-3">
            {[
              "Aligned with SSB psychological standards",
              "Time-bound story writing practice",
              "Clear progress and attempt tracking",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="min-w-0 text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}