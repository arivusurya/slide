import { cn } from "@/lib/utils";
import React from "react";
import Spinner from "./spinner";

type Props = {
  state: boolean;
  className?: string;
  children: React.ReactNode;
  color?: string;
};

function Loader({ children, className, state, color }: Props) {
  return state ? (
    <div className={cn(className)}>
      <Spinner color={color} />
    </div>
  ) : (
    children
  );
}

export default Loader;
