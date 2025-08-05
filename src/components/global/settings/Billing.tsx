import React from "react";
import PaymentCard from "./PaymentCard";

type Props = {};

function Billing({}: Props) {
  return (
    <div className="flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container">
      <div className="flex-1">
        <PaymentCard current={"FREE"} label="FREE" />
      </div>
      <div className="flex-1">
        <PaymentCard current={"PRO"} label="PRO" />
      </div>
    </div>
  );
}

export default Billing;
