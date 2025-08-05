import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
      <div className="lg:col-span-4">Automate List</div>
      <div className="lg:col-span-2">
        <div className="flex flex-col rounded-xl bg-slate-500 gap-y-6 p-5 border-[1px] overflow-hidden border-white/20"></div>
      </div>
    </div>
  );
}

export default page;
