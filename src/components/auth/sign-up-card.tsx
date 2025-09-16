"use client";

import { SignUp } from "@clerk/nextjs";

export const SignUpCard = () => (
  <div className="min-h-[60vh] w-full flex items-center justify-center p-6">
    <SignUp appearance={{ 
      elements: { 
        formButtonPrimary: "bg-foreground text-background hover:opacity-90 transition-opacity duration-200",
        rootBox: "w-full max-w-md",
        card: "rounded-xl border border-border shadow-lg",
        headerTitle: "text-2xl font-semibold text-foreground",
        headerSubtitle: "text-muted-foreground",
        formFieldInput: "rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-ring transition-all duration-200",
        formFieldLabel: "text-sm font-medium text-foreground",
        footerActionText: "text-muted-foreground",
        footerActionLink: "text-primary hover:text-primary/80 transition-colors duration-200",
        dividerLine: "bg-border",
        dividerText: "text-muted-foreground",
        socialButtonsBlockButton: "rounded-md border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200",
        socialButtonsBlockButtonText: "font-medium",
        identityPreviewText: "text-muted-foreground",
        identityPreviewEditButton: "text-primary hover:text-primary/80 transition-colors duration-200",
        formResendCodeLink: "text-primary hover:text-primary/80 transition-colors duration-200",
        formMessage: "text-sm",
        formSuccessMessage: "text-success",
        formErrorMessage: "text-destructive",
        formWarningMessage: "text-warning",
        otpCodeFieldInput: "rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-ring transition-all duration-200",
        selectOption: "rounded-md",
        selectSearchInput: "rounded-md border border-input bg-background text-foreground",
        selectButton: "rounded-md border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200",
        verificationLink: "text-primary hover:text-primary/80 transition-colors duration-200",
        clipboardRoot: "rounded-md border border-input bg-background",
        clipboardCopyIcon: "text-muted-foreground",
        clipboardCheckIcon: "text-success"
      },
      layout: {
        helpPageUrl: "https://clerk.com/support",
        logoImageUrl: undefined,
        logoPlacement: "inside",
        privacyPageUrl: "https://clerk.com/privacy",
        showOptionalFields: true,
        socialButtonsPlacement: "bottom",
        socialButtonsVariant: "button",
        termsPageUrl: "https://clerk.com/terms"
      },
      variables: {
        borderRadius: "0.625rem",
        colorBackground: "var(--background)",
        colorDanger: "var(--destructive)",
        colorPrimary: "var(--primary)",
        colorSuccess: "var(--chart-1)",
        colorText: "var(--foreground)",
        colorTextSecondary: "var(--muted-foreground)",
        fontFamily: "var(--font-geist-sans)",
        fontSize: "14px",
        fontSmoothing: "auto",
        spacingUnit: "4px"
      }
    }} />
  </div>
);