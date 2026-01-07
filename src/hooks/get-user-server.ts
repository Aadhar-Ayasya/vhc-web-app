import { cookies } from "next/headers";

export async function getUser() {
  const cookieStore = await cookies();

  const res = await fetch("http://localhost:8080/api/v1/user", {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });
  const session = await res.json();
  return session;
}
