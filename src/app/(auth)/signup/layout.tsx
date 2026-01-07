import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const session = cookieStore.get("vhc.sid");

  if (session) {
    return redirect("/", RedirectType.push);
  }
  return (
    <>
      {/* <h1>{Authenticated}</h1> */}
      {children}
    </>
  );
}
