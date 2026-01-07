// "use client";
import { Progress } from "@/components/ui/progress";
import { SectionCards } from "@/components/ui/section-cards";
import { BadgeCheck } from "lucide-react";
import Upcoming from "@/components/Upcoming";

function Dashboard() {
  return (
    <div className="w-full">
      {/* <div className="flex justify-between">
        <p className="p-4">
          Hey {session?.email || "ambsfmn"} glad to have you back!🙌
        </p>
        <form action="/api/signout" method="GET">
          <button type="submit">Sign out</button>
        </form>
      </div> */}
      <div className="flex flex-1 flex-row gap-2">
        <SectionCards
          classname="h-fit"
          title="14"
          description="progress tracking"
          badge="15%"
          footer="therapy goals achived over the last 3 months"
        >
          <Progress className="bg-white h-7" value={50} />
        </SectionCards>
        <SectionCards
          classname="h-fit"
          title="14"
          description="progress tracking"
          badge="15%"
          footer="therapy goals achived over the last 3 months"
        >
          <Progress className="bg-white h-7" value={50} />
        </SectionCards>
        <SectionCards
          classname="h-fit"
          title="22"
          description="Educational Sources"
          badge="-15%"
        >
          <div className="flex flex-col items-start gap-2">
            <div className="flex justify-center items-center gap-2 ">
              <BadgeCheck />
              <p>breathing and meditation techniques</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <BadgeCheck />
              <p>identifying the sources of stress</p>
            </div>
          </div>
        </SectionCards>
        <Upcoming />
      </div>
    </div>
  );
}

export default Dashboard;
