import { INTERGRATIONS } from "@/constant/menu";
import React from "react";
import IntergrstionCard from "./_components/IntergrstionCard";

type Props = {};

function page({}: Props) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-fill lg:w-8/12 gap-y-4">
        {INTERGRATIONS.map((item, key) => (
          <IntergrstionCard key={key} {...item} />
        ))}
      </div>
    </div>
  );
}

export default page;
