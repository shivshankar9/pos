import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Use the new 'clerkMiddleware' function
export default clerkMiddleware(() => {
  return NextResponse.next();
});

export const config = {
  matcher: "/((?!_next|static|favicon.ico).*)",
};
