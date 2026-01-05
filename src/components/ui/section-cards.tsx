import React, { PropsWithChildren } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";

interface SectionCardsProps {
  title?: string;
  description?: string;
  badge?: string;
  footer?: string;
  classname?: string;
}

export function SectionCards({
  title,
  description,
  classname = "",
  badge,
  footer,
  children,
}: PropsWithChildren<SectionCardsProps>) {
  return (
    <div
      className={`*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 ${classname}`}
    >
      <Card className=" glass-effect">
        <CardHeader>
          {description && <CardDescription>{description}</CardDescription>}
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {title}
          </CardTitle>
          <CardAction>
            {badge && <Badge variant="outline">{badge}</Badge>}
          </CardAction>
        </CardHeader>
        {children && <div className="px-6">{children}</div>}
        {footer && (
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            {footer}
          </CardFooter>
        )}
      </Card>
    </div>
  );
}

//   <Card className="@container/card glass-card">
//     <CardHeader>
//       <CardDescription>Progress tracking</CardDescription>
//       <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
//         14
//       </CardTitle>
//       {/* <CardAction>
//         <Badge variant="outline">
//           <TrendingUpIcon />
//           +12.5%
//         </Badge>
//       </CardAction> */}
//     </CardHeader>
//     <CardFooter className="flex-col items-start gap-1.5 text-sm">
//       <div className="line-clamp-1 flex gap-2 font-medium">
//         Therapy goals achied over the last 3 months
//       </div>
//       {/* <div className="text-muted-foreground">
//         Visitors for the last 6 months
//       </div> */}
//       <Progress value={63} />
//     </CardFooter>
//   </Card>
//   <Card className="@container/card glass-card">
//     <CardHeader>
//       <CardDescription>Progress tracking</CardDescription>
//       <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
//         14
//       </CardTitle>
//       {/* <CardAction>
//         <Badge variant="outline">
//           <TrendingUpIcon />
//           +12.5%
//         </Badge>
//       </CardAction> */}
//     </CardHeader>
//     <CardFooter className="flex-col items-start gap-1.5 text-sm">
//       <div className="line-clamp-1 flex gap-2 font-medium">
//         Therapy goals achied over the last 3 months
//       </div>
//       {/* <div className="text-muted-foreground">
//         Visitors for the last 6 months
//       </div> */}
//       <Progress value={63} />
//     </CardFooter>
//   </Card>
