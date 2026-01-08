import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUser } from "@/hooks/get-user-server";
import { cn } from "@/lib/utils";
import { BellDot } from "lucide-react";
import { ModeToggle } from "./theme-switcher";
async function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getUser();
  console.log("session in Header", session);
  const Authenticated = session && session.message !== "User not authenticated";

  if (!Authenticated)
    return (
      <div className="flex flex-col w-full ">
        <h1>hi user please get authenticated</h1>
        {children}
      </div>
    );
  const css = cn(
    "focus:bg-accent focus:text-accent-foreground w-full data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
  );
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center">
        <p className="p-8  text-2xl">
          Hey, {session?.email || "ambsfmn"} Glad to have you back! 🙌
          {/* {`${session}`} */}
        </p>
        <div className="glass-effect p-2 rounded-full flex gap-4 mx-25">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <BellDot size={30} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass-effect">
              <h1>no notifications to show RN</h1>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass-effect">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
              <form action="/api/signout" className="w-full" method="GET">
                {/* <DropdownMenuItem>signout</DropdownMenuItem> */}
                <button
                  data-slot="dropdown-menu-item"
                  className={css}
                  role="menuitem"
                  data-variant="default"
                  type="submit"
                >
                  Sign out
                </button>
              </form>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>

      {children}
    </div>
  );
}

export default Header;
