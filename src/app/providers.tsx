"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { ThemeProvider } from "@/components/Theme-provider";

import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  // useIsMobile()
  const isMobile = useIsMobile();
  console.log("isMobile", isMobile);
  const open = isMobile == true ? true : false;
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider open={open}>
        <AppSidebar />
        {/* <main> */}
        {open && <SidebarTrigger />}
        {children}
        {/* </main> */}
      </SidebarProvider>
    </ThemeProvider>
  );
}

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <>
//       <html lang="en" suppressHydrationWarning>
//         <head />
//         <body>

//             {children}
//           </ThemeProvider>
//         </body>
//       </html>
//     </>
//   )
// }
