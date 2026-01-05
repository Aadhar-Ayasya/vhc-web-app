// "use client";

import { Progress } from "@/components/ui/progress";
import { SectionCards } from "@/components/ui/section-cards";
// import { useSession, signIn, signOut } from "next-auth/react";
import { BadgeCheck } from "lucide-react";
import Upcoming from "@/components/Upcoming";
import Link from "next/link";
import axios from "axios";
import Dashboard from "@/components/Dashboard";
export default function Home() {
  return <Dashboard />;
  // const handleClick = () => {
  //   axios
  //     .get("http://localhost:8080/api/v1/user", {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  //   // console.log(response);
  // };
  // const handleLogout = () => {
  //   axios
  //     .post("http://localhost:8080/api/v1/logout", {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  //   // console.log(response);
  // };
  // return (
  //   <div className="w-full">
  //     <button onClick={() => signIn("google")}>Sign in with Google</button>
  //     <p>Not signed in</p>
  //     <Link href={"/signup"}>SignUP</Link>
  //     <div className="@container/main flex flex-1 flex-col gap-2"></div>
  //     <button onClick={handleClick}>getuser</button>
  //     <button onClick={handleLogout}>Logout</button>
  //   </div>
  // );
}
