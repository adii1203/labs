"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="max-w-[40rem] mx-auto">
      <header className="pt-10">
        <p className="text-4xl font-medium underline">labs</p>
      </header>

      <div className="flex items-center justify-between p-4 gap-2 flex-wrap mt-10">
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="w-72 group relative border overflow-hidden rounded-lg transition-all hover:scale-105 ease-in-out duration-200">
          <div className="absolute inset-0 group-hover:bg-linear-to-t transition-colors duration-300 to-transparent from-black/20 pointer-events-none"></div>
          <motion.p
            animate={
              isHover ? { bottom: 10, opacity: 1 } : { bottom: -10, opacity: 0 }
            }
            transition={{ ease: "backInOut", duration: 0.3 }}
            className="absolute bottom-0 left-1 text-2xl font-bold">
            Hover Card
          </motion.p>
          <Link href={"/hover-card"}>
            <div className="aspect-square cursor-pointer">
              <video className="h-full w-full object-cover" muted autoPlay loop>
                <source
                  src="https://ik.imagekit.io/d2nnw1txo/Screen%20Recording%202025-07-19%20190834.mp4"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
