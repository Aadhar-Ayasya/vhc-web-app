import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Calendar,
  HeartPulse,
  HomeIcon,
  MessageCircleCode,
  Settings,
  Stethoscope,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
export function AppSidebar() {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: HomeIcon,
    },
    {
      title: "Inbox",
      url: "#",
      icon: MessageCircleCode,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "therapists",
      url: "/therapist",
      icon: Stethoscope,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];
  const isMobile = useIsMobile();
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <div className="h-20! w-full flex justify-center items-center">
          <HeartPulse
            className=" bg-blue-400 rounded-full "
            color="white"
            size={55}
            fillRule="evenodd"
          />
        </div>
      </SidebarHeader>
      <SidebarContent
        className={`${isMobile && "sidebar-background-gradiant"}`}
      >
        <SidebarGroup className="h-full!">
          <SidebarGroupContent className="h-full">
            <SidebarMenu className="flex  items-center gap-10 h-full">
              {items.map((item) => (
                <Tooltip key={item.title}>
                  <TooltipTrigger className="flex w-full">
                    <a
                      className={`tag flex! w-100% ${
                        pathname === item.url
                          ? "bg-blue-400 rounded-4xl p-2"
                          : (isMobile && "bg-transparent p-2") ||
                            "glass-effect p-2"
                      } ${
                        isMobile
                          ? "flex w-full"
                          : "rounded-full flex  items-center justify-center h-20 w-20"
                      }
                         `}
                      href={item.url}
                    >
                      <SidebarMenuItem
                        className={`${
                          isMobile
                            ? "flex flex-row items-center w-full gap-2"
                            : ""
                        }`}
                      >
                        {/* <SidebarMenuButton tooltip={item.title} className="tag-btn"> */}
                        <item.icon
                          className={`test ${isMobile && "ml-2"}`}
                          color={`${pathname === item.url ? "white" : "black"}`}
                        />
                        {isMobile && (
                          <span className="font-semibold">{item.title}</span>
                        )}

                        {/* </SidebarMenuButton> */}
                      </SidebarMenuItem>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{item.title}</TooltipContent>
                </Tooltip>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
