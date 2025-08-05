import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "WHATSAPP" | "SHOPIFY";
  isAvailable: boolean;
};

function IntergrstionCard({
  title,
  description,
  icon,
  isAvailable,
  strategy,
}: Props) {
  // wip : fetch and  Integration  from db
  return (
    <div className="border-2 border-indigo-500 rounded-2xl gap-x-5 p-5 flex  items-center">
      {icon}
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col ">
          <h3 className="text-xl">{title}</h3>
          <p className="text-[#9D9D9D] text-base w-full md:w-10/12  ">
            {description}
          </p>
        </div>
        <Button className="bg-gradient-to-br text-white rounded-full text-lg from-[#3352cc] to-[#1c2d70] font-medium hover:opacity-70 transition duration-100">
          Connect
        </Button>
      </div>
    </div>
  );
}

export default IntergrstionCard;
