import Loader from "@/components/global/Loader";
import React from "react";

type Props = {};

function loading({}: Props) {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader state>...loading</Loader>
    </div>
  );
}

export default loading;
