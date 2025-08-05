import { Button } from "@/components/ui/button";
import { PLANS } from "@/constant/menu";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import React from "react";

type Props = {
  label: string;
  current: "PRO" | "FREE";
  landing?: boolean;
};

function PaymentCard({ current, label, landing }: Props) {
  return (
    <div
      className={cn(
        label !== current
          ? "bg-muted"
          : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
        "p-[2px] rounded-xl overflow-hidden"
      )}
    >
      <div
        className={cn(
          landing && "radial--gradient--pink",
          "flex flex-col  rounded-xl pl-5 py-3 pr-10 bg-black"
        )}
      >
        {landing ? (
          <h2 className="text-xl text-white">
            {label === "PRO" && "Premium Plan"}
            {label === "FREE" && "Standard"}
          </h2>
        ) : (
          <h2 className="text-xl text-white">
            {label === current
              ? "Your Current Plan"
              : current === "PRO"
              ? "Downgrade"
              : "Upgrade"}
          </h2>
        )}
        <p className="text-gray-400 text-sm mb-2">
          Focus on the content creation and we take care of the rest!
        </p>
        {label === "PRO" ? (
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-semibold text-lg">
            Smart AI
          </span>
        ) : (
          <span className="font-bold text-gray-400 text-2xl">Standard</span>
        )}
        {label === "PRO" ? (
          <p className="mb-2">
            <b className="text-xl text-white">$99.99</b>
          </p>
        ) : (
          <p className="text-xl mb-2 text-white">Free</p>
        )}
        {PLANS[label === "PRO" ? 1 : 0].features.map((i) => (
          <p key={i} className="mt-2 text-gray-400 flex gap-4">
            <CircleCheck className="text-indigo-500" />
            {i}
          </p>
        ))}
        {landing ? (
          <Button
            className={cn(
              "rounded-full mt-5",
              label === "PRO"
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                : "bg-gray-600 text-white hover:bg-gray-700"
            )}
          >
            {label === "PRO"
              ? "Get Started"
              : current === "PRO"
              ? "Free"
              : "Get Started"}
          </Button>
        ) : (
          <Button
            className="rounded-full mt-5 bg-white/10 text-white hover:bg-white/20"
            disabled={label === current}
          >
            {label === current
              ? "Active"
              : current === "PRO"
              ? "Downgrade"
              : "Upgrade"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default PaymentCard;
