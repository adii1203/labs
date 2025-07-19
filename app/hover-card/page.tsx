import HoverCard from "@/components/hover-card";
import { DotPattern } from "@/components/magicui/dot-pattern";
import React from "react";

const page = () => {
  return (
    <div className="grid relative items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <DotPattern width={20} height={20} className="opacity-50" />
      <div className="absolute top-4 right-4 z-50"></div>

      <HoverCard />
    </div>
  );
};

export default page;
