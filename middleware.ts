import { clerkMiddleware } from "@clerk/nextjs/server";

// Protect only the /dashboard route(s); everything else remains public
export default clerkMiddleware();

export const config = {
  matcher: ["/dashboard(.*)"],
};