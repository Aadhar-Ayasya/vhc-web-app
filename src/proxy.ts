// proxy.ts
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get("vhc.sid");
  console.log("session:", session);

  // User is authenticated → continue
  if (session) {
    return NextResponse.next();
  }

  // Not authenticated → redirect to signup
  return NextResponse.redirect(new URL("/signup", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all paths EXCEPT:
     * - /login
     * - /signup
     * - Next.js internals & static assets
     */
    "/((?!login$|signup$|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
