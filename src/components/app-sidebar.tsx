import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Calendar,
  HomeIcon,
  MessageCircleCode,
  Settings,
  Stethoscope,
} from "lucide-react";
import { usePathname } from "next/navigation";
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
      <SidebarHeader>VHC</SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="h-full!">
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent className="h-full">
            <SidebarMenu className="flex justify-center gap-10 h-full">
              {items.map((item) => (
                <SidebarMenuItem
                  className={`${
                    pathname === item.url ? "bg-blue-800" : "bg-white"
                  } rounded-full flex items-center justify-center h-24`}
                  key={item.title}
                >
                  <SidebarMenuButton className="tag-btn">
                    <a className="tag flex! w-100%" href={item.url}>
                      <item.icon
                        className="test"
                        color={`${pathname === item.url ? "white" : "black"}`}
                      />
                      {isMobile && <span>{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
