"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PageStartUpLoaderUI() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    console.log("inside effect call");
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  });
  return (
    <>
      {visible && (
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute z-50 flex h-screen w-screen flex-col items-center justify-center bg-custom-logo_background bg-opacity-70"
            >
              <div className="flex">
                <Image
                  src={"/images/Esspl_animation.gif"}
                  alt="data not found"
                  height={250}
                  className="rounded-2xl"
                  width={650}
                ></Image>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
