import { Button } from "@/components/ui/button";
import React from "react";

const UpgradeButton = () => {
  return (
    <Button
      variant="ghost"
      className="bg-gradient-to-r from-[#6c5ce7] to-[#4b0082] text-white font-semibold px-6 py-2 rounded-full transition-all hover:brightness-110 shadow-md"
    >
      Upgrade Now
    </Button>
  );
};

function SubscriptionCard() {
  return (
    <div className="bg-[#252525] p-4 rounded-2xl flex flex-col gap-y-3 shadow-inner">
      <span className="text-sm text-white">
        Upgrade to{" "}
        <span className="bg-gradient-to-r from-[#cc3Bd4] to-[#D064Ac] font-bold bg-clip-text text-transparent">
          Smart AI
        </span>
      </span>
      <p className="text-[#9B9CA0] font-light text-sm">
        Unlock all the features <br /> including AI and more.
      </p>
      <UpgradeButton />
    </div>
  );
}

export default SubscriptionCard;
