"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SIDEBAR_MENU } from "@/constant/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import SubscriptionCard from "../Subscritpion";
import { UserButton } from "@clerk/nextjs";

export function AppSidebar({
  slug,
  ...props
}: { slug: string } & React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <div className="flex justify-center items-center m-3">
          <h1 className="text-primary texxt-3xl ">InstaDm</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {SIDEBAR_MENU.map((item) => {
            const href = `/dashboard/${slug}${item.href}`;
            const isActive =
              pathname === `/dashboard/${slug}${item.href}` ||
              (item.href === "/" && pathname === `/dashboard/${slug}`);

            return (
              <SidebarMenuItem key={item.id}>
                <Link
                  href={href}
                  className={cn(
                    "w-full flex items-center gap-2   rounded-lg",
                    isActive
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  <SidebarMenuButton tooltip={item.label} asChild>
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="flex flex-col items-start px-4 pb-4 gap-4">
        <div className="w-full mt-[-20px]">
          <SubscriptionCard />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
