import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// nothing special going on here, just copied from https://nextjs.org/docs/app/building-your-application/routing/middleware#example
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/about/:path*",
};
