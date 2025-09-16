"use client";

import { toast as sonnerToast } from "sonner";

type ToastOptions = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

export const useToast = () => {
  const toast = (options: ToastOptions) => {
    const { title, description, variant = "default" } = options;
    const message = title && description ? `${title} — ${description}` : title || description || (variant === "destructive" ? "Error" : "Done");
    
    if (variant === "destructive") {
      sonnerToast.error(message);
    } else {
      sonnerToast.success(message);
    }
  };

  return { toast };
};