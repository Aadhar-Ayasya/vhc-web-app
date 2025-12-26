"use client";

import { Progress } from "@/components/ui/progress";
import { SectionCards } from "@/components/ui/section-cards";
import { Settings } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import { BadgeCheck } from "lucide-react";
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
  return (
    <div className="w-full">
      <p>Not signed in</p>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
      <div className="@container/main flex flex-1 flex-col gap-2"></div>
    </div>
  );
}
