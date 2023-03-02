import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="w-full h-full pr-6 overflow-y-auto">
      <div className=" h-full  items-stretch justify-center min-h-[content]">
        <div className="flex flex-1 grow">{/* Put Header here */}</div>
        <div className="flex flex-wrap items-center mt-3 -m-3 flex-2 grow ">
          {/* Main Content */}
        </div>
        <div className="flex w-full mt-6 flex-2 grow">
          <div className="w-full">{/* Footer */}</div>
        </div>
      </div>
    </div>
  );
}
