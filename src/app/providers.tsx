"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  // useIsMobile()
  const isMobile = useIsMobile();
  console.log("isMobile", isMobile);
  const open = isMobile == true ? true : false;
  return (
    <SessionProvider>
      <SidebarProvider open={open}>
        <AppSidebar />
        {/* <main> */}
        {open && <SidebarTrigger />}
        {children}
        {/* </main> */}
      </SidebarProvider>
    </SessionProvider>
  );
}
