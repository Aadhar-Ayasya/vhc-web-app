import { cookies } from "next/headers";

export async function getUser() {
  const cookieStore = await cookies();

  const res = await fetch("http://localhost:8080/api/v1/user", {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  // 🚨 Handle non-JSON responses safely
  const contentType = res.headers.get("content-type");

  if (!res.ok) {
    return { message: "User not authenticated" };
  }

  if (!contentType?.includes("application/json")) {
    return { message: "User not authenticated" };
  }

  return await res.json();
}
