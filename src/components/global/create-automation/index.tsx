import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import React from "react";

type Props = {};

function CreateAutomation({}: Props) {
  return (
    <Button className="lg:px-10 py-4 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352cc] font-medium to-[#1c2d70]">
      <Zap />
      Ceate Automation
    </Button>
  );
}

export default CreateAutomation;
