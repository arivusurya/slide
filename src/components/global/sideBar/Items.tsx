import { SIDEBAR_MENU } from "@/constant/menu";
import { UsePaths } from "@/hooks/user-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  slug: string;
};

function Items({ slug }: Props) {
  const { pathname } = UsePaths();

  return SIDEBAR_MENU.map((item) => {
    const href = `/dashboard/${slug}${item.href}`;

    const isActive = pathname === href || pathname.startsWith(href + "/");

    return (
      <Link
        key={item.id}
        href={href}
        className={cn(
          "capitalize flex items-center gap-x-2 my-1 rounded-full px-4 py-3 transition-colors",
          isActive
            ? "bg-[#171717] text-white"
            : "text-slate-400 hover:text-white hover:bg-[#1f1f1f]"
        )}
      >
        {item.icon}
        {item.label}
      </Link>
    );
  });
}

export default Items;
