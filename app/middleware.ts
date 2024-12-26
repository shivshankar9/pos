// middleware.ts
import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default withClerkMiddleware(() => {
  return NextResponse.next();
});

export const config = {
  matcher: "/((?!_next|static|favicon.ico).*)",
};
