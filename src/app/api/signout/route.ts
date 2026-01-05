import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cookieStore = await cookies();

  // Call backend logout
  await fetch("http://localhost:8080/api/v1/logout", {
    method: "GET",
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  // ❗ Clear the session cookie in Next.js
  cookieStore.delete("vhc.sid");

  // Redirect user after logout
  return NextResponse.redirect(new URL("/signup", request.url));
}
