import CreateAutomation from "@/components/global/create-automation";
import { AppSidebar } from "@/components/global/sideBar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

function Layout({ children, params }: Props) {
  // Query Client Using React Query
  //   wip : query client fetch data

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" slug={params.slug} />
      <SidebarInset className="bg-black p-2">
        <div className="flex py-2 justify-between">
          <SidebarTrigger className="-ml-1" />
          <CreateAutomation />
        </div>

        <Separator
          orientation="horizontal"
          className=" data-[orientation=vertical]:h-4"
        />
        <div className="px-2 mt-2">{children} </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Layout;
