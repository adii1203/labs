"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const HoverCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x);
  const springY = useSpring(y);

  const moveX = useTransform(springX, [0, 1], [10, -10]);
  const moveY = useTransform(springY, [0, 1], [5, -5]);

  const textX = useTransform(springX, [0, 1], [20, 30]);
  const textY = useTransform(springY, [0, 1], [160, 170]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const bound = target.getBoundingClientRect();

    const width = bound.width;
    const height = bound.height;

    const mouseX = e.clientX - bound.left;
    const mouseY = e.clientY - bound.top;

    const xPt = mouseX / width;
    const yPt = mouseY / height;

    x.set(xPt);
    y.set(yPt);
  };
  return (
    <div>
      <motion.div
        onMouseMove={handleMouseMove}
        className="overflow-hidden w-80 h-[32rem] relative hover:scale-[1.05] transition-all duration-300 ease-in-out rounded-2xl cursor-pointer">
        <motion.div
          style={{
            backgroundPositionX: moveX,
            backgroundPositionY: moveY,
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="w-80 h-[32rem] rounded-2xl  bg-[url(../public/image_2.jpg)] bg-origin-border bg-center bg-cover shadow-2xl">
          <motion.p
            style={{
              left: textX,
              top: textY,
            }}
            className="text-red-600 absolute font-bold text-8xl top-40 left-5">
            tokyo street
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HoverCard;
