"use client";
import {
  BellDot,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Fingerprint,
  Image,
  Mail,
  Pin,
  Send,
} from "lucide-react";
import React from "react";
import { AnimatePresence, motion } from "motion/react";

const views = {
  1: [
    {
      id: 1,
      element: <CircleUserRound />,
    },
    {
      id: 2,
      element: <Mail />,
    },
    {
      id: 3,
      element: <BookOpen />,
    },
    {
      id: 4,
      element: <Pin />,
    },
  ],
  2: [
    {
      id: 1,
      element: <Image />,
    },
    {
      id: 2,
      element: <BellDot />,
    },
    {
      id: 3,
      element: <Send />,
    },
    {
      id: 4,
      element: <Fingerprint />,
    },
  ],
};

const Toolbar = () => {
  const [view, setView] = React.useState<1 | 2>(1);

  return (
    <div className="px-6 py-3 relative rounded-full bg-secondary overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={view}
          initial={{
            opacity: 0,
            x: view === 1 ? "-100%" : "100%",
            y: view === 1 ? "-50%" : "50%",
          }}
          animate={{ opacity: 1, x: "0%", y: "0%" }}
          transition={{ type: "spring", bounce: 0.3 }}
          exit={{
            opacity: 0,
            x: view === 1 ? "-100%" : "100%",
            y: view === 1 ? "-50%" : "50%",
          }}
          className="flex items-center gap-6">
          {view === 2 ? (
            <button
              onClick={() => setView(1)}
              className="bg-primary-foreground rounded-full text-gray-500 w-10 h-10 flex items-center justify-center cursor-pointer">
              <ChevronLeft />
            </button>
          ) : null}
          {views[view].map((item) => (
            <div className="text-secondary-foreground" key={item.id}>
              {item.element}
            </div>
          ))}
          {view === 1 ? (
            <button
              onClick={() => setView(2)}
              className="bg-primary-foreground rounded-full text-gray-500 w-10 h-10 flex items-center justify-center cursor-pointer">
              <ChevronRight />
            </button>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Toolbar;
