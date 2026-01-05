"use client";

import { Progress } from "@/components/ui/progress";
import { SectionCards } from "@/components/ui/section-cards";
import { Settings } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import axios from "axios";
export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="w-full">
        <p>Hey {session.user?.name} glad to have you back!🙌</p>
        <button onClick={() => signOut()}>Sign out</button>
        <div className="flex flex-1 flex-row gap-2">
          <SectionCards
            title="14"
            description="progress tracking"
            badge="15%"
            footer="therapy goals achived over the last 3 months"
          >
            <Progress value={50} />
          </SectionCards>
          <SectionCards
            title="14"
            description="progress tracking"
            badge="15%"
            footer="therapy goals achived over the last 3 months"
          >
            <Progress value={50} />
          </SectionCards>
          <SectionCards
            title="22"
            description="Educational Sources"
            badge="-15%"
          >
            <div className="">
              <div className="">
                <BadgeCheck />
                <p>breathing and meditation techniques</p>
              </div>
              <div className="">
                <BadgeCheck />
                <p>identifying the sources of stress</p>
              </div>
            </div>
          </SectionCards>
        </div>
      </div>
    );
  }
  const handleClick = () => {
    axios
      .get("http://localhost:8080/api/v1/user", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      });
    // console.log(response);
  };
  const handleLogout = () => {
    axios
      .post("http://localhost:8080/api/v1/logout", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      });
    // console.log(response);
  };
  return (
    <div className="w-full">
      <button onClick={() => signIn("google")}>Sign in with Google</button>
      <p>Not signed in</p>
      <Link href={"/signup"}>SignUP</Link>
      <div className="@container/main flex flex-1 flex-col gap-2"></div>
      <button onClick={handleClick}>getuser</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
